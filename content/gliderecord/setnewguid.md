---
title: setNewGuid
description: 
---


This sets the guid to a value before the record is saved.

```js
var t = new GlideRecord('task');
var tSysid = t.setNewGuid();
// some fancy script with tSysid
```