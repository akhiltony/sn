---
title: initialize 
description: 
---

```js
var incident = new GlideRecord('incident');
incident.initialize();//ignores default values for columns
incident.setValue('short_description','This is text');
incident.insert();//returns the sys_id string of inserted record
```