---
# Course title, summary, and position.
linktitle: "glide.soap.strict_security"
summary: ""
weight: 1
# Page metadata.
title: "glide.soap.strict_security"
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
    name: "glide.soap.strict_security"
    weight: 1
---

Description: Enforce strict security on incoming SOAP requests. Checking this requires incoming SOAP requests to go through the security manager for table and field access, as well as checking SOAP users for the correct roles for using the web service.


Value: `true`