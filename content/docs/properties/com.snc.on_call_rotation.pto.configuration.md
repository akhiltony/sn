---
# Course title, summary, and position.
linktitle: "com.snc.on_call_rotation.pto.configuration"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.on_call_rotation.pto.configuration"
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
    name: "com.snc.on_call_rotation.pto.configuration"
    weight: 1
---

Description: This property governs if an On-Call user (Not "admin, rota_manager, group manager or rota_admin") is allowed to create PTO.

With approval - PTO can be created by On-Call user and requires approval from manager,
Without approval - PTO can be created by On-Call user but does not require approval,
Not allowed- PTO can not be created by On-Call user.


Value: `not_allowed`