---
# Course title, summary, and position.
linktitle: "com.snc.sla.always_populate_business_fields"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.sla.always_populate_business_fields"
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID name.
# - weight: Position of link in menu.
menu:
  properties:
    parent: Properties
    name: "com.snc.sla.always_populate_business_fields"
    weight: 1
---

Description: <span style="font-weight:bold;font-size: larger">Always populate business fields on a Task SLA<br/></span>
Set to No to leave the "business" fields empty or at 0 if a Task SLA does not have a schedule.<br/>
Set to Yes to ensure that the "business" fields will contain the same values as those in the "actual" fields when the Task SLA does not have a schedule.


Value: `true`