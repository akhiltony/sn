---
# Course title, summary, and position.
linktitle: "glide.identification_engine.skip_duplicates.threshold"
summary: ""
weight: 1
# Page metadata.
title: "glide.identification_engine.skip_duplicates.threshold"
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
    name: "glide.identification_engine.skip_duplicates.threshold"
    weight: 1
---

Description: <span style = 'font-family: Arial; font-size: 13px; color: #4a4a4a;'>The maximum number of CIs that can be in a set of duplicate CIs to allow identification to process the duplicate CIs according to the setting of glide.identification_engine.skip_duplicates. If the number of duplicate CIs exceeds the threshold, then identification processes the duplicate CIs as if glide.identification_engine.skip_duplicates is set to false.<ul style='margin: 0px; padding-left:15px;'><li>Type: Integer</li><li>Default: 5</li></ul></span>


Value: `5`