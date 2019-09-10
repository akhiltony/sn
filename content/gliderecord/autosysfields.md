---
title: autoSysFields
description: 
---
Controls weather or not to set the sys_* fields.

```js
var incident = new GlideRecord('incident');
incident.newRecord();
incident.setValue('short_description','This is text');
incident.autoSysFields(false);//default is true
incident.insert();//returns the sys_id string of inserted record
```