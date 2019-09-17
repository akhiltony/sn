require('dotenv').config()
var https = require('https');
var fs = require('fs');
var options = {
  "method": "GET",
  "hostname": process.env.INSTANCE,
  //"port": null,
  "path": "/api/now/table/sys_properties?sysparm_fields=sys_name,value,description",
  "headers": {
    "authorization": "Basic " + Buffer.from(process.env.INSTANCEUSERNAME + ":" + process.env.INSTANCEPASSWORD).toString("base64")
  }
};
console.log(options);
var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    var responseObj = JSON.parse(body.toString());
    //console.log(responseObj);
    responseObj.result.forEach(function(property, index){
      console.log(property);
    })
  });
});
req.on("error", function(e){
  console.log(e);
})
req.end();

