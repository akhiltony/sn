---
title: login_redirect.xml
---

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g2:evaluate var="jvar_can_search">
	  jvar_can_search = gs.hasRole(gs.getProperty('glide.ui.can_search'));
	</g2:evaluate>
	<j:set var="jvar_use_concourse" value="${pm.isActive('com.glide.ui.ui16') &amp;&amp; gs.getUser().getPreference('use.concourse') == 'true' &amp;&amp; GlideMobileExtensions.getDeviceType() == 'doctype'}"/>
	<script>
		g_url = "$[jvar_session.resetURI()]";
		<j:if test="${jvar_use_concourse}">
			loginRedirectURL();
		</j:if>
		<j:if test="${!jvar_use_concourse}">
			if (requireTopWindowReload()) {
				setTimeout(loginRedirectURL, 1);
			} else {
					// reload navigator
					parent.gsftReloadNav();

					// setup userObject
					<g:inline template="navpage_user.xml" />

					// fire event that we're logged in
					getTopWindow().CustomEvent.fire('user.login', userObject);

					// refresh our page to take us home
					setTimeout('location.replace(unescape(g_url));', 1);
			}

			/*
			 * Opt in list of conditions for reloading the main frame.
			 */
			function requireTopWindowReload() {

			   if (!inFrame()) //not in main frame, reload it
				  return true;

			   // UI11 is installed and the switcher should be shown or UI11 is in use so refresh
			   if ($[pm.isRegistered('com.glide.ui11')] $[AND] $[gs.getProperty('glide.ui11.show_switch_link') == 'true' || gs.getPreference('glide.ui11.use') == 'true'])
				  return true;

			   var theme = '$[jvar_session.getProperty('glide.css.theme')]';  //there is a theme probably in the cms
			   if (theme != '')
				  return true;

			   if ($[jvar_session.hasRole('admin')])  //the user has admin role refresh to get the impersonate button
				  return true;

			   if ('$[jvar_session.getAvailableElevatedRoles()]' != '')  //the user has elevated roles
				  return true;

			   if ($[jvar_can_search])
				  return true;

			   var banner_language = getTopWindow().document.getElementById('banner_language');  // language not defined
			   if (!banner_language)
				  return false;

			   return banner_language.value != '$[jvar_session.getLanguage()]'; // language has been changed.
			}
		</j:if>

		function loginRedirectURL() {
			   var url = "nav_to.do?uri=" + g_url;
			   getTopWindow().location.replace(url);
		}
	</script>

	<g:inline template="redirect_page.xml"
		message="${gs.getMessage('Establishing session')}"/>

</j:jelly>
```