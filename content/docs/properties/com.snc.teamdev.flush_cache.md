---
# Course title, summary, and position.
linktitle: "com.snc.teamdev.flush_cache"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.teamdev.flush_cache"
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
    name: "com.snc.teamdev.flush_cache"
    weight: 1
---

Description: When the following UI actions are executed within Team Development, if this flag is set then the caches will be flushed at the end of the action. Turning this flag off may improve performance, but flushing caches if necessary on the correct instances after the UI actions becomes the responsibility of the operator. The UI actions are: Back Out, Back Out All, Load Change, Load This Change, Pull, Push, and Revert to this version.


Value: `true`