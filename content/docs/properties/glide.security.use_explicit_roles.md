---
# Course title, summary, and position.
linktitle: "glide.security.use_explicit_roles"
summary: ""
weight: 1
# Page metadata.
title: "glide.security.use_explicit_roles"
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
    name: "glide.security.use_explicit_roles"
    weight: 1
---

Description: Enforce explicit role checks. By default, a user without any role is considered as an 'employee' roled user. With this property, they would get an explicit 'snc_internal' role.


Value: `true`