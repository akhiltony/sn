---
title: welcome.xml
---

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null">

	<j2:if test="$[gs.getSession().isLoggedIn() == false]">
		<j:if test="${(gs.getProperty('com.snc.teamdev.is.active', 'false') == 'true')}">
			<j:if test="${(gs.getProperty('com.snc.teamdev.this.instance.is.master', 'false') == 'false')}">
				<g:inline template="federated_login.xml" />
			</j:if>
		</j:if>
		<j2:set var="jvar_login_url" value="welcome.do" />
		<g:insert_form name="login" />
		<br />
	</j2:if>

	<style>
		.welcome_content {
			margin-left: 1em;
			margin-right: 1em;
		}

		/* make breadcrumbs happy - override bootstrap for this area */
		.welcome_content A.breadcrumb {
			padding: 0 .25em;
			margin-bottom: 0;
			background-color: transparent;
			border-radius: 0;
		}
		
		DIV.welcome_content TD {
			padding: 4px;
		}
	</style>

	<div class="welcome_content">
		<j:if test="${(gs.getProperty('com.snc.sso.okta.show_login', 'false') == 'true')}">
			<g:inline template="okta_login.xml" />
		</j:if>

		<g:inline template="welcome_content.xml" />
	</div>
</j:jelly>
```