---
# Course title, summary, and position.
linktitle: "glide.ui.report.extend_calendar_choices"
summary: ""
weight: 1
# Page metadata.
title: "glide.ui.report.extend_calendar_choices"
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
    name: "glide.ui.report.extend_calendar_choices"
    weight: 1
---

Description: If false, calendar reports use only styles from the Task table when determining options for calendar highlighting (http://docs.servicenow.com/?context=Customizing_Calendar_Report_Fields). For example, a calendar report on the Change Request [change_request] table only uses styles from the Task [task] table instead of styles from a combination of the two tables.
If True, styles defined on the table that the calendar report is based on will override styles defined on the Task table.


Value: `true`