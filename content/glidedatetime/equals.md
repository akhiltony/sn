---
title: equals
description: GlideDateTime equals
---

Compares a datetime with an existing value for equality.

``` {.js}
var gdt = new GlideDateTime("2011-08-31 00:00:00");
gs.info(gdt.equals("2011-09-30 00:12:01")); // output: false
```