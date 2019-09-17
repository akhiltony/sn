---
# Course title, summary, and position.
linktitle: "glide.workflow.script.strict"
summary: ""
weight: 1
# Page metadata.
title: "glide.workflow.script.strict"
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
    name: "glide.workflow.script.strict"
    weight: 1
---

Description: Use strict execution for Advanced Scripts - Prior to Fuji, some script errors (primarily dot-walking of undefined objects) were ignored, and script execution would continue on the next statement. Setting this property to true will cause Advanced Scripts of workflow activities to be run in strict execution mode, and those errors will treated as errors. In most cases, that will cause the activity to fault and the workflow to stop execution. 


Value: `true`