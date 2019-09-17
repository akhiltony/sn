require('dotenv').config()
var http = require('https');
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
var req = http.request(options, function (res) {
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
      var safe_desc = "";
      if(property.sys_name){
        property.sys_name = property.sys_name.replace(/\//gm,'');
      }
      if(property.description){
        if(property.sys_name.toLowerCase().indexOf('regex')==0){
        try{
        safe_desc = property.description.replace( /\n+/gm, ' ');// Replace new lines with spaces
        safe_desc = safe_desc.replace( /\"/gm, '`');// Replace " with `
        safe_desc = safe_desc.description.replace( /\'/gm, '`');// Replace ' with `
        safe_desc = safe_desc.description.replace(/<\/?[^>]+(>|$)/g, "");//Remove HTML Tags
        safe_desc = safe_desc.description.replace(/\\/g, "\\\\");// Replace \ with \\
        safe_desc = safe_desc.description.replace( /[\s\s]+/gm, ' ');
        safe_desc = safe_desc.length = 50;
        }catch(e){}
      }
      } else {
        property.description = "";
      }
      if(property.value){
      } else {
        property.value = "";
      }
      var content = `---
# Course title, summary, and position.
linktitle: "${property.sys_name}"
summary: "${safe_desc}"
weight: 1
# Page metadata.
title: "${property.sys_name}"
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: false  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID name.
# - weight: Position of link in menu.
menu:
  properties:
    parent: Properties
    name: "${property.sys_name}"
    weight: 1
---

Description: ${property.description}


Value: \`${property.value}\``

// look for file
      fs.writeFile("./content/docs/properties/" + property.sys_name + ".md", content, function(error){
        if(error){
          return console.log(error);
        }
      });
    })
  });
});

req.end();

