---
title: canCreate
---
Determines if the user's role permits creation of new records in this field.

```js
var exampleGR = new GlideRecord('sys_user');
var testIfWeCanCreate = exampleGR.company.canCreate();
gs.info(testIfWeCanCreate);
```
