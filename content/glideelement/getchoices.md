---
title: getChoices
---
Generates a choice list for a field

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();

// urgency has choice list: 1 - High, 2 - Medium, 3 - Low, with value: 1, 2, 3
var choices = glideRecord.urgency.getChoices();
gs.info(choices);
```
