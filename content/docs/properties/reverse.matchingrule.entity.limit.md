---
# Course title, summary, and position.
linktitle: "reverse.matchingrule.entity.limit"
summary: ""
weight: 1
# Page metadata.
title: "reverse.matchingrule.entity.limit"
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
    name: "reverse.matchingrule.entity.limit"
    weight: 1
---

Description: For a reverse matching rule, filter array takes a list of tasks sys_ids on which the user record has to be matched. This property limits the number of tasks to be added to the filter array. if it is more than this limit, reverse matching rule will not run for script and selection criteria type matching rules.


Value: `30`