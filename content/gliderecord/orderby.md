---
title: orderBy
description: 
---


This will return your set order ascending (a-z, 1-9) by the column name, and is opposite of orderByDesc.

```js
var incident = new GlideRecord('incident');
incident.addEncodedQuery('active=true');
incident.orderBy('number');
incident.query();
while(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('number'));
} else {
    gs.info('no record found');
}
```