---
# Course title, summary, and position.
linktitle: "glide.rest.java.honor_snc_internal_flag"
summary: ""
weight: 1
# Page metadata.
title: "glide.rest.java.honor_snc_internal_flag"
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
    name: "glide.rest.java.honor_snc_internal_flag"
    weight: 1
---

Description: Property to control if Java implemented REST API resources will, by default, require requestors to have the ‘snc_internal’ role to be able to access REST API resources. When set to false this requirement will not be enforced. Individual REST API Resources can opt out of this requirement by using the annotation ‘RequiresSncInternalRole=false’. This property is only relevant when the explicit roles plugin is activated.


Value: `true`