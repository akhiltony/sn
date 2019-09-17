---
# Course title, summary, and position.
linktitle: "sn_cmp.billing.import_set_size"
summary: ""
weight: 1
# Page metadata.
title: "sn_cmp.billing.import_set_size"
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
    name: "sn_cmp.billing.import_set_size"
    weight: 1
---

Description: Downloaded billing data (to be converted to cost-report records) will be limited to this many rows per import set. A lower number allows finer-grained progress reporting during billing discovery, while a higher number takes slightly less initialization time during imports.


Value: `3000`