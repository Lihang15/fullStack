
// 自定义缓存

// class cache{
//    constructor(){
//     this.cache = {};
//    }
//     get(key){
//        return this.cache[key]
//     }

//     set(key, value, expire){
//         this.cache[key] = value
//       if(expire){
//          setTimeout(()=>{
//             this.delete(key)
//          },expire)
//       }
//     }

//     delete(key){
//       delete this.cache[key] 
//     }
// }

// const redis = new cache()
// redis.set('name','wanglihang',3000)

// redis.set('name1','liuhui')

// setInterval(()=>{
//   console.log(redis.get('name'))
//   console.log(redis.get('name1'))
// },1000)

// 自定义events

// 　class events{
//     constructor(){
//         this.events = {}
//     }
//     on(key,callback){
//         if(!this.events[key]){
//             this.events[key] = []
//         }
//       this.events[key].push(callback)
//     }
//     emit(key,...arg){
//        const callbacks = this.events[key]
//        for(const callback of callbacks){
//           callback.call(this,...arg)
//        }
//     }
// }

// const myEvent = new events();

// myEvent.on('hi',(data,dd)=>console.log(data,dd))

// myEvent.emit('hi','xasxasx','xxx')


//处理异步操作

// const set = new Set([1,2,3,3])
// set.add('4')

// set.forEach(value=>console.log(value))

// const map = new Map([
//   ['key1','123'],
//   ['key2','456']
// ])

// console.log(map);
// map.set('aa','xxx')

// console.log(map.has('key1'));
// map.forEach(value=>console.log(value))

// const a = [...'first']
// console.log(a);


function node(value){
  this.value = value;
  this.next = null;
}

const node1 = new node(10)
const node2 = new node(20)
const node3 = new node(30)

node1.next = node2;
node2.next = node3;
node3.next = null


function printList(head){

  while(head){
    console.log(head.value);
    head = head.next
  }
}

printList(node1)