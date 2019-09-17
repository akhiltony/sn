---
# Course title, summary, and position.
linktitle: "glide.sc.dynamic_category.max_cache_size"
summary: ""
weight: 1
# Page metadata.
title: "glide.sc.dynamic_category.max_cache_size"
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
    name: "glide.sc.dynamic_category.max_cache_size"
    weight: 1
---

Description: The number of catalog items to cache for Top Request dynamic categories of type "Request Items". 

Ensure the value is greater than the maximum "Number of Entries". The larger the value the less chance there will be of doing a query to find the top requested items.


Value: `100`