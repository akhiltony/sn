---
title: dateNumericValue
description: "GlideElement dateNumericValue"
---

Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field.
Does not require the creation of a GlideDateTime object because the duration field is already a
GlideDateTime object.

```js
var inc = new GlideRecord('incident');
inc.get('17c90efb13418700cc36b1422244b05d');
gs.info(inc.calendar_duration.dateNumericValue());
```
