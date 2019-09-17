---
# Course title, summary, and position.
linktitle: "sa.traffic_based_discovery.blacklist"
summary: ""
weight: 1
# Page metadata.
title: "sa.traffic_based_discovery.blacklist"
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
    name: "sa.traffic_based_discovery.blacklist"
    weight: 1
---

Description: Generic apps that should be excluded from traffic based discovery


Value: `system32\\(?!w3wp).*.exe|wininit.exe|winlogon.exe|lsass.exe|fsearchctrl.exe|sqlservr.exe`