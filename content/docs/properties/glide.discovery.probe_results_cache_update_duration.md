---
# Course title, summary, and position.
linktitle: "glide.discovery.probe_results_cache_update_duration"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.probe_results_cache_update_duration"
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
    name: "glide.discovery.probe_results_cache_update_duration"
    weight: 1
---

Description: <b>Probe results cache update duration:</b> If the information that is cached from the results of a probe has not changed, and therefore the corresponding cache hash value has not changed, the cache is not updated. However, the cache must be updated occasionally so the table clear does not delete valid entries from the cache. The value designates the time (in seconds) to wait before marking the probe results as current.


Value: `5184000`