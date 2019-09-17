---
# Course title, summary, and position.
linktitle: "glide.ldap.url"
summary: ""
weight: 1
# Page metadata.
title: "glide.ldap.url"
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
    name: "glide.ldap.url"
    weight: 1
---

Description: <p>Name (or IP address in dotted format) of the LDAP server, together with the TCP port designation. Generally, port 389 is the non-SSL enabled port, and port 636 is the SSL enabled port. For example: ldap://ldap.service-now.com:389/ or ldap://192.202.185.90:636/ . To enable SSL connection, you will have to provide ServiceNow with a X.509 CA certificate in the formats of DER encoded binary or Base-64 encoded.</p>
<p>For information on configuring a certificate authority one good document is:
http://www.microsoft.com/technet/prodtechnol/windowsserver2003/technologies/security/webenroll.mspx
</p><p>
If you are not using a Microsoft Certificate Authority, documention describing how to use a third party certificate authority with Active Directory can be found at:
http://support.microsoft.com/default.aspx?scid=kb;EN-US;Q295663
</p>


Value: ``