---
# Course title, summary, and position.
linktitle: "glide.schedules.fifth"
summary: ""
weight: 1
# Page metadata.
title: "glide.schedules.fifth"
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
    name: "glide.schedules.fifth"
    weight: 1
---

Description: Controls what a Schedule entry selecting the Fifth occurrence of a day will do, in a month with only four.

last - select the last one
next - select the next one, in the next month
strict - skip this month
(this property only takes effect when glide.schedules.repeat_nth = day)


Value: `last`