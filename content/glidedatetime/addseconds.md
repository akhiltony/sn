---
title: addSeconds
description: GlideDateTime addSeconds
---
Adds a specified number of seconds to the current GlideDateTime object

``` {.js}
var gdt = new GlideDateTime("2011-12-07 08:00:00");
gdt.addSeconds(1000);
gs.info(gdt.getValue()); // output: 2011-12-07 08:16:40
```