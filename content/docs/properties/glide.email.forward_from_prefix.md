---
# Course title, summary, and position.
linktitle: "glide.email.forward_from_prefix"
summary: ""
weight: 1
# Page metadata.
title: "glide.email.forward_from_prefix"
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
    name: "glide.email.forward_from_prefix"
    weight: 1
---

Description: When determining if an email is a forward, this field is used to match against something in the body.  This traditionally was "from:", but can include other words or words in other languages, each separated by commas.  For instance "from:,da:" would search for either "from:" or "da:".  Either would allow the email to be classified as a forward.  Leaving the field blank, means no search will occur, and the software will not require anything in the body for matching a forward.


Value: ``