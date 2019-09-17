---
# Course title, summary, and position.
linktitle: "com.snc.sla.calculation.always_run_relative_duration_script"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.sla.calculation.always_run_relative_duration_script"
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
    name: "com.snc.sla.calculation.always_run_relative_duration_script"
    weight: 1
---

Description: Set this property to "true" if the relative duration script should always be used to calculate the duration of a Task SLA that is based on a relative duration.

With this property set to "false", the relative duration script will only be executed once when the SLA is attached and subsequent calculations will use the "Original Breach Time" field to derive the duration of the SLA.


Value: `false`