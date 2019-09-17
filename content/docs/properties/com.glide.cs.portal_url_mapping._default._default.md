---
# Course title, summary, and position.
linktitle: "com.glide.cs.portal_url_mapping._default._default"
summary: ""
weight: 1
# Page metadata.
title: "com.glide.cs.portal_url_mapping._default._default"
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
    name: "com.glide.cs.portal_url_mapping._default._default"
    weight: 1
---

Description: Default Fallback for all the other records mapping


Value: `/{{portal}}?sys_id={{data.sys_id}}&id=form&table={{data.table_name}}`