---
# Course title, summary, and position.
linktitle: "sn_chg_soc.schedule_window_days"
summary: ""
weight: 1
# Page metadata.
title: "sn_chg_soc.schedule_window_days"
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
    name: "sn_chg_soc.schedule_window_days"
    weight: 1
---

Description: Define the number of days to be factored before and after the respective start/end of a change_request record when displaying blackout and maintenance window spans on the Change Schedule page.

The greater the value, the more time taken in order to calculate the spans to be displayed on the Change Schedule page.

Default value is 30 days; the value must be a positive integer.


Value: `30`