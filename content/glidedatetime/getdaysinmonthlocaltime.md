---
title: getDaysInMonthLocalTime
description: GlideDateTime getDaysInMonthLocalTime
---
Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user’s time zone.

```js
var gdt = new GlideDateTime("2011-12-02 12:00:00"); //December
gs.info(gdt.getDaysInMonthLocalTime()); // returns 31
```
