---
title: 'home'
---
```xml
<?xml version="1.0" encoding="utf-8"?>
<!--	
	Landing page. Default is homepage portal grid system.
-->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide">
	<g:evaluate var="jvar_my_home_navigation_page">
		gs.getPreference("my_home_navigation_page", "default");
	</g:evaluate>
	<g:requires name="ConditionalFocus.jsdbx" />
	<j:choose>
		<j:when test="${RP.getParameterValue('sysparm_userpref_homepage') == '' &amp;&amp; RP.getParameterValue('sysparm_this_url') == 'home.do' &amp;&amp; jvar_my_home_navigation_page != 'default'}">
			<meta http-equiv="refresh" content="0; url=${jvar_my_home_navigation_page}" />
		</j:when>
		<j:otherwise>
			<g:inline template="home_grid.xml"/>
		</j:otherwise>
	</j:choose>
</j:jelly>
```