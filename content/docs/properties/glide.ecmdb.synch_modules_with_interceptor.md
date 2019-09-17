---
# Course title, summary, and position.
linktitle: "glide.ecmdb.synch_modules_with_interceptor"
summary: ""
weight: 1
# Page metadata.
title: "glide.ecmdb.synch_modules_with_interceptor"
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
    name: "glide.ecmdb.synch_modules_with_interceptor"
    weight: 1
---

Description: Synchronize table-specific CMDB modules' and Interceptor answers' active status and roles. e.g., if a CMDB module for a specific table is deactivated, deactivate the corresponding cmdb_ci.do Interceptor answer for that table so it does not appear as open when creating a new CI, and vice versa. Likewise, if roles are modified for one, update the other.


Value: `true`