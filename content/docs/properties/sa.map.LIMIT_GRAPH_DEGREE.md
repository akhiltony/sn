---
# Course title, summary, and position.
linktitle: "sa.map.LIMIT_GRAPH_DEGREE"
summary: ""
weight: 1
# Page metadata.
title: "sa.map.LIMIT_GRAPH_DEGREE"
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
    name: "sa.map.LIMIT_GRAPH_DEGREE"
    weight: 1
---

Description: Maximal degree of node on business service map for large map mode. Maps with smaller degrees will be displayed in regular mode. Maps with larger degrees will apply more edges merging for more compact view. 
Default: 1000.
Increasing the default value may reduce performance in maps for large services.


Value: `1000`