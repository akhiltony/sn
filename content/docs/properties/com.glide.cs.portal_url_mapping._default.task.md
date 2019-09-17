---
# Course title, summary, and position.
linktitle: "com.glide.cs.portal_url_mapping._default.task"
summary: ""
weight: 1
# Page metadata.
title: "com.glide.cs.portal_url_mapping._default.task"
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
    name: "com.glide.cs.portal_url_mapping._default.task"
    weight: 1
---

Description: Default Fallback for Task Record URL Mapping


Value: `/{{portal}}?sys_id={{data.sys_id}}&id=ticket&table={{data.table_name}}`