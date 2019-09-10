---
title: setForceUpdate
description: 
---
Normally if no update is detected, Servicenow will ignore the update. With this method, it will apply the update regardless.

```js
var incident = new GlideRecord('incident');
incident.setLimit(1);
incident.query();
if(incident.next()){
    incident.setForceUpdate(true);//default is false
    incident.update();//returns the sys_id string of inserted record
}
```