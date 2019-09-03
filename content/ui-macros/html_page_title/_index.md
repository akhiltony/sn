---
title: html_page_title.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">

  <g:evaluate>
		var map = pm.getExtensionMap().get('com.glide.page.title');
		var title_keys;
		if (map != null)
			title_keys = map.keySet().iterator();
	</g:evaluate>
	<j:forEach var="jvar_titler" items="${title_keys}">
		<g:inline template="${jvar_titler}" />
	</j:forEach>

	<!--
		If none of our extensions set the title, use the default
	-->
	<j:if test="${empty(jvar_page_title)}">
		<j:set var="jvar_product_name_only" value="${gs.getProperty('glide.ui.title.use_product_name_only', false)}"/>

		<!-- show product name and description -->
		<j:if test="${!jvar_product_name_only}">
			<g:set_if var="jvar_page_title"
				test="${gs.getProperty('glide.ui.escape_text')}"
				true="${gs.getProperty('glide.product.name', 'ServiceNow')}  ${gs.getProperty('glide.product.description')}"
				false="${gs.getEscapedProperty('glide.product.name', 'ServiceNow')}  ${gs.getEscapedProperty('glide.product.description')}"/>
		</j:if>

		<!-- show product name only -->
		<j:if test="${jvar_product_name_only}">
			<g:set_if var="jvar_page_title"
				test="${gs.getProperty('glide.ui.escape_text')}"
				true="${gs.getProperty('glide.product.name', 'ServiceNow')}"
				false="${gs.getEscapedProperty('glide.product.name', 'ServiceNow')}"/>
		</j:if>
	</j:if>
	<title>${jvar_page_title}</title>

</j:jelly>
```