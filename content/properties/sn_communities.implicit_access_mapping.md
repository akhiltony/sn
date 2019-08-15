---
title: "sn_communities.implicit_access_mapping"
---

Description: This will be used in the Community Permission Calculation Scripts to implicitly assign access to users based on the access they have.

Value: `{
    "forum_admin": ["forum_read", "forum_write", "forum_moderator", "forum_admin", "content_write"],
    "forum_moderator": ["forum_read", "forum_write", "forum_moderator", "content_write"],
    "content_write": ["content_read", "content_write"],
     "community_moderator": ["forum_read","forum_moderator","content_write"]
}`