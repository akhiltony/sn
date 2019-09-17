---
# Course title, summary, and position.
linktitle: "glide.ui.dedupe.row.menu.actions"
summary: ""
weight: 1
# Page metadata.
title: "glide.ui.dedupe.row.menu.actions"
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
    name: "glide.ui.dedupe.row.menu.actions"
    weight: 1
---

Description: Removes "duplicate" entries in the right-click context menu on list rows. The duplicate check is action_name+name, so if two UI Actions in list row context menus have identical values, only one of them will appear in the list.


Value: `true`