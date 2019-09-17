---
# Course title, summary, and position.
linktitle: "glide.render.cache.aggressive"
summary: ""
weight: 1
# Page metadata.
title: "glide.render.cache.aggressive"
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
    name: "glide.render.cache.aggressive"
    weight: 1
---

Description: Enable aggressive caching. If enabled, entries are removed from the render cache only when they expire from old age, rather than when their underlying data changes. Running in aggressive mode can significantly improve performance, but runs the risk of serving potentially 'stale' charts and graphs.


Value: `false`