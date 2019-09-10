---
title: orderByDesc
description: 
---


This will return your set order descending (z-a, 9-1) by the columne name, and is opposibe of orderBy.

```js
var incident = new GlideRecord('incident');
incident.addEncodedQuery('active=true');
incident.orderByDesc('number');
incident.query();
while(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('number'));
} else {
    gs.info('no record found');
}
```