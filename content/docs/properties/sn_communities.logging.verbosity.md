---
# Course title, summary, and position.
linktitle: "sn_communities.logging.verbosity"
summary: ""
weight: 1
# Page metadata.
title: "sn_communities.logging.verbosity"
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
    name: "sn_communities.logging.verbosity"
    weight: 1
---

Description: Code Search log verbosity. Set to "error" by default. Options are:
off : Do not generate any logs.
error : Show only critical errors which may prevent the search from completing will be shown.
warn : Show warning which indicates possible unexpected changes in behavior while searching, in addition to any errors.
info : Show progress messages as the Code Search application searches for results. Also shows warnings and error messages.
debug : Show information that may be useful while debugging the application, like the values of queries run. Also includes info, warn, and error messages.


Value: `error`