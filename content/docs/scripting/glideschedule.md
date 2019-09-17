---
# Course title, summary, and position.
linktitle: GlideSchedule
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: GlideSchedule
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  scripting:
    parent: Scripting
    name: GlideSchedule
    weight: 1
---


## add
 Adds a new schedule segment to the current schedule
## duration
 Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session
## getName
 Gets the current schedule name
## load
 Loads a schedule with the schedule information. If a timezone is not specified or is nil, the current session timezone is used for the schedule
## isValid
 Determines if the current schedule is valid. A schedule is valid if it has at least one schedule span
## setTimeZone
 Sets the timezone for the current schedule
