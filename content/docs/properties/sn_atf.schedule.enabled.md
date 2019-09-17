---
# Course title, summary, and position.
linktitle: "sn_atf.schedule.enabled"
summary: ""
weight: 1
# Page metadata.
title: "sn_atf.schedule.enabled"
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
    name: "sn_atf.schedule.enabled"
    weight: 1
---

Description: Enable scheduled test suite execution. Update the value of this property to 'true' on sub-production instances where you wish to enable scheduled automated suites. This property is private; changes to its value will not move between instances in update sets or team development. Note: In order to enable scheduled suites, the property for test/test suite execution must also be enabled.


Value: `true`