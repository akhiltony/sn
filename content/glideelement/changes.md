---
title: changes
description: "GlideElement changes"
---
Determines if the previous value of the current field matches the specified object.

**Note:** If the GlideRecord on which you are performing this method has only been initialized
and read, and has not been written, the underlying before-and-after values are the same. In
this case, the method returns `false`, as there has been no change to the data store.

```js
// This method is often used in business rules. The following example shown is from a business
// rule, if "assigned_to" field value is changed, create a event in the EventQueue.
if (!current.assigned_to.nil() && current.assigned_to.changes()) {
  gs.eventQueue(
    'incident.assigned',
    current,
    current.assigned_to.getDisplayValue()
    previous.assigned_to.getDisplayValue()
  );
}
```
