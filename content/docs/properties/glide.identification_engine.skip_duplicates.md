---
# Course title, summary, and position.
linktitle: "glide.identification_engine.skip_duplicates"
summary: ""
weight: 1
# Page metadata.
title: "glide.identification_engine.skip_duplicates"
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
    name: "glide.identification_engine.skip_duplicates"
    weight: 1
---

Description: <span style = 'font-family: Arial; font-size: 13px; color: #4a4a4a;'>Controls how identification processes a small set of duplicate CIs. When true: If the number of duplicate CIs is less than the threshold specified by glide.identification_engine.skip_duplicates.threshold, then one of the duplicate CIs is picked as a match and gets updated. For the rest of the duplicate CIs, the CMDB_CIs' discovery_source field is set to 'Duplicate'. When false: Matching a CI fails, and an error is logged.<ul style='margin: 0px; padding-left:15px;'><li>Type: Yes | No</li><li>Default: Yes</li></ul></span>


Value: `true`