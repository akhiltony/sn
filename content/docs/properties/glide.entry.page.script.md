---
# Course title, summary, and position.
linktitle: "glide.entry.page.script"
summary: ""
weight: 1
# Page metadata.
title: "glide.entry.page.script"
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
    name: "glide.entry.page.script"
    weight: 1
---

Description: Script executed on server to determine where to send users when they first access the system. The script will return the redirect URL in String format.


Value: `new CMSEntryPage().getEntryPage()`