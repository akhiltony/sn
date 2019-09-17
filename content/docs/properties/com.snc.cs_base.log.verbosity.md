---
# Course title, summary, and position.
linktitle: "com.snc.cs_base.log.verbosity"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.cs_base.log.verbosity"
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
    name: "com.snc.cs_base.log.verbosity"
    weight: 1
---

Description: Code Search log verbosity for CSM Base project. Set to "1" representing info by default. Options are:
0 : Show information that may be useful while debugging the application, like the values of queries run. Also includes info, warn, and error messages.
1 : Show progress messages as the Code Search application searches for results. Also shows warnings and error messages.
2 : Show warning which indicates possible unexpected changes in behavior while searching, in addition to any errors.
3 : Show only critical errors which may prevent the search from completing will be shown.


Value: `1`