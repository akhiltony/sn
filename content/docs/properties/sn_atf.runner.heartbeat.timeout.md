---
# Course title, summary, and position.
linktitle: "sn_atf.runner.heartbeat.timeout"
summary: ""
weight: 1
# Page metadata.
title: "sn_atf.runner.heartbeat.timeout"
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
    name: "sn_atf.runner.heartbeat.timeout"
    weight: 1
---

Description: Test runner timeout. If there was no heartbeat from the test runner in the last 'timeout' seconds, the status will be changed from online to offline. The value of this property should be between 120 and 1800.


Value: `120`