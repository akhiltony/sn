---
# Course title, summary, and position.
linktitle: "sn_codesearch.search.results.max"
summary: ""
weight: 1
# Page metadata.
title: "sn_codesearch.search.results.max"
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
    name: "sn_codesearch.search.results.max"
    weight: 1
---

Description: Maximum number of search results any individual request against the Code Search API will return. If search a Group of tables, the limit may be reached before all tables have been queried. In such a case, only the results up to the maximum will be returned, so some tables which would otherwise have had results will be returned with truncated (or no) results.


Value: `500`