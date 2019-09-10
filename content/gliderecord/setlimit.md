---
title: setLimit
description: 
---

This is really useful if you’re running a one time script to update some records. Run a test against one record. This works on client and server side code.

```js
var incident = new GlideRecord('incident');
incident.addEncodedQuery('number=INC12345');
incident.setLimit(1);
incident.query();
while(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```