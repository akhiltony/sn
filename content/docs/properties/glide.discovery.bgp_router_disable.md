---
# Course title, summary, and position.
linktitle: "glide.discovery.bgp_router_disable"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.bgp_router_disable"
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
    name: "glide.discovery.bgp_router_disable"
    weight: 1
---

Description: <b>BGP router exploration disable:</b> Controls whether Network Discovery exploration of routers running the BGP protocol is disabled.  Normally such exploration IS disabled because of the huge size of BGP routing tables, and because generally such routers are only operating at the edge of large networks where further network discovery would be irrelevant.  The only time this value should be set to "no" is in the unlikely case that your organization uses BGP routers as edge routers between relatively small networks (such as between buildings on a single campus).


Value: `true`