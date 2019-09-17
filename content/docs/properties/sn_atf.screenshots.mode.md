---
# Course title, summary, and position.
linktitle: "sn_atf.screenshots.mode"
summary: ""
weight: 1
# Page metadata.
title: "sn_atf.screenshots.mode"
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
    name: "sn_atf.screenshots.mode"
    weight: 1
---

Description: Enable or disable screenshot capture during test execution. Select 'Enable for all steps' to take screenshots for all the steps, 'Enable for failed steps' to take screenshots for failing steps only, 'Disable for all steps' to skip screenshots for all steps. If the property is not set to one of these values, screenshots will not be taken during the test execution. This property is private, changes to its value will not move between instances in update sets or Team development.


Value: `enabledAll`