---
# Course title, summary, and position.
linktitle: GlideAggregate
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1
aliases: ['/glideaggregate']
# Page metadata.
title: GlideAggregate
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  scripting:
    parent: Scripting
    name: GlideAggregate
    weight: 1
---

## addAggregate
Adds an aggregate
```js
var count = new GlideAggregate('io_set_item');
//parm1: COUNT, MIN, MAX, parm2: field
count.addAggregate('COUNT', 'variable_set');
count.query();
while (count.next()) {
   var set = count.variable_set.getDisplayValue();
   var setCount = count.getAggregate('COUNT', 'variable_set');
   var message = "The are currently " + setCount;
   message += " items with a variable set of " + set;
   gs.print(message);
}
/*Output
[0:00:00.345] Script completed in scope global: script
*** Script: The are currently 1 items with a variable set of Generic Request
*** Script: The are currently 154 items with a variable set of Request For
*/
```

## getAggregate
Gets an aggregate

```js
var count = new GlideAggregate('io_set_item');
//parm1: COUNT, MIN, MAX, parm2: field
count.addAggregate('COUNT', 'variable_set');
count.query();
while (count.next()) {
   var set = count.variable_set.getDisplayValue();
   var setCount = count.getAggregate('COUNT', 'variable_set');
   var message = "The are currently " + setCount;
   message += " items with a variable set of " + set;
   gs.print(message);
}
/*Output
[0:00:00.345] Script completed in scope global: script
*** Script: The are currently 1 items with a variable set of Generic Request
*** Script: The are currently 154 items with a variable set of Request For
*/
```

## getAggregateEncodedQuery
Gets an aggregate’s encoded query.

## orderByAggregate
Orders a-z an aggregate.

## setGroup
Sets whether the results are to be grouped