---
# Course title, summary, and position.
linktitle: "glide.discovery.disable_mid_probe_cache"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.disable_mid_probe_cache"
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
    name: "glide.discovery.disable_mid_probe_cache"
    weight: 1
---

Description: MID server caches some probe parameters (like the post-processing script) so that they do not have to be sent down from the instance every time.  Setting this to true will disable caching of the probe parameters.


Value: `false`