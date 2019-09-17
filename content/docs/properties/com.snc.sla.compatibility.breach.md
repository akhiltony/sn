---
# Course title, summary, and position.
linktitle: "com.snc.sla.compatibility.breach"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.sla.compatibility.breach"
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
    name: "com.snc.sla.compatibility.breach"
    weight: 1
---

Description: <span style="font-weight:bold;font-size: larger">Enable compatibility with 2010 'breached' stage for SLAs<br/></span>Set to yes to set a Task SLA's stage field to <b>breached</b> when it exceeds the breach time<br/><b>Note: </b>this is legacy behaviour as the 2011 engine sets the <b>Has breached</b> field to indicate that a Task SLA has exceeded the breach time


Value: `false`