---
# Course title, summary, and position.
linktitle: "com.snc.sla.engine.async"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.sla.engine.async"
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
    name: "com.snc.sla.engine.async"
    weight: 1
---

Description: <span style="font-weight:bold;font-size: larger">Execute the 2011 SLA engine asynchronously<br/></span>
Set to Yes to create a scheduled job to run the SLA engine when a task is created or updated (<b>Note: </b>This results in a slight delay in the Task SLA records being created and updated).<br/>
Set to No to run the SLA engine synchronously when a task is inserted or updated and thus make it visible immediately.


Value: `false`