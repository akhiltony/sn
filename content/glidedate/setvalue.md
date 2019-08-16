---
title: setValue
description: "GlideDate setValue"
---
Gets the duration difference between two GlideDate values.

```js
var gd = new GlideDate();
var sgd1 = new GlideDate();
sgd1.setDisplayValue('2014-07-18');
var sgd2 = new GlideDate();
sgd2.setDisplayValue('2014-07-19');
duration= GlideDate.subtract(sgd1, sgd2);
gs.info(duration.getDisplayValue());
```
