---
# Course title, summary, and position.
linktitle: "sn_atf.page_data_capture.enabled"
summary: ""
weight: 1
# Page metadata.
title: "sn_atf.page_data_capture.enabled"
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
    name: "sn_atf.page_data_capture.enabled"
    weight: 1
---

Description: Enables tests with Custom UI steps to capture page data each time they are run. When true, Custom UI steps always refresh the page data during a test run. Disable this property to skip capturing page data during test runs. When false, tests run faster but Custom UI steps may not have the latest information due to stale page data. You can use 'Retrieve Components' to manually refresh page data before creating or editing a Custom UI step.


Value: `false`