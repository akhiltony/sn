---
# Course title, summary, and position.
linktitle: "sa.map.min_nodes_for_auto_grouping"
summary: ""
weight: 1
# Page metadata.
title: "sa.map.min_nodes_for_auto_grouping"
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
    name: "sa.map.min_nodes_for_auto_grouping"
    weight: 1
---

Description: Default: 10. Minimal number of CIs on a map to apply CI grouping.
Relevant only if CI grouping is enabled on the map. 
The following CIs are not counted: discovered clusters, internal CIs inside inclusion boxes, entry points, error nodes, host CIs or CIs that are not hosted on other CIs.


Value: `10`