---
# Course title, summary, and position.
linktitle: "glide.notify.sms.max_concatenation"
summary: ""
weight: 1
# Page metadata.
title: "glide.notify.sms.max_concatenation"
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
    name: "glide.notify.sms.max_concatenation"
    weight: 1
---

Description: Notify supports the concept of SMS concatenation. When the SMS body exceeds the maximum length of a single SMS (160 characters for plaintext SMS messages or 70 characters for Unicode SMS messages) Notify can concatenate up to 10 SMS messages which will be joined on the receiver's mobile phone. This property configured the maximum number of SMS messages that will be concatenated  into one large SMS message. If the body length is exceeded the body will be truncated and a message will be logged.

Note that charges are per sms, which means that 1600 character SMS will be 10 times as expensive as a 160 character SMS. Also note that not all providers support SMS concatenation. 


Value: `10`