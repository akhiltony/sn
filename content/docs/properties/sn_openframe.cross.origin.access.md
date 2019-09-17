---
# Course title, summary, and position.
linktitle: "sn_openframe.cross.origin.access"
summary: ""
weight: 1
# Page metadata.
title: "sn_openframe.cross.origin.access"
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
    name: "sn_openframe.cross.origin.access"
    weight: 1
---

Description: In order for a cross-origin frame to use these features, the embedding page must specify a Feature Policy which enables the feature for the frame.
Valid values for allowing include:
geolocation
microphone
camera
midi
encrypted-media


Value: `microphone; camera`