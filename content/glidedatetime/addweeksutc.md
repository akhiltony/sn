---
title: addWeeksUTC
description: GlideDateTime addWeeksUTC
---
Adds a specified number of weeks to the current GlideDateTime object,
expressed in the UTC time zone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addWeeksUTC(-1);
gs.info(gdt.getDate()); // output: 2011-08-24
```
