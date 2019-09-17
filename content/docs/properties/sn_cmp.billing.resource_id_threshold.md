---
# Course title, summary, and position.
linktitle: "sn_cmp.billing.resource_id_threshold"
summary: ""
weight: 1
# Page metadata.
title: "sn_cmp.billing.resource_id_threshold"
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
    name: "sn_cmp.billing.resource_id_threshold"
    weight: 1
---

Description: If the dollar cost associated with a downloaded row of billing data is below this threshold, the row will not be stored with its own resource ID. Instead, it will be grouped with other low-cost rows with a resource ID of "(Miscellaneous)".


Value: `0.0001`