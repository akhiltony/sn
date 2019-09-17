---
# Course title, summary, and position.
linktitle: "glide.discovery.network_owner_method"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.network_owner_method"
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
    name: "glide.discovery.network_owner_method"
    weight: 1
---

Description: <b>Network router selection method</b>: This property controls the method used to decide (during Network Discovery) which router should be selected as the router to be associated with a given IP Network.  The possible values are: "First Router" (the first router that discovers the network is associated), "Last Router" (the last router that discovers the network is associated), "Most Networks" (the router with the most attached networks is associated), and "Least Networks" (the router with the least attached networks is associated).


Value: `Most Networks`