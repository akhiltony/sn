---
# Course title, summary, and position.
linktitle: "glide.service_mapping.computation_depth"
summary: ""
weight: 1
# Page metadata.
title: "glide.service_mapping.computation_depth"
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
    name: "glide.service_mapping.computation_depth"
    weight: 1
---

Description: Service Mapping computation depth property.
Defines the maximal number of steps for Service Mapping to traverse Applicative Flow type relations in cmdb_rel_ci while recomputing the business service.
Also defines the maximal height of the business service map.

Once property value is changed, consider recomputing or running discovery on the relevant business service.


Value: `25`