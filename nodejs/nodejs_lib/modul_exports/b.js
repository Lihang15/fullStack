
class async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: data, moreData`;
}

getAll().then((all) => {
  console.log('all the data')
})
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.emit('my_event');
eventEmitter.on('my_event', () => {
  console.log('data received successfully.');
});

str =""
console.log(str)
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))
