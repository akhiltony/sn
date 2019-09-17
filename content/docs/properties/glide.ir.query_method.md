---
# Course title, summary, and position.
linktitle: "glide.ir.query_method"
summary: ""
weight: 1
# Page metadata.
title: "glide.ir.query_method"
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
    name: "glide.ir.query_method"
    weight: 1
---

Description: Query method for global text search. Run a query for each table, for each base class (parent table), against a single index regardless of table (requires text index regeneration), or let GlideRecord handle the query (simple). With the Zing text search engine, the preferred value is "simple".


Value: `simple`