---
# Course title, summary, and position.
linktitle: "glide.knowman.search.operator"
summary: ""
weight: 1
# Page metadata.
title: "glide.knowman.search.operator"
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
    name: "glide.knowman.search.operator"
    weight: 1
---

Description: Search method used when searching Knowledge from a task or directly in the Knowledge Base. "OR query" returns matches with any term. "AND then OR query" first tries an AND query, then does an OR query if no matches are found.


Value: `IR_AND_OR_QUERY`