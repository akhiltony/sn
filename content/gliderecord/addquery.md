---
title: addQuery
description: 
---
This method is most common when coming across queries. Generally folks with either have many addQuery methods declared, or one addEncodedQuery.

```js
// available for both client and server
// expects;
// string e.g. .addQuery('number=INC12345');
// two strings e.g. .addQuery('number','INC12345');
// three strings e.g. .addQuery('number', '=', 'INC12345');
// returns null
var incident = new GlideRecord('incident');
incident.addQuery('number','INC12345');
incident.query();
if(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```