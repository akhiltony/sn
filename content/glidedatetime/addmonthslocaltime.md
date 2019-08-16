---
title: addMonthsLocalTime
description: GlideDateTime addMonthsLocalTime
---
Adds a specified number of months to the current GlideDateTime object,
expressed in the user's time zone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addMonthsLocalTime(2);
gs.info(gdt.getDate()); // output: 2011-10-31
```