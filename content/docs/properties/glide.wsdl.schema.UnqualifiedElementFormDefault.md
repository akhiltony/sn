---
# Course title, summary, and position.
linktitle: "glide.wsdl.schema.UnqualifiedElementFormDefault"
summary: ""
weight: 1
# Page metadata.
title: "glide.wsdl.schema.UnqualifiedElementFormDefault"
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
    name: "glide.wsdl.schema.UnqualifiedElementFormDefault"
    weight: 1
---

Description: <p>
This property sets the elementFormDefault attribute of the embedded XML schema to the value of unqualified, if set to true. This attribute indicates whether or not locally declared elements must be qualified by the target namespace in an instance document. If the value of this attribute is 'unqualified', then locally declared elements should not be qualified by the target namespace. If the value of this attribute is 'qualified', then locally declared elements must be qualified by the target namespace.  For compatibility with Clients generated from WSDL (.NET Web Reference, Axis2 stub, webMethods, ect.), set this value to false.  This value defaults to true.
</p>
For further documentation, follow this URL <a href="http://docs.servicenow.com/?context=Web_Services">http://docs.servicenow.com/?context=Web_Services</a>


Value: `true`