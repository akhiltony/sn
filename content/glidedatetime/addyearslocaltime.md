---
title: addYearsLocalTime
description: GlideDateTime addYearsLocalTime
---
Adds a specified number of years to the current GlideDateTime object,
expressed in the user's time zone

``` {.js}
var gdt = new GlideDateTime("2010-08-31 08:00:00");
gdt.addYearsLocalTime(1);
gs.info(gdt.getDate()); // output: 2011-08-31
```