---
title: newRecord
description: 
---

```js
var incident = new GlideRecord('incident');
incident.newRecord();//Creates a new GlideRecord record, sets the
// default values for the fields, and assigns a unique ID to the record.
incident.setValue('short_description','This is text');
incident.insert();//returns the sys_id string of inserted record
```