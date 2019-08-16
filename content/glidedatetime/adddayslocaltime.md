---
title: addDaysLocalTime
description: GlideDateTime addDaysLocalTime
---

Adds a specified number of days to the current GlideDateTime object,
expressed in the user's timezone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addDaysLocalTime(-1);
gs.info(gdt.getLocalDate()); // output: 2011-08-30
```