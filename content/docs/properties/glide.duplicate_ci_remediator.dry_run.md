---
# Course title, summary, and position.
linktitle: "glide.duplicate_ci_remediator.dry_run"
summary: ""
weight: 1
# Page metadata.
title: "glide.duplicate_ci_remediator.dry_run"
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
    name: "glide.duplicate_ci_remediator.dry_run"
    weight: 1
---

Description: <span style = 'font-family: Arial; font-size: 13px; color: #4a4a4a;'>Determines whether the Duplicate CI Remediator actually remediates CI duplication by updating records in the CMDB, or not. When false: Updates specified in the wizard are actually performed. Set this property to true to test run through the Duplicate CI Remediator without any records actually being updated. In this case, the work notes for the task describe the changes that will happen in an actual remediation.<ul style='margin: 0px; padding-left:15px;'><li>Type: Yes | No</li><li>Default: No</li></ul></span>


Value: `false`