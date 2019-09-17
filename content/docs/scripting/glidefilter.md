---
# Course title, summary, and position.
linktitle: GlideFilter
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: GlideFilter
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
    name: GlideFilter
    weight: 1
---

GlideFilter is a neat Class. It lets you check if a record meets a
critera based on a query. Here's the
[docs](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/GlideFilterScoped/concept/c_GlideFilterScopedAPI.html)
on it.

``` {.js}
(function executeRule(current, previous /*null when async*/){
    var act = new GlideRecord('table_name');
    act.AddActiveQuery();
    act.query();

    while (action.next()) {
        var match = GlideFilter.checkRecord(act.condition);

        if (match) {
            var rec = new GlideRecord('act.table');
            act.newRecord();
            act.applyEncodedQuery(act.field_values);
            act.insert();
        }
    }
})
```
