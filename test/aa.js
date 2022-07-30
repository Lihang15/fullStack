const a = [{"role": "dealer", "title": "Dealer", "isFixed": false, "sorting": 1000, "maxUsers": 10, "canCreate": true, "isMultiple": true, "staticUserId": null, "canBeProjectLead": true}, 
{"role": "issuer", "title": "Issuer", "isFixed": false, "sorting": 900, "maxUsers": 10, "canCreate": true, "isMultiple": false, "staticUserId": null, "canBeProjectLead": false}, 
{"role": "custodian", "title": "Custodian", "isFixed": false, "sorting": 800, "maxUsers": 10, "canCreate": true, "isMultiple": false, "staticUserId": null, "canBeProjectLead": false},
 {"role": "payingAgent", "title": "Paying Agent", "isFixed": false, "sorting": 700, "maxUsers": 10, "canCreate": true, "isMultiple": false, "staticUserId": null, "canBeProjectLead": false}, 
 {"role": "depositaryAgent", "title": "Depositary Agent", "isFixed": false, "sorting": 600, "maxUsers": 10, "canCreate": true, "isMultiple": false, "staticUserId": null, "canBeProjectLead": false}, 
 {"role": "centralDepositary", "title": "Central Depositary", "isFixed": false, "sorting": 500, "maxUsers": 10, "canCreate": true, "isMultiple": false, "staticUserId": null, "canBeProjectLead": false}, 
 {"role": "operator", "title": "Operations / Support", "isFixed": false, "sorting": 400, "maxUsers": 10, "canCreate": true, "fixedUsers": ["21887394"], "isMultiple": false, "staticUserId": null, "canBeProjectLead": false}]
const DealParty = a.find(dealParty => dealParty.s);
console.log(DealParty)