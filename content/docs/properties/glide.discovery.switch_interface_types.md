---
# Course title, summary, and position.
linktitle: "glide.discovery.switch_interface_types"
summary: ""
weight: 1
# Page metadata.
title: "glide.discovery.switch_interface_types"
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
    name: "glide.discovery.switch_interface_types"
    weight: 1
---

Description: <b>Switch interface types:</b> List of interface types (comma-separated) that will be considered Interface type numbers are defined in the SNMP MIB-2, specifically in OID 1.3.6.1.2.1.2.2.1.3.  Devices with any interface types that do <i>not</i> appear in this list will be classified as routers (if they have routing capability).  A complete list of the interface type numbers may be found on the <a href="http://www.iana.org/assignments/smi-numbers" target="_blank">IANA web site</a>, in the section "ifType definitions".


Value: `7,8,9,26,53,62,69,71,78,115,117,209`