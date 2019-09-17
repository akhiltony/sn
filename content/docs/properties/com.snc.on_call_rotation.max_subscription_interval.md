---
# Course title, summary, and position.
linktitle: "com.snc.on_call_rotation.max_subscription_interval"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.on_call_rotation.max_subscription_interval"
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
    name: "com.snc.on_call_rotation.max_subscription_interval"
    weight: 1
---

Description: This property stores a value in days.

Limit changes to the 'Coverage interval', 'Get coverage for' fields on the cmn_rota table, so that the product of these fields does not result in a value greater than the default 364 days (52 weeks).

The subscription URL that makes use of the web service to retrieve the iCalendar for a member's on-call rota will calculate the rotation and then compile to an iCal formatted document. Coverage values should not be excessive (>364 days) as there are a number of schedules that are factored when calculating a user's on-call commitments, this includes time-off and coverage spans.


Value: `364`