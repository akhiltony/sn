---
# Course title, summary, and position.
linktitle: "glide.duplicate_ci_remediator.related_items_blacklist"
summary: ""
weight: 1
# Page metadata.
title: "glide.duplicate_ci_remediator.related_items_blacklist"
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
    name: "glide.duplicate_ci_remediator.related_items_blacklist"
    weight: 1
---

Description: <span style = 'font-family: Arial; font-size: 13px; color: #4a4a4a;'>Comma Separated list of related tables in the format 'table'.'reference column' that should be excluded for merging during duplicate CI remediation.<ul style='margin: 0px; padding-left:15px;'><li>Type: String</li><li>Default: cert_task.cmdb_ci,cert_audit_result.configuration_item,discovery_log.cmdb_ci,alm_hardware.ci,alm_asset.ci,fm_expense_line.ci</li></ul></span>


Value: `cert_task.cmdb_ci,cert_audit_result.configuration_item,discovery_log.cmdb_ci,alm_hardware.ci,alm_asset.ci,fm_expense_line.ci`