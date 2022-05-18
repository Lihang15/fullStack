
var XLSX = require("xlsx");
let arrayData = [
    [ 'Issuer Name', 'wanglihang' ],
    [ 'Issuer Info', '' ],
    [ 'Country', 'China' ],
    [ 'Website', 'www.wlh.com' ],
    [ 'Sector', '张三' ],
    [ 'Issuer Type', '不清楚' ],
    [ 'Standard', 'stand1', 'stand2' ],
    [ 'External Review Provider', 'aaa', 'bbb' ],
    [ 'URL of Framework', 'wanglihang' ],
    [ 'URL of External Review / Second Opinion', 'https://www.aaaa.com/aaa' ],
    [ '', '' ],
    [ 'Framework0', '' ],
    [ 'Introduction', '第二条' ],
    [ 'Use of Proceeds', 'c' ],
    [ 'Process for Selection & Evaluation', 'h' ],
    [ 'Management of Proceeds', 'e' ],
    [ 'Process for Reporting', 'i' ],
    [ 'Disclaimer', 'k' ],
    [ 'Framework Date', '2022-02-21' ]
  ]

  let arrayData2 = [
    [ 'Eligible Project Categories1', '' ],
    [ 'Target Population', '从我往下存detail sorting和我必须输入' ],
    [ 'Project Category', '测试json数组', 'issuer1-xx1' ],
    [ 'SDGs', '1', 1 ],
    [ 'SDGs Target' ],
    [ 'Description' ],
    [ '', '' ],
    [ 'Allocation by Project Category', '' ],
    [ 'Introduction', '123' ],
    [ 'GBP/SBP Project Category' ],
    [ 'Allocated Proceeds' ],
    [ 'Currency' ],
    [ '% Disbursed', '' ],
    [ '% Disbursed' ],
    [ 'Note on Allocation' ],
    [ 'Impact KPIs', '' ],
    [ 'Reporting Methodology for Project Category', 'a', 'b' ],
    [ 'Project Category', '111' ],
    [ 'Impact Metric', 'test' ],
    [ 'Metric Value' ],
    [ 'Metric Type', 'test' ],
    [ 'Metric Description', 'test' ],
    [
      'Estimated GHG Emissions Savings per million invested (tonnes)',
      '11'
    ],
    [ 'Currency', '1' ],
    [ 'Allocation/Impact Report Date', 'xx' ]
  ]

  let jsonWorkSheet = XLSX.utils.json_to_sheet(arrayData,{skipHeader:true,cellStyles:true});
//   jsonWorkSheet['A'] = {s:{fgColor:{rgb:"C0504D"}}}
jsonWorkSheet['A3']= {s: {fill: { bgColor: { rgb: "##0000FF"}}}}

  let jsonWorkSheet2 = XLSX.utils.json_to_sheet(arrayData2,{skipHeader:true});
  let workBook = {
    SheetNames: ['jsonWorkSheet','jsonWorkSheet2'],
    Sheets: {
      'jsonWorkSheet': jsonWorkSheet,
      'jsonWorkSheet2': jsonWorkSheet2
    }
  };

  XLSX.writeFile(workBook, "./issuer.xlsx");

// const data = XLSX.write(workBook,{type: 'buffer'});

// console.log(data)
