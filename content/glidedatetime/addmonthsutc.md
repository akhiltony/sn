---
title: addMonthsUTC
description: GlideDateTime addMonthsUTC
---

Adds a specified number of months to the current GlideDateTime object,
expressed in the UTC time zone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addMonthsUTC(2);
gs.info(gdt.getDate()); // output: 2013-02-07 08:00:00
```
