---
# Course title, summary, and position.
linktitle: "glide.security.csrf_previous.time_limit"
summary: ""
weight: 1
# Page metadata.
title: "glide.security.csrf_previous.time_limit"
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
    name: "glide.security.csrf_previous.time_limit"
    weight: 1
---

Description: Time in seconds for a secure token to expire.  When the user session expires, the secure token expires with it, unless the "allowing reuse of expired tokens are allowed" property is enabled, and its within the time frame described by this property This token is used to prevent cross site request forgery attacks. (default is 86400 seconds or 1 day)


Value: `86400`