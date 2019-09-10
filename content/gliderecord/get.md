---
title: get
description: 
---


This method is a shortcut to get the first record found that matches the parameters you pass in this method.

```js
// available for both client and server
// expects one of;
// sys_id e.g. .get('asdf1234asdf1234asfd1234asdf1234');
// column, and value e.g. .get('number','INC12345');
// returns
// boolean and moves object onto the record if boolean is true
var incident = new GlideRecord('incident');
if(incident.get('number','INC12345')){//returns true if found
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```