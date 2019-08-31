---
title: html_page_meta.xml
---
```xml
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide"
	xmlns:g2="null" xmlns:j2="null">
	<g:evaluate var="jvar_ua_compatible">
		var result = [];

		if (gs.getProperty('glide.ui.allow_ie_compatibility_mode', 'false') == 'false')
			result.push('IE=Edge');

		if (gs.getProperty('glide.ui.use_chrome_frame', 'true') == 'true')
			result.push('chrome=1');

		result.join(',');
	</g:evaluate>

	<j:if test="${jvar_ua_compatible != ''}">
		<meta http-equiv="X-UA-Compatible" content="${jvar_ua_compatible}" />
	</j:if>

	<j:if test="${gs.getProperty('glide.ui.use_chrome_frame', 'true')=='true'}">
		<meta http-equiv="cache-control" content="public" />
	</j:if>
</j:jelly>
```