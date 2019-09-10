---
title: setWorkflow
description: 
---
Enables or disables the running of business rules, script engines, and audit.

This does not stop flows for scoped applications. Source

**NOTE: This works on queries too**

```js
var incident = new GlideRecord('incident');
incident.newRecord();
incident.setValue('short_description','This is text');
incident.setWorkflow(false);//default is true
incident.insert();//returns the sys_id string of inserted record
```