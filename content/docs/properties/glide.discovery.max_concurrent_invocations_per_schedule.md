---
# Course title, summary, and position.
linktitle: "glide.discovery.max_concurrent_invocations_per_schedule"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.max_concurrent_invocations_per_schedule"
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
    name: "glide.discovery.max_concurrent_invocations_per_schedule"
    weight: 1
---

Description: <b>Maximum concurrent invocations per schedule:</b> Prevents an unbounded number of invocations from inundating the system when a schedule takes longer than the time between invocations. The value is an integer defining the maximum number of automated invocations of the same schedule that may proceed at one time. If the limit has been reached subsequent scheduled invocations will be cancelled. The default value is 3. A value of 0 or any negative number will disable this restriction.


Value: `3`