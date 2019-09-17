---
# Course title, summary, and position.
linktitle: "glide.legacy.transaction.use_legacy_semaphore_queue"
summary: ""
weight: 1
# Page metadata.
title: "glide.legacy.transaction.use_legacy_semaphore_queue"
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
    name: "glide.legacy.transaction.use_legacy_semaphore_queue"
    weight: 1
---

Description: PLEASE CONTACT DEV-INTERFACES TEAM BEFORE CHANGING. More info at KB0683357
Determines which queue to be used with Semaphore pools. By default (false) the system uses new BlockingMultiQueue which distributes semphore threads evenly among http sessions. This parameter can be set to true to use old BlockingRunnableTransactionQueue which executes transactions in arriving order.


Value: `false`