---
# Course title, summary, and position.
linktitle: "sn_communities.implicit_access_mapping"
summary: ""
weight: 1
# Page metadata.
title: "sn_communities.implicit_access_mapping"
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
    name: "sn_communities.implicit_access_mapping"
    weight: 1
---

Description: This will be used in the Community Permission Calculation Scripts to implicitly assign access to users based on the access they have.


Value: `{
    "forum_admin": ["forum_read", "forum_write", "forum_moderator", "forum_admin", "content_write"],
    "forum_moderator": ["forum_read", "forum_write", "forum_moderator", "content_write"],
    "content_write": ["content_read", "content_write"],
     "community_moderator": ["forum_read","forum_moderator","content_write"]
}`