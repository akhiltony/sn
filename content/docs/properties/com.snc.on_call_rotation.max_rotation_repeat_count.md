---
# Course title, summary, and position.
linktitle: "com.snc.on_call_rotation.max_rotation_repeat_count"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.on_call_rotation.max_rotation_repeat_count"
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
    name: "com.snc.on_call_rotation.max_rotation_repeat_count"
    weight: 1
---

Description: This property stores a value in days.

Limit changes to the 'Rotation interval', 'Rotate every' fields, and the number of members per cmn_rota_roster, so that the product of these fields does not result in a value greater than the default 182,000 days (26,000 weeks, 500 years).

The rotation span interval is the value calculated for each rotation member's schedule span daily repeat field. It is the product of the 'Rotate every' value multiplied by the number of members in the roster; if the 'Rotation interval' is weekly this value will be multiplied by 7 (factoring 7 days in a week).


Value: `182000`