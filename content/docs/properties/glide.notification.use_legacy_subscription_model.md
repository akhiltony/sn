---
# Course title, summary, and position.
linktitle: "glide.notification.use_legacy_subscription_model"
summary: ""
weight: 1
# Page metadata.
title: "glide.notification.use_legacy_subscription_model"
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
    name: "glide.notification.use_legacy_subscription_model"
    weight: 1
---

Description: This determines whether to use the legacy notification subscription model or the newer notification subscription model. This is initially set to true so that during an upgrade the legacy subscription model is used, but once the migration of cmn_notif_messages to sys_notif_subscription is complete (for subscriptions), then this is set to false to indicate that the new model should be used.


Value: `false`