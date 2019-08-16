---
title: addWeeksLocalTime
description: GlideDateTime addWeeksLocalTime
---
Adds a specified number of weeks to the current GlideDateTime object,
expressed in the user's timezone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addWeeksLocalTime(-1);
gs.info(gdt.getDate()); // output: 2011-08-24
```
