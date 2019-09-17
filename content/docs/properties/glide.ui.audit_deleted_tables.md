---
# Course title, summary, and position.
linktitle: "glide.ui.audit_deleted_tables"
summary: ""
weight: 1
# Page metadata.
title: "glide.ui.audit_deleted_tables"
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
    name: "glide.ui.audit_deleted_tables"
    weight: 1
---

Description: List of system tables (beginning with "sys_", comma separated) that will have the delete audited. By default, system tables do not have the delete audited.


Value: `sys_user,sys_user_group,sys_user_role,sys_user_has_role,sys_user_grmember,sys_group_has_role,sys_security_acl_role,sysapproval_approver,sys_report,sys_app_application,sys_app_module,sys_encryption_configuration,sys_encryption_rule`