---
# Course title, summary, and position.
linktitle: "com.glide.transaction.run.with.master"
summary: ""
weight: 1
# Page metadata.
title: "com.glide.transaction.run.with.master"
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
    name: "com.glide.transaction.run.with.master"
    weight: 1
---

Description: PLEASE CONTACT DEV-INTERFACES TEAM BEFORE CHANGING. More info at KB0683357
Determines whether each transaction should run with the master GlideSession (GlideSession stored in http session) or with a GlideSnapshotSession. In order to run transactions multiple transactions concurrently to an http session, this property should set to true.


Value: `false`