---
# Course title, summary, and position.
linktitle: GlideTableHierarchy
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: GlideTableHierarchy
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  scripting:
    parent: Scripting
    name: GlideTableHierarchy
    weight: 1
---


## hasExtensions
 Returns true of this class has been extended
## getName
 Returns the table's name
## isSoloClass
 Returns true if this table is not in a hierarchy
## getTables
 Returns a list of the table names in the hierarchy
## getAllExtensions
 Returns a list of all tables that extend the current table and includes the current table
## isBaseClass
 Returns true if this is a base class
## getTableExtensions
 Returns a list of all tables that extend the current table
## getBase
 Returns the parent class
## getRoot
 Returns the top level class in the hierarchy
## getHierarchy
 Returns a list of all classes in the hierarchy of the given table
