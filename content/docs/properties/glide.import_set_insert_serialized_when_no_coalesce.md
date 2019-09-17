---
# Course title, summary, and position.
linktitle: "glide.import_set_insert_serialized_when_no_coalesce"
summary: ""
weight: 1
# Page metadata.
title: "glide.import_set_insert_serialized_when_no_coalesce"
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
    name: "glide.import_set_insert_serialized_when_no_coalesce"
    weight: 1
---

Description: Controls the processing of web service import sets which have no coalesce field(s) defined. When this property is set to false (default), the instance will perform transformations concurrently from the source to the target table. When this property is set to true, the instance will perform transformations one at a time for a given staging table. This property can be overridden by the table-specific property glide.import_set_insert_serialized.<table name>.


Value: `false`