---
# Course title, summary, and position.
linktitle: "glide.db.clone.allow_clone_target"
summary: ""
weight: 1
# Page metadata.
title: "glide.db.clone.allow_clone_target"
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
    name: "glide.db.clone.allow_clone_target"
    weight: 1
---

Description: Allow this instance to be used as a clone target. Set to false to prevent this instance from being cloned to. Used to provide an additional safeguard which prevents a production instance from being cloned over. Default value is false for production instances and true for sub-prod instances (dev, qa, etc).


Value: `false`