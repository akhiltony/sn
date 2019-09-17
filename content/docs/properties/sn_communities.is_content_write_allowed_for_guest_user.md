---
# Course title, summary, and position.
linktitle: "sn_communities.is_content_write_allowed_for_guest_user"
summary: ""
weight: 1
# Page metadata.
title: "sn_communities.is_content_write_allowed_for_guest_user"
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
    name: "sn_communities.is_content_write_allowed_for_guest_user"
    weight: 1
---

Description: This flag is used in Community Permission Calculation to determine whether Content_write access is allowed for a PUBLIC/GUEST/NON-LOGGEDIN user. 
if the flag is false: Content_write access won't be given to PUBLIC user even though the admin gives the write access in the Community Permissions
if the flag is true: Content_write access will be given to the PUBLIC user if the admin gives the write access in the Community Permissions

Before enabling this flag the Admin should be aware of the following
1. All the non-logged in users are treated as the single user 'GUEST'
2. As we have no separation of the user identity for non-logged in users, giving content write access enables a guest user to modify the content posted by some other guest users.


Value: `false`