---
# Course title, summary, and position.
linktitle: "sa.running_process.exclude_list"
summary: ""
weight: 1
# Page metadata.
title: "sa.running_process.exclude_list"
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
    name: "sa.running_process.exclude_list"
    weight: 1
---

Description: Comma separated list of CI types that should be ignored when adding running_process information to discovery result.
CIs added to this ilst will not be matched according to their running process id, and will not merge with exiting CIs.


Value: `cmdb_ci_db_ora_instance,cmdb_ci_app_server_websphere`