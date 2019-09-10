---
title: updateMultiple
description: 
---
So to be absolutely clear, to insert or update a record it’s nearly the same code, except you use .insert(); or .update();. However you may want to use those with the following methods;

Updates each GlideRecord in the list with any changes that have been made.

Tim has a [post about this specifically](https://snprotips.com/blog/2016/12/20/pro-tip-use-updatemultiple-for-maximum-efficiency).

Here’s an example of the method in use;

```js
var staleState = 10;
var query = 'sys_updated_onRELATIVELT@dayofweek@ago@30^state=2';
var incident = new GlideRecord('incident');
incident.addQuery(query);
incident.setValue('state', staleState);
incident.updateMultiple();
```