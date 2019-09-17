---
# Course title, summary, and position.
linktitle: "sn_sec_cmn.use_on_demand_tbl_as_whitelist"
summary: ""
weight: 1
# Page metadata.
title: "sn_sec_cmn.use_on_demand_tbl_as_whitelist"
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
    name: "sn_sec_cmn.use_on_demand_tbl_as_whitelist"
    weight: 1
---

Description: When true, only workflows specified in the On Demand Orchestration table will be available from the "Run Orchestration" UI action on various security operations tables.
When false, all workflows belonging to applications configured in the SecOps Application Registry will be available from the "Run Orchestration" UI action on various security operations tables.

Regardless of the value, the entries in the On Demand Orchestration table will be evaluated to filter workflows (based on configured role) or use an advanced execution script


Value: `false`