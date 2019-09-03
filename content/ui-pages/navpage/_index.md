---
title: navpage.xml
---

```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- the main page -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<!-- we can check this in phase 1 since concourse is added to the cache key in FormKeyGenerator.java -->
	<j:set var="jvar_use_concourse" value="${pm.isRegistered('com.glide.ui.ui16') &amp;&amp; gs.getUser().getPreference('use.concourse') == 'true' &amp;&amp; GlideMobileExtensions.getDeviceType() == 'doctype'}"/>
	<j:if test="${jvar_use_concourse}">
		<g:insert_form name="$concourse"/>
	</j:if>
	<j:if test="${!jvar_use_concourse}">
		<g:insert_form name="navpage_navpage"/>
	</j:if>

</j:jelly>
```