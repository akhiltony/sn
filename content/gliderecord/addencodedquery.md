---
title: addEncodedQuery
description: 
---

```js
// available for server, if you want to use on client, use addQuery(string)
// expects;
// string e.g. .addEncodedQuery('number=INC12345');
// returns null
var incident = new GlideRecord('incident');
incident.addEncodedQuery('number=INC12345');
incident.query();
if(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```