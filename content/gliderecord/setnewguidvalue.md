---
title: setNewGuidValue
description: 
---


This allows you to manually set your sys_id. I used this to most recently try to fix some broken reference, but I don’t know other reasons it may be used.

```js
var a = new GlideRecord('ticket');
a.setNewGuidValue('14018b8cdb69a6403bddf1910f961926');
a.insert();
```