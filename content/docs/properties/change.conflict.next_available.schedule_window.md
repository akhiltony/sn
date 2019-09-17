---
# Course title, summary, and position.
linktitle: "change.conflict.next_available.schedule_window"
summary: ""
weight: 1
# Page metadata.
title: "change.conflict.next_available.schedule_window"
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
    name: "change.conflict.next_available.schedule_window"
    weight: 1
---

Description: Defines the number of days after the Planned start date of a change request to search for the next available time.

This window is used to find all potentially conflicting changes. The larger the value, the more Changes that need to be factored per search.

Default value is 90 days. The value must be a positive integer.


Value: `90`