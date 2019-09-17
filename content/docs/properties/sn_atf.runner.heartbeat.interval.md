---
# Course title, summary, and position.
linktitle: "sn_atf.runner.heartbeat.interval"
summary: ""
weight: 1
# Page metadata.
title: "sn_atf.runner.heartbeat.interval"
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
    name: "sn_atf.runner.heartbeat.interval"
    weight: 1
---

Description: Test runner heartbeat interval. Time interval in seconds for sending a heartbeat from the test runner to the server. The value of this property should be between 60 and 1800, and should not exceed the value of 'sn_atf.runner.heartbeat.timeout' property, or the test runner status might be changed to offline by the 'ATF test runner reaper' job.


Value: `60`