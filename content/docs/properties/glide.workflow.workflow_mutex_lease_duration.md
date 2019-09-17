---
# Course title, summary, and position.
linktitle: "glide.workflow.workflow_mutex_lease_duration"
summary: ""
weight: 1
# Page metadata.
title: "glide.workflow.workflow_mutex_lease_duration"
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
    name: "glide.workflow.workflow_mutex_lease_duration"
    weight: 1
---

Description: Max duration in minutes that we want the workflow manager to hold onto a mutex when executing a transition path.

The execution of workflow transitions required the acquisition of a Mutex. Currently the Mutex is a lease, not a guaranteed hold. The lease, for the workflow engine is defaulted to 15 minutes  which is derived from the default value of  500ms * 1800 (mutex wait * mutex spins)

If when running workflow there is reason to believe that the execution of an activity will exceed 15 minutes, set the value of this property to be the expected duration.


Value: `15`