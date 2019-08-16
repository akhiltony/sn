---
title: add
description: GlideDateTime add
---

Adds a GlideTime object or number of milleseconds to the current
GlideDateTime object

``` {.js}
// add glidetime object
var gdt = new GlideDateTime("2011-08-31 08:00:00");
var gt = new GlideTime();
gt.setValue("00:00:20");
gdt.add(gt);
gs.info(gdt);
var timeOfGDT = gdt.getTime();
gs.info(timeOfGDT.getByFormat('hh:mm:ss')); // output: 00:20:00

// add ms
var gdtms = new GlideDateTime("2011-08-31 08:00:00");
var mins = 5;
gdtms.add(1000*60*mins);
gs.info(gdtms); // output: 2011-08-31 08:05:00
```