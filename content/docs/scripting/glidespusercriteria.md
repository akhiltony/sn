---
# Course title, summary, and position.
linktitle: GlideSPUserCriteria
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: GlideSPUserCriteria
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
    name: GlideSPUserCriteria
    weight: 1
---

GlideSPUserCriteria appears to be a way to use and check user criteria
for service portal records. This is dependent on the "Service Portal
User Criteria Support" plugin being activated, and the property,
"glide.service\_portal.user\_criteria\_enabled".

## isEnabled

Returns true or false based on the value of
glide.service\_portal.user\_criteria\_enabled. If the propery is "true"
than it retuns true, else it returns false.

## userCanSeeInstance

This expects a `sys_id` of a `sp_instance` record and then uses the user
critera records to determine visiblity.

## userCanSeePage

This expects a `sys_id` of a `sp_page` record and then uses the user
critera records to determine visiblity.

## userCanSeeSearchSource

This expects a `sys_id` of a `sp_search_source` record and then uses the
user critera records to determine visiblity.

This is the only function I could find in a OOB instance in the "Search
Page" widget server script near line 50.

``` {.js}
var userCriteria = new GlideSPUserCriteria();
if (userCriteria.isEnabled()) {
    if (!userCriteria.userCanSeeSearchSource(gr.getUniqueValue()))
        return;
} else {
    //...
}
```

## userCanSeeWidget

This expects a `sys_id` of a `sp_widget` record and then uses the user
critera records to determine visiblity.

## Further Reading

-   [Set the user critera
    property](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/build/service-portal/task/activate-user-crit_1.html)
-   [Apply user criteria to a page, widget, or widget
    instance](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/build/service-portal/task/widget-user-criteria_1.html)
-   [Apply user criteria to a search
    source](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/build/service-portal/task/user-crit-search-source_1.html)
