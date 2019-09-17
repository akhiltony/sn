---
# Course title, summary, and position.
linktitle: "glide.discovery.fqdn.regex"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.fqdn.regex"
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
    name: "glide.discovery.fqdn.regex"
    weight: 1
---

Description: <b>DNS Host Name And Domain Name Regex: </b> The default parsing of FQDN (Fully Qualified Domain Name) is to pick the first name separated by dots as the host name and the rest of the names as the domain name. For example, "machine1.testlab.service-now.com" has host name of "machine1" and domain name of "testlab.service-now.com". The property allows regex with two capturing groups with the first group representing the host name and the second group the domain name.


Value: `^([^.]+)\.((?:[^.]+\.)+[^.]+)$`