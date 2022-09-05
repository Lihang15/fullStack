
let invoice = [{no:1456},{no:20415222}]
let data = invoice.map(item => {
    return item.no;
  }).toString()

  console.log(data)