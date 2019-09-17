---
# Course title, summary, and position.
linktitle: "glide.ldap.listener.timer"
summary: ""
weight: 1
# Page metadata.
title: "glide.ldap.listener.timer"
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
    name: "glide.ldap.listener.timer"
    weight: 1
---

Description: The amount of time the listener will wait for a response from the LDAP server.  After this amount of time the listener will process any notifications it has received and will reissue the listen request to the server.  The value should be specified in minutes.


Value: `5`