// const moment = require('moment');

// // 获取当前日期
// const currentDate = moment().format('YYYY-MM-DD');

// const will_expire_time_date = moment('2023-09-22 12:14:15').subtract(30, 'days').format('YYYY-MM-DD');

// const data = moment('2023-09-22 12:14:15').format('YYYY-MM-DD')
// console.log(will_expire_time_date)
// // console.log(data)

// // console.log(currentDate)
// a = undefined
// const key ={name:'wanglihang',...a}
// console.log(key)

const moment = require('moment');

const date = '2023-08-15';
// 获取三月的英文名称
const marchMonthName = moment(date).format('MMM');


console.log(`三月的英文名称：${marchMonthName}`);

const daysInMonth = moment(date).daysInMonth();

console.log(`该日期所在月份的天数为：${daysInMonth} 天`);

const year = moment(date).year();

console.log(`该日期的年份为：${year}`);

const newDate = `${daysInMonth} ${marchMonthName} ${year}`

console.log(`该日期的年份为：${newDate}`);

let receiveDate = '2023-01-21 11:12:885'


  console.log(moment('dadada').isValid())

  
  const specificDate = moment('2023-05-26');


  const originalString = "这是一个包含\n要替换的文本的字符串，要替换的文本\\n在这里。";

// 使用正则表达式替换字符串
const replacedString = originalString.replace(/\n.*/g, '');

console.log(replacedString)

const a=[{name:'12'},{name:'12',ven: 'a'},{name:'34'}]
const x = a.find((v)=>v.name==='12'&&v.ven==='a')
console.log(x)

const path = require('path');

// 获取当前文件所在的目录的上级目录
const parentDirectory = path.join(__dirname, '../test');

// 假设你有一个包含对象的数组
const array = [
  { id: 1, time: '2023-01-01 16:12:10'},
  { id: 2, time: '2023-03-15 15:13:10' },
  { id: 3, time: '2023-01-01 15:12:15' }
];

// 找到时间属性最小的对象
const minTimeObject = array.reduce((min, obj) => (obj.time < min.time ? obj : min), array[0]);

// 添加最小的属性到时间最小的对象中
minTimeObject.min = true;

// 将其他对象的min属性设置为false
array.forEach(obj => {
  if (obj !== minTimeObject) {
    obj.min = false;
  }
});

console.log(array); // 输出带有新属性的数组

let aaa = '2023-07-01 16:12:10'
let bbb = '2023-06-01 16:12:10'
if(aaa>bbb){
 console.log(true)
}