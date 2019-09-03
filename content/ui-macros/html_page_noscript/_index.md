---
title: html_page_noscript.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">
	<!--
		Make sure that Google Enterprise Search Appliances do not index this noscript tag
		http://www.google.com/support/enterprise/static/gsa/docs/admin/70/gsa_doc_set/admin_crawl/preparing.html#1076243

		Also, we need that space for the "on" tag to work, per Google's spec
	-->
	<g2:comment>googleoff: all</g2:comment>
	<noscript>This site requires JavaScript to be enabled</noscript>$[' ']
	<g2:comment>googleon: all</g2:comment>

</j:jelly>
```