---
# Course title, summary, and position.
linktitle: "problem.fix.records"
summary: ""
weight: 1
# Page metadata.
title: "problem.fix.records"
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
    name: "problem.fix.records"
    weight: 1
---

Description: List of related task records (comma-separated) to track as fixes for this Problem. Used to notify the Coordinator when the all of the related fix records are Completed or Canceled. E.g. incident.problem_id, change_request.parent


Value: `change_request.parent,rm_defect.parent,rm_release.parent,rm_enhancement.parent`