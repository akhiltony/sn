---
# Course title, summary, and position.
linktitle: "sn_atf.runner.enabled"
summary: ""
weight: 1
# Page metadata.
title: "sn_atf.runner.enabled"
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
    name: "sn_atf.runner.enabled"
    weight: 1
---

Description: Enable test/test suite execution. The default value is false so that tests don't accidentally run on production systems. Update the value to 'true' on sub-production instances where you wish to run automated tests. This property is private; changes to its value will not move between instances in update sets or team development.


Value: `true`