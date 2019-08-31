---
title: html_page_header.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">
	<!-- Include any additional header blocks that plugins may have registered. -->
	<!-- CMS Extension -->
	<g:evaluate>
		var map = pm.getExtensionMap().get('com.glide.page.header');
		var header_keys;
		if (map != null)
			header_keys = map.keySet().iterator();
	</g:evaluate>
	<j:forEach var="jvar_header" items="${header_keys}">
		<g:evaluate jelly="true">
			var ep = map.get(jelly.jvar_header);
			var template = ep.getAttribute('name');
     	</g:evaluate>
		<g:inline template="${template}" />
	</j:forEach>

</j:jelly>
```