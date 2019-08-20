---
title: getDayOfWeekLocalTime
description: GlideDateTime getDayOfWeekLocalTime
---
Gets the day of the week stored by the GlideDateTime object, expressed in the user’s time zone
```js
var gdt = new GlideDateTime("2011-12-01 12:00:00"); // Thursday
gs.info(gdt.getDayOfWeekLocalTime()); // output: 4 // 1-7, 1=monday
```
