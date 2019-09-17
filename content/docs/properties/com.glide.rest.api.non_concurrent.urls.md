---
# Course title, summary, and position.
linktitle: "com.glide.rest.api.non_concurrent.urls"
summary: ""
weight: 1
# Page metadata.
title: "com.glide.rest.api.non_concurrent.urls"
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
    name: "com.glide.rest.api.non_concurrent.urls"
    weight: 1
---

Description: PLEASE CONTACT DEV-INTERFACES TEAM BEFORE CHANGING. More info at KB0683357
This property specifies the http request urls(as a regular expression) that RESTAPIProcessor can not process concurrently. These http requests are processed one at a time.


Value: `/api/now(/v[0-9]+)?/ui/(impersonate|date_time|navigator|page_timing)(/?$|(/?[_a-z0-9].*$))`