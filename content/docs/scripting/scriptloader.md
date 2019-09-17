---
# Course title, summary, and position.
linktitle: ScriptLoader
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: ScriptLoader
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
    name: ScriptLoader
    weight: 1
---


So if you want to reuse a script across many client scripts there's two
ways I see it being able to be done easily. One, is to use a Script
Include and a [GlideAjax](/GlideAjax) call to handle the logic server
side. Two, is to create a UI Script and load it with `ScriptLoader` call
described here or on the [developer
site](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=c_ScriptLoaderAPI).

Lets get to it. How to call this in a client script.

``` {.js}
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    ScriptLoader.getScripts('x_8821_catalog.awesome.jsdbx', function() {
        console.log('onchange');
        console.log(x_8821_catalog.awesome);
    });
    //Type appropriate comment here, and begin script below
}
```
