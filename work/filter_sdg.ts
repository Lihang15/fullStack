

const data = [{
	"sdgs": "SDG 7",
	"description": "Increase Renewable Energy Use: 1) Development, construction, acquisition, management, and/or Operation & Maintenance of solar and wind (onshore and offshore)with direct emissions of less than 100g-CO2 /kWh 2) Supply energy storage systems (ESS)which contribute to the spread of self-consumption solar power generation 3) R&D and manufacturing of next-generation lithium-ion batteries mainly for storage of solar power generation  Introduction of Renewable Energy: Investments in property plant and equipment (PP&E) for installing solar panels on the roof of stores at Family Mart\t\t",
	"sdgs_target": "SDG Target 7.b",
	"project_category": "Renewable energy"
}, {
	"sdgs": "SDG 11"
}, {
	"sdgs": "SDG 12",
	"sdgs_target": "SDG Target 12.2"
}, {
	"sdgs": "SDG 13",
	"sdgs_target": "SDG Target 13.1"
}, {
	"sdgs": "SDG 7",
	"description": "Improved Energy Efficiency: 1) Introduction of freezers and refrigerators using natural  or climate friendly refrigerant at Family Mart stores 2) Investments in property plant and equipment (PP&E) for LED at Family Mart stores\t\t",
	"sdgs_target": "SDG Target 7.2",
	"project_category": "Energy Efficiency"
}, {
	"sdgs_target": "SDG Target 7.3"
}, {
	"sdgs": "SDG 11"
}, {
	"sdgs": "SDG 13",
	"sdgs_target": "SDG Target 13.1"
}, {
	"sdgs": "SDG 1",
	"description": "Procurement of externally certified coffee beans: Procurement of externally certified coffee beans for the purpose of improving the status of producers and growing sustainable coffee  Procurement of externally certified bonito and tuna: Procurement of certified bonito and tuna from MSC (Marine Stewardship Council) for the purpose of protecting marine resources  Procurement of grape seed oil: Procurement of French grape seed oil using grape seeds after wine making for disposal\t\t",
	"sdgs_target": "SDG Target 1.1",
	"project_category": "Food security "
}, {
	"sdgs": "SDG 2",
	"sdgs_target": "SDG Target 2.4"
}, {
	"sdgs": "SDG 8",
	"sdgs_target": "SDG Target 8.8"
}, {
	"sdgs": "SDG 10"
}, {
	"sdgs": "SDG 12",
	"sdgs_target": "SDG Target 12.3"
}, {
	"sdgs": "SDG 14",
	"sdgs_target": "SDG Target 14.4"
}, {
	"sdgs": "SDG 13",
	"sdgs_target": "SDG Target 13.1"
}, {
	"sdgs": "SDG 15",
	"sdgs_target": "SDG Target 15.2"
}, {
	"sdgs": "SDG 3",
	"description": "Providing medical services:  Planning, designing, maintenance of medical institutions intended to provide medical services, education and training support for doctors and nurses, education support for patients\t\t",
	"sdgs_target": "SDG Target 3.8",
	"project_category": "Access to essential services (Eg. Health, education and vocational training, healthcare, financing and financial services)"
}, {
	"sdgs": "SDG 10",
	"description": "Mini Grid: Sales and operation of small-scale power generation and distribution systems intended to supply electricity to people living in non-electrified areas of Africa\t",
	"sdgs_target": "SDG Target 10.2",
	"project_category": "Affordable basic infrastructure (Eg. Clean drinking water, sewers, sanitation, transport, energy)"
}, {
	"sdgs": "SDG 11",
	"sdgs_target": "SDG Target 11.1"
}, {
	"sdgs": "SDG 7",
	"sdgs_target": "SDG Target 7.b"
}, {
	"sdgs": "SDG 9",
	"sdgs_target": "SDG Target 9.a"
}]


let sdgs = [ 'SDG 7','SDG 8', 'SDG 9']
let sdgs_target = ['SDG Target 7.b','SDG Target 3','SDG Target 4', 'SDG Target 8.1','SDG Target 8.2']
function getSdgs(sdgs: Array<string>, sdgs_target: Array<string>) {
  const result = [];
  const sdgsNumberArr: Array<string> = [];
  const sdgsTargetNumberArr: Array<string> = [];
  if (sdgs.length > 0 && sdgs_target.length > 0) {
    for (const item of sdgs) {
      if (item) {
        const str = item.match(/[0-9]+/);
        if (str) {
          sdgsNumberArr.push(str[0]);
        }

      }
    }
    for (const item_t of sdgs_target) {
      if (item_t) {
        const str = item_t.match(/[0-9]+\.*[0-9]*[a-z]*/);
        if (str) {
          sdgsTargetNumberArr.push(str[0]);
        }
      }
    }
    for (let i = 0; i < sdgsNumberArr.length; i++) {
      const sdgsObj = { sdg: '', sdgTargets: [] };
      sdgsObj.sdg = sdgsNumberArr[i]
      for (let j = 0; j < sdgsTargetNumberArr.length; j++) {
        let repx = /[a-z]+/
        let sdgT= sdgsTargetNumberArr[j]
        if(repx.test(sdgsTargetNumberArr[j])){
          sdgT = sdgsTargetNumberArr[j].match(/[0-9]+/)[0];
        }
        if (parseFloat(sdgsNumberArr[i]) <= parseFloat(sdgT) && parseFloat(sdgsNumberArr[i]) + 1 > parseFloat(sdgT)) {
          sdgsObj.sdgTargets.push(sdgsTargetNumberArr[j]);
          sdgsTargetNumberArr.splice(j, 1);
          if(sdgsTargetNumberArr.length===0){
            break;
          }
          j = -1;
        }
      }
      result.push(sdgsObj);
    }
    if (sdgsTargetNumberArr.length > 0) {
      for (const item of sdgsTargetNumberArr) {
        const sdgsObj = { sdgTargets: [] };
        sdgsObj.sdgTargets.push(item);
        result.push(sdgsObj);
      }
    }
    return result;
  } else if (sdgs.length > 0 && sdgs_target.length <= 0) {
    const sdgsNumberArr: Array<string> = [];
    for (const item of sdgs) {
      if (item) {
        const str = item.match(/[0-9]+/);
        if (str) {
          sdgsNumberArr.push(str[0]);
        }
      }
    }
    for (let i = 0; i < sdgsNumberArr.length; i++) {
      const sdgsObj = { sdg: '' };
      sdgsObj.sdg = sdgsNumberArr[i]
      result.push(sdgsObj);
    }
    return result;
  } else if (sdgs.length <= 0 && sdgs_target.length > 0) {
    const sdgsTargetNumberArr: Array<string> = [];
    for (const item_t of sdgs_target) {
      if (item_t) {
        const str = item_t.match(/[0-9]+\.*[0-9]*[a-z]*/);
        if (str) {
          sdgsTargetNumberArr.push(str[0]);
        }
      }
    }
    for (const item of sdgsTargetNumberArr) {
      const sdgsObj = { sdgTargets: [] };
      sdgsObj.sdgTargets.push(item);
      result.push(sdgsObj);
    }
    return result;
  }
  return result;
}
console.log(getSdgs(sdgs,sdgs_target))
// for(const ProjectCategorie of data){
//   let sdgArgs =[]
//   if(ProjectCategorie.sdgs){
//     if(Array.isArray(ProjectCategorie.sdgs)){
//       sdgArgs = [...ProjectCategorie.sdgs]
//     }else{
//       sdgArgs = [ProjectCategorie.sdgs]
//     }
//   }
//   let sdgTargetArgs = []
//   if(ProjectCategorie.sdgs_target){
//     if(Array.isArray(ProjectCategorie.sdgs_target)){
//       sdgTargetArgs = [...ProjectCategorie.sdgs_target]
//     }else{
//       sdgTargetArgs = [ProjectCategorie.sdgs_target]
//     }
//   }
//   const sdgs = getSdgs(sdgArgs,sdgTargetArgs);
//   console.log(sdgs)
// }


  // let s ='SDG Target 13'
  // const str = s.match(/[0-9]+/);
  // console.log(str[0])

//  console.log(parseFloat('1')) 
 