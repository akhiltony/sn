---
title: compareTo
description: GlideDateTime compareTo
---
Compares two GlideDateTime objects

``` {.js}
var initDate = new GlideDateTime("2011-08-01 12:00:00");
var compDate1 = new GlideDateTime("2011-08-01 12:00:00");
var compDate2 = new GlideDateTime("2011-07-31 12:00:00");
var compDate3 = new GlideDateTime("2011-08-04 16:00:00");
 
gs.info(initDate.compareTo(compDate1)); // Equals (0) // output: 0
gs.info(initDate.compareTo(compDate2)); // initDate is after compDate2 (1)  // output: 1
gs.info(initDate.compareTo(compDate3)); // initDate is before compDate3 (-1)  // output: -1
```