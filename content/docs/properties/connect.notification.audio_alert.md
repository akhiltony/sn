---
# Course title, summary, and position.
linktitle: "connect.notification.audio_alert"
summary: ""
weight: 1
# Page metadata.
title: "connect.notification.audio_alert"
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
    name: "connect.notification.audio_alert"
    weight: 1
---

Description: Audio file to play to notify users of new messages, support conversation transfers and @mentions in Connect.  

This property's value should point to the 'name' field of an audio file in the db_audio table.


Value: `connect_alert.mp3`