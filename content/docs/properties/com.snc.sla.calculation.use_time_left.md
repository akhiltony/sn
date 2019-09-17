---
# Course title, summary, and position.
linktitle: "com.snc.sla.calculation.use_time_left"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.sla.calculation.use_time_left"
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
    name: "com.snc.sla.calculation.use_time_left"
    weight: 1
---

Description: <span style="font-weight:bold;font-size: larger">Use Business time left field to determine if an SLA is breached<br/></span>
Set to Yes to ensure the value of the <b>Business time left</b> field on a Task SLA is used to determine if it has breached.<br/>
Set to No to ensure the value of the <b>Business percentage field</b> is used to determine if it has breached.<br/><b>Note</b>: The percentage value is rounded to 2 decimal places, such as 99.51% rounded to 100%, which may lead to a Task SLA being incorrectly set to have a breached status.


Value: `false`