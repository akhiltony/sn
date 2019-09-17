---
# Course title, summary, and position.
linktitle: "glide.duplicate_ci_remediator.max.field_length"
summary: ""
weight: 1
# Page metadata.
title: "glide.duplicate_ci_remediator.max.field_length"
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
    name: "glide.duplicate_ci_remediator.max.field_length"
    weight: 1
---

Description: <span style = 'font-family: Arial; font-size: 13px; color: #4a4a4a;'>Attributes in which max_length exceeds this property value (4000 by default) are excluded from the Select Master CI, Merge Attribute Values, and Determine Duplicate CI Actions tabs in the Duplicate CI Remediator wizard. However, if the max_length for an attribute is equal to the property value, and the size of the data exceeds the property value, then the data is truncated to the property value and the attribute appears in attribute lists. This property impacts the performance of de-duplication tasks, therefore be cautious about setting this value.<ul style='margin: 0px; padding-left:15px;'><li>Type: Integer</li><li>Default: 4000</li></ul></span>


Value: `4000`