var XLSX = require("xlsx");
const {writeFile} = require("xlsx-style") 
// const tableData = []
// const colData = []
// const originData = [{
//   "skuId":"00001",
// "skuName":"nameSku0001",
// "w00001":{"warehouseId":"w00001","warehouseName":"仓库1","quantity":50,"lockQuantity":5,"availableQuantity":45},
// "w00002":{"warehouseId":"w00002","warehouseName":"仓库2","quantity":200,"lockQuantity":5,"availableQuantity":195},
// "w00003":{"warehouseId":"w00003","warehouseName":"仓库3","quantity":40,"lockQuantity":1,"availableQuantity":39}},
// {"skuId":"00002","skuName":"nameSku0002","warehouseItem":[{"warehouseId":"w00001","warehouseName":"仓库1","quantity":100,"lockQuantity":5,"availableQuantity":95},{"warehouseId":"w00002","warehouseName":"仓库2","quantity":200,"lockQuantity":5,"availableQuantity":195},{"warehouseId":"w00003","warehouseName":"仓库3","quantity":5,"lockQuantity":5,"availableQuantity":0}],"w00001":{"warehouseId":"w00001","warehouseName":"仓库1","quantity":100,"lockQuantity":5,"availableQuantity":95},"w00002":{"warehouseId":"w00002","warehouseName":"仓库2","quantity":200,"lockQuantity":5,"availableQuantity":195},"w00003":{"warehouseId":"w00003","warehouseName":"仓库3","quantity":5,"lockQuantity":5,"availableQuantity":0}},{"skuId":"00003","skuName":"nameSku0003","warehouseItem":[{"warehouseId":"w00001","warehouseName":"仓库2","quantity":100,"lockQuantity":5,"availableQuantity":95},{"warehouseId":"w00002","warehouseName":"仓库2","quantity":200,"lockQuantity":5,"availableQuantity":195},{"warehouseId":"w00003","warehouseName":"仓库3","quantity":50,"lockQuantity":5,"availableQuantity":45}],"w00001":{"warehouseId":"w00001","warehouseName":"仓库2","quantity":100,"lockQuantity":5,"availableQuantity":95},"w00002":{"warehouseId":"w00002","warehouseName":"仓库2","quantity":200,"lockQuantity":5,"availableQuantity":195},"w00003":{"warehouseId":"w00003","warehouseName":"仓库3","quantity":50,"lockQuantity":5,"availableQuantity":45}}]










var worksheet = XLSX.utils.aoa_to_sheet([
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"]
  ],{cellStyles:true});


  worksheet['!merges'] = [XLSX.utils.decode_range('A1:A2')]



const wscols = [
  { wpx: 220 }, // 第一列宽度设置单位px
  { wpx: 220 }
]
worksheet['!cols'] = wscols

worksheet['B3']['s'] = {
  fill: { //背景色
    fgColor: { rgb: 'FFFF00' }
  },
  font: {//字体
    name: '等线',
    sz: 11,
    bold: true
  },
  alignment:{
    horizontal:'center' //水平居中
  }
}




  let workBook = {
    SheetNames: ['jsonWorkSheet'],
    Sheets: {
      'jsonWorkSheet': worksheet,
    }
  };

  writeFile(workBook, "./issuer.xlsx");
