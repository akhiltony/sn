---
# Course title, summary, and position.
linktitle: "glide.security.expander.view.legacy"
summary: ""
weight: 1
# Page metadata.
title: "glide.security.expander.view.legacy"
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
    name: "glide.security.expander.view.legacy"
    weight: 1
---

Description: This property helps control the way View ACL are evaluated. Setting this property to true will have legacy behavior. Setting this property to false will have the new behavior, which better honor ACL on tables which make up the View. However like before ACL created on View will always override the underlying ACL on tables.


Value: `false`