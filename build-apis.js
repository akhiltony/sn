require('dotenv').config()
var http = require('https');
var fs = require('fs');
var options = {
  "method": "GET",
  "hostname": process.env.INSTANCE,
  "port": null,
  "path": "/api/8821/api",
  "headers": {
    "authorization": "Basic " + Buffer.from(process.env.INSTANCEUSERNAME + ":" + process.env.INSTANCEPASSWORD).toString("base64")
  }
};
//console.log(options);
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    try{
            var responseObj = JSON.parse(body.toString());
            console.log(responseObj);
            for(var tables in reponseObj.result){
                    var table = responseObj.result[tables];
                    for(var objects in table){
                            console.log(table[objects]);
                            var obj = table[objects];
                            for(var methods in obj){
                            var method = obj[methods];
                            if(typeof method["!doc"]){
                                    console.log(method, method["!doc"]);
                            }
                            }
                    }
                    
            }
    } catch (e){
      console.log('error.....', e);
    }
  });
});

/*
      if(property.sys_name){
        property.sys_name = property.sys_name.replace(/\//gm,'');
      }
      if(property.description){
        // property.description = property.description.replace( /\n+/gm, ' ');// Replace new lines with spaces
        // property.description = property.description.replace( /\"/gm, '`');// Replace " with `
        // property.description = property.description.replace( /\'/gm, '`');// Replace ' with `
        // property.description = property.description.replace(/<\/?[^>]+(>|$)/g, "");//Remove HTML Tags
        // property.description = property.description.replace(/\\/g, "\\\\");// Replace \ with \\
        //property.description = property.description.replace( /[\s\s]+/gm, ' ');
      } else {
        property.description = "";
      }
      if(property.value){
      } else {
        property.value = "";
      }
      var content = `---
title: "${property.sys_name}"
description: "Property"
---

Description: ${property.description}

Value: \`${property.value}\``

// look for file
      fs.writeFile("./content/properties/" + property.sys_name + ".md", content, function(error){
        if(error){
          return console.log(error);
        }
      });
    })
  });
});
*/
req.end();
