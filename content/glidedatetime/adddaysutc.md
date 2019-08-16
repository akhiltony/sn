---
title: addDaysUTC
description: GlideDateTime addDaysUTC
---

Adds a specified number of days to the current GlideDateTime object,
expressed in the UTC time zone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addDaysUTC(-1);
gs.info(gdt.getDate()); // output: 2011-08-30
```