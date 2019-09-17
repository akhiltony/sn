---
# Course title, summary, and position.
linktitle: "glide.request_manager.always_cancel"
summary: ""
weight: 1
# Page metadata.
title: "glide.request_manager.always_cancel"
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
    name: "glide.request_manager.always_cancel"
    weight: 1
---

Description: When navigator loads a page, it adds a flag, sysparm_cancelable. If present, this transaction can be canceled if another page is requested with sysparm_cancelable from the same session. Pages in this list will always be treated as cancelable.


Value: `home,sys_report_template`