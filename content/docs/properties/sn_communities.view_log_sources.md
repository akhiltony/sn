---
# Course title, summary, and position.
linktitle: "sn_communities.view_log_sources"
summary: ""
weight: 1
# Page metadata.
title: "sn_communities.view_log_sources"
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
    name: "sn_communities.view_log_sources"
    weight: 1
---

Description: This property holds a JSON string that provides a mapping of view log source to a static source type. This static string is used to store the view source in sn_communities_view_log table


Value: `{ "searchResult": "search_result",
  "contentFeed": "content_feed",
 "activityFeed": "activity_feed",
"featuredList":"featured_list"
}`