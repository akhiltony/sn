---
# Course title, summary, and position.
linktitle: "com.snc.service.offering.field"
summary: ""
weight: 1
# Page metadata.
title: "com.snc.service.offering.field"
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
    name: "com.snc.service.offering.field"
    weight: 1
---

Description: <span style="font-weight:bold;font-size: larger">Specify the field from Task used to match with Service Offerings<br/></span>
Set to "cmdb_ci" to use the <b>Configuration Item</b> field<br/>
Set to "service_offering" to use the <b>Service Offering</b> field<br/><br/>
<b>Note:</b> Changing this will have an affect on the following plugins:<br/>
<ul><li>Vendor Ticketing</li>
<li>SLA</li>
<li>SLA Timeline</li></ul>


Value: `cmdb_ci`