---
# Course title, summary, and position.
linktitle: "glide.rest.global.honor_snc_internal_flag"
summary: ""
weight: 1
# Page metadata.
title: "glide.rest.global.honor_snc_internal_flag"
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
    name: "glide.rest.global.honor_snc_internal_flag"
    weight: 1
---

Description: Property to control if REST APIs will enforce the requirement that requestors have the snc_internal role to access REST API resources. Both Scripted REST APIs and Java Implemented REST APIs provide a way to specify that they require the snc_internal role on a per resource level. This property will determine if those per resource settings are enforced. When set to false requestors will not be required to have the snc_internal role regardless of per resource settings. This property is only relevant when the explicit roles plugin is activated.
    


Value: `true`