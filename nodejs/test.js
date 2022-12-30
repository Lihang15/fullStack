const schedule = require('node-schedule');
const moment = require('moment')

//用来维护按时执行任务 比如2022-11-12 9:00
//【{id:policy.id,job}】
let allJob = []

//用来维护周期性任务
//【{id:policy.id,job}】
let allSonJob = []

function dataSource() {
  const templeteList1 = [
    {
      id: 1,
      to_users: ['wanglihang', 'suzhidong'],
      frequency: 'weekly',
      template_id: '1',
      isUpdate: false,
      send_start_date: '2022-11-09',
      send_end_date: '2022-12-04',
      send_time: '16',
      is_suspend: false,
      content: '定时任务一'
    },
    {
      id: 2,
      to_users: ['wanglihang', 'suzhidong'],
      frequency: 'daily',
      template_id: '2',
      isUpdate: false,
      send_start_date: '2022-11-09',
      send_end_date: '2022-12-04',
      send_time: '16',
      is_suspend: false,
      content: '定时任务二'
    },
  ]

  let result = templeteList1
  // console.log(Math.floor(Math.random()*10)>3)
  // if((Math.floor(Math.random()*10))/2<3){
  //   result = templeteList2
  // }
  return result
}
// 更新过的策略 会重新开始，没更新过的不变
function start() {
  const templeteList = dataSource()
  // console.log('当前数据源', templeteList)
  for (const policy of templeteList) {
    //暂停的任务要清除 job
    if (policy.is_suspend) {
      clearJob(policy)
    } else {
      //非暂停
      // 已过期
      if (moment().format('YYYY-MM-DD')===moment(policy.send_end_date).format('YYYY-MM-DD')) {
        clearJob(policy)
      } else {
        //未过期
        if (policy.isUpdate) {
          clearJob(policy)
          //清除老任务后再开始新任务
          task(policy)
        } else {
          // 第一次加载 或者新加的未暂停，未过期，未更新的job但是不在当前job列表里的job添加进去
          if (!allJob.map((item) => {
            return item.id
          }).includes(policy.id)) {
            task(policy)
          }
        }
      }
    }
  }
}

// 清除暂停 和更新过数据情况下的job

function clearJob(policy) {
  const job = allJob.filter((job) => {
    return job.id === policy.id
  }).find((item) => {
    return item
  })
  // 清除这条没用的job
  alljob = allJob.filter((job) => {
    return job.id !== policy.id
  })
  // 清除job
  if (job.job) {
    job.job.cancel()
  }
  const sonJob = allSonJob.filter((job) => {
    return job.id === policy.id
  }).find((item) => {
    return item
  })

  allSonJob = allSonJob.filter((job) => {
    return job.id !== policy.id
  })
  //清除这个任务对应的子任务
  if (sonJob.job) {
    sonJob.job.cancel()
  }
}

// 启动任务
function task(policy) {
  const month = moment(policy.send_start_date).month()+1
  const day = moment(policy.send_start_date).date()
  if (policy.frequency === 'weekly') {
    const job1 = schedule.scheduleJob(`0 0 ${policy.send_time} ${day} ${month} *`, () => {
      console.log('开始weekly job：', policy.content);
    })
    allJob.push({ id: policy.id, job1 })
    // 每周1号 和传入时间点开始
    const job2 = schedule.scheduleJob(`0 0 ${policy.send_time} * * 1`, () => {
      console.log('开始weekly job son：', policy.content);
    });
    allSonJob.push({ id: policy.id, job2 })
  }
  if (policy.frequency === 'daily') {
    const job1 = schedule.scheduleJob(`0 0 ${policy.send_time} ${day} ${month} *`, () => {
      console.log('开始daily job：', policy.content);
    })
    allJob.push({ id: policy.id, job1 })
    // 每天传入时间点开始
    const job2 = schedule.scheduleJob(`0 0 ${policy.send_time} * * *`, () => {
      console.log('开始daily job son：', policy.content);
    });
    allSonJob.push({ id: policy.id, job2 })
  }
  
   if(policy.frequency === 'hour'){
    const job1 = schedule.scheduleJob(`0 0 ${policy.send_time} ${day} ${month} *`, () => {
      console.log('开始weekly job：', policy.content);
    })
    allJob.push({ id: policy.id, job1 })
    // 每小时
    const job2 = schedule.scheduleJob(`0 0 * * * *`, () => {
      console.log('开始weekly job son：', policy.content);
    });
    allSonJob.push({ id: policy.id, job2 })
   }
   if(policy.frequency==='monthly'){
    const job1 = schedule.scheduleJob(`0 0 ${policy.send_time} ${day} ${month} *`, () => {
      console.log('开始weekly job：', policy.content);
    })
    allJob.push({ id: policy.id, job1 })

    // 每月1号和传入时间
    const job2 = schedule.scheduleJob(`0 0 ${policy.send_time} 1 * *`, () => {
      console.log('开始weekly job son：', policy.content);
    });
    allSonJob.push({ id: policy.id, job2 })

   }
   if(policy.frequency==='year'){
      const job1 = schedule.scheduleJob(`0 0 ${policy.send_time} ${day} ${month} *`, () => {
        console.log('开始weekly job：', policy.content);
      })
      allJob.push({ id: policy.id, job1 })
    // 每年1月1号和传入时间
      const job2 = schedule.scheduleJob(`0 0 ${policy.send_time} 1 1 *`, () => {
        console.log('开始weekly job son：', policy.content);
      });
      allSonJob.push({ id: policy.id, job2 })
   }
   if(policy.frequency==='minute'){
    const job1 = schedule.scheduleJob(`0 0 ${policy.send_time} ${day} ${month} *`, () => {
      console.log('开始weekly job：', policy.content);
    })
    allJob.push({ id: policy.id, job1 })
    // 每分钟
    const job2 = schedule.scheduleJob(`0 * * * * *`, () => {
      console.log('开始weekly job son：', policy.content);
    });
    allSonJob.push({ id: policy.id, job2 })
  }
}



setInterval(() => {
  start()
  console.log('allJob:', allJob.length)
  console.log('sonJob:', allSonJob.length)
  // 需要重制数据库更新状态
}, 3000)






