---
# Course title, summary, and position.
linktitle: "glide.security.multisso.check_table_exists_for_clone"
summary: ""
weight: 1
# Page metadata.
title: "glide.security.multisso.check_table_exists_for_clone"
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
    name: "glide.security.multisso.check_table_exists_for_clone"
    weight: 1
---

Description: When source instance does not have multisso enabled and target instance has multisso enabled during clone,  it may result in a bad state after clone so it needs check if table sso_properties exists. When this property presents, it has the patch that does the table existence check.


Value: `true`