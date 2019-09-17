---
# Course title, summary, and position.
linktitle: "glide.email.create_userid_from_email"
summary: ""
weight: 1
# Page metadata.
title: "glide.email.create_userid_from_email"
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
    name: "glide.email.create_userid_from_email"
    weight: 1
---

Description: When set to true, causes new users to be created with a UserID that matches their email address instead of firstname.lastname. This helps create unique UserIDs when two users with the same name send emails to an instance. Also changes the behavior of gs.createUser() to match the entire email address of the user (including the domain name), instead of just the first part of the email in front of the @-sign.


Value: `true`