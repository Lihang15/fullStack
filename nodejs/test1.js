

const vendor_buyer_map_table=[
    {
        financing_type:"disclosed",
        vendor_cid:'1',
        buyer_id: 1

    },
    {
        financing_type:'disclosed',
        vendor_cid:'1',
        buyer_id: 1
    },
    {
        financing_type:'disclosed',
        vendor_cid:'1',
        buyer_id: 3
    },
    { financing_type:'disclosed',
        vendor_cid:'2',
        buyer_id:2

    }
]

const buyers = vendor_buyer_map_table.filter(item => {
    return item.vendor_cid === '1' && item.financing_type === 'disclosed';
  }).reduce((previousValue, currentValue)=>{
    if(previousValue.includes(currentValue.buyer_id)){
        return previousValue
    }else{
        previousValue.push(currentValue.buyer_id)
        return previousValue;
    }

  },[])
      
   

  console.log(buyers)