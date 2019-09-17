---
# Course title, summary, and position.
linktitle: GlideAjax
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1
aliases: ['/glideajax','/ajax']
# Page metadata.
title: GlideAjax
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  scripting:
    parent: Scripting
    name: GlideAjax
    weight: 1
---

When using GlideAjax I have to always look up the example on the wiki. One thing that I’ve learned is if you create a initialize function, it will break the client-callable script include.

Every GlideAjax call has at least two components required. The script include and the client side script.

Below I’ll put down a simple example of how I start up on these things.

## Script Include

```js
var SomeUtil = Class.create();
SomeUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    // If you want to use initialize you can only if you include
    // AbstractAjaxProcessor with something like this;
    /*
    initialize: function(request, responseXML, gc) {
        global.AbstractAjaxProcessor.prototype.initialize.call(this, request, responseXML, gc);
        // Your code
    },
    */
    awesomeFunction: function(){
        var inputObj = JSON.parse(this.getParameter('sysparm_obj'));
        var returnObj = {
            from:"server",
            input: inputObj
        };
        return JSON.stringify(returnObj);
    },
    type: 'SomeUtil'
});
```

## Client Script

```js
var ga = new GlideAjax('global.SomeUtil');
ga.addParam('sysparm_name', 'awesomeFunction');
ga.addParam('sysparm_obj', JSON.stringify({"hoo":"raa"}));
ga.getXML(function(response){
    var responseDocument = response.responseXML.documentElement;
    var answer = responseDocument.getAttribute('answer');
    var serverObj = JSON.parse(answer);
    console.log(serverObj);
});
```

Note It seems that if you use the function name of getName it fails to return, so avoid that name I guess.