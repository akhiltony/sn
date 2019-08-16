---
title: before
description: GlideDateTime before
---
Returns true if the object's data time is before the input argument

``` {.js}
var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
gs.info(gdt1.before(gdt2)); // output: true
```