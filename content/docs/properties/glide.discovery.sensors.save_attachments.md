---
# Course title, summary, and position.
linktitle: "glide.discovery.sensors.save_attachments"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.sensors.save_attachments"
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
    name: "glide.discovery.sensors.save_attachments"
    weight: 1
---

Description: <b>Save ECC queue attachments:</b> The normal behavior for discovery sensors is to delete attachments to ECC queue entries upon successful sensor processing.  Setting this property to "yes" overrides this behavior, and forces attachments to be preserved.  This would normally only be useful for debugging purposes.


Value: `true`