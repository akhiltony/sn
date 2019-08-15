---
title: getChoiceValue
---
Returns the choice label for the current choice

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();

// urgency has choice list: 1 - High, 2 - Medium, 3 - Low, with value: 1, 2, 3
var choiceLabel = glideRecord.urgency.getChoiceValue();
gs.info(choiceLabel);
// 1 - High
```
