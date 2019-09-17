---
# Course title, summary, and position.
linktitle: "glide.cost_mgmt.service_allocation.method"
summary: ""
weight: 1
# Page metadata.
title: "glide.cost_mgmt.service_allocation.method"
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
    name: "glide.cost_mgmt.service_allocation.method"
    weight: 1
---

Description: When calculating business service to cost center allocation costs, should it be based on total units or only allocated units. For example, if the service supports 100 units but only has 50 units allocated, and cost center ABC is allocated 25 units.
Using "All units" method will result in an allocation cost of 25/100, or 25% of the total cost of the service. In this case we will track unallocated costs separately.
Using "Allocation units" method will result in an allocation cost of 25/50, or 50%  of the total cost of the service. In this case all costs are allocated (recovered).



Value: `all_units`