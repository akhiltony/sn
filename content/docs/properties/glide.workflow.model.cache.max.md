---
# Course title, summary, and position.
linktitle: "glide.workflow.model.cache.max"
summary: ""
weight: 1
# Page metadata.
title: "glide.workflow.model.cache.max"
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
    name: "glide.workflow.model.cache.max"
    weight: 1
---

Description: The max number of models that will be concurrently held in the LRU cache. The model portion of a workflow version is cached to maximize performance. In order for this property to take effect, the instance needs to be restarted.


Value: `300`