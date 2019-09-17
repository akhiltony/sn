---
# Course title, summary, and position.
linktitle: "com.snc.sla.calculation.percentage"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.sla.calculation.percentage"
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
    name: "com.snc.sla.calculation.percentage"
    weight: 1
---

Description: <span style="font-weight:bold;font-size: larger">Percentage at which scheduled jobs stop refreshing Task SLA timings<br/></span>
Maximum 'Actual elapsed percentage' value after which the 'SLA - update calculations' scheduled jobs will stop regularly calculating a Task SLA's time values.<br/>
This is typically used to prevent 'long since breached' records from being unnecessarily updated.<br/>
Default is 1000.  Set to 0 to stop all calculations and leave blank to enable calculation of all task SLAs.


Value: `1000`