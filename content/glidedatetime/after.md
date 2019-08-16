---
title: after
description: GlideDateTime after
---
Returns true if the object's data time is after the input argument

``` {.js}
var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
gs.info(gdt1.after(gdt2)); // output: false
```