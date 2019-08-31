---
title: $concourse.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- the main page -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g2:doctype name="html" />
	<g:inline template="html_page_properties.xml" />
	<html lang="${jvar_text_language}" dir="${jvar_text_direction}" class="${jvar_text_direction}"
		  data-doctype="true"
		  data-devicetype="$[GlideMobileExtensions.getDeviceType()]">
		<head>
			<g:inline template="html_page_title.xml" />
			<g:inline template="html_page_meta.xml" />
			<link href="${gs.getEscapedProperty('glide.product.icon', 'favicon.ico')}" rel="shortcut icon" />

			<j2:if test="$[GlideMobileExtensions.getDeviceType() != 'mobile']">
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0" />
			</j2:if>
			<j2:if test="$[GlideMobileExtensions.getDeviceType() == 'mobile']">
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=no" />
			</j2:if>

			<!-- style sheets -->
			<g:evaluate var="jvar_theme">
				var theme = gs.getPreference('glide.css.theme.ui16');
				if (null == theme){
					var company = gs.getUser().getCompanyRecord();
					if (null != company)
						theme = company.getValue("theme");
				}
				theme;
			</g:evaluate>

			<!-- TODO -->
			<j2:if test="$[GlideUtil.isExpressInstance()]">
				<g:requires name="styles/sn_express.css" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]"/>
			</j2:if>
			
			<g:evaluate var="jvar_settings_menu_notifications_tab">
        typeof NotificationPreferenceUI == 'function' ${AND} new NotificationPreferenceUI().enabled({ concourse: true, cms: false });
			</g:evaluate>

			<j:if test="${jvar_settings_menu_notifications_tab}">
				<g:requires name="styles/notification_preference/notification_preference.css" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=${jvar_theme}"/>
			</j:if>
			
			<g2:requires name="styles/sn/concourse/css_includes_concourse.css" includes="true" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=${jvar_theme}" />
			<g:requires name="scripts/sn/concourse/js_includes_concourse.js" includes="true" />

			<!-- script -->
			<g:inline template="html_page_script_globals.xml" />
			<g:inline template="html_page_header.xml" />

			<j:if test="${jvar_settings_menu_notifications_tab}">
				<g:requires name="scripts/notification_preference/js_includes_notification_preference.js" includes="true"/>
			</j:if>

			<g:inline template="ng_amb_header.xml"/>
			<g:evaluate var="jvar_has_studio">
				GlidePluginManager.isActive('com.glide.dev-studio') || GlidePluginManager.isActive('sn_devstudio');
			</g:evaluate>

			<j:if test="${jvar_has_studio}">
				<g:inline template="dev_studio.xml" />
			</j:if>
			<script>
				// Don't let the navpage intercept links targeted for the main frame.
				if (window.name == "gsft_main")
					window.name = "";
			</script>
		</head>
		<body>
			<g2:evaluate var="jvar_delayed_concourse_compilation">
				GlideProperties.getBoolean('glide.ui.concourse.compilation_delay.enabled', true);
			</g2:evaluate>
			<g2:set_if var="jvar_ng_non_bindable" test="$[jvar_delayed_concourse_compilation]"
				true="" false="$[null]" />
			<!-- Set ability to run chat -->
			<g2:evaluate var="jvar_connect">
				GlideCollaborationCompatibility.isFrameSetEnabled()
			</g2:evaluate>
			<g2:evaluate var="jvar_embedded_help">
				(GlidePluginManager.isActive('com.glide.embedded_help') $[AND] gs.getProperty("com.glide.embedded_help.enabled", false) === 'true' $[AND] !GlideCollaborationCompatibility.isIncompatible())
			</g2:evaluate>
			<g2:evaluate var="jvar_sn_templated_snip">
				GlidePluginManager.isActive('com.sn_templated_snip');
			</g2:evaluate>
			<g:evaluate var="jvar_openframe">
				GlidePluginManager.isActive('com.sn_openframe') ${AND} gs.hasRole('sn_openframe_user')
			</g:evaluate>
			<g2:evaluate var="jvar_right_pane_class" jelly="true">
				var theClass = "";
				if (jelly.jvar_connect == 'false')
					theClass = "navpage-right-hidden";
				else if (jelly.jvar_connect == 'true' $[AND] gs.getUser().getPreference('collab.frame.right.collapsed') !== 'false')
					theClass = " ";

				theClass;
			</g2:evaluate>
			<g2:evaluate var="jvar_sn_knowledge_block">
				GlidePluginManager.isActive('com.snc.knowledge_blocks');
			</g2:evaluate>

			<j2:if test="$[jvar_connect]">
				<sn-attachment-preview />
				<sn-queue-entry-close />
				<sn-non-agent-close />
				<sn-queue-entry-transfer />
				<sn-queue-entry-transfer-accepted />
			</j2:if>
 
			
			<!-- since 99% of instances do not have apps in the navigator for guest users, hide the nav by default for guest, show it for authed users -->
			<g2:set_if var="jvar_nav_class" test="$[gs.isLoggedIn()]"
					   true="" false="navpage-nav-hidden"/>

			<!-- container for the whole page -->
			<div class="navpage-layout $[jvar_browser_body_class] $[jvar_right_pane_class] $[jvar_nav_class] navpage-right-hidden navpage-bottom-hidden small-height">

				<div ng-non-bindable="$[jvar_ng_non_bindable]">
				<div concourse-compilation-target="concourse_core">

				<!-- banner area -->
				<header class="navpage-header" role="banner">
					<g:inline template="concourse_header.xml" inconcourse="true"/>
				</header>

				<!-- navigator -->
				<nav class="navpage-nav" aria-label="${gs.getMessage('Primary')}">
					<g:inline template="magellan_navigator.xml" />
				</nav>

				<!-- main panel -->
				<main class="navpage-main">
					<j2:if test="$[sysparm_layout_test == 'true']">
						<div class="navpage-main-left">
							<g:inline template="navpage_layout_test.xml"/>
						</div>
					</j2:if>
					<j2:if test="$[empty(sysparm_layout_test)]">
						<g2:evaluate var="jvar_href" jelly="true">
							var uri = '$[JS:jvar_session.getLoginHome(true)]';
							if (jelly.sysparm_uri)
								uri = jelly.sysparm_uri;

							uri;
						</g2:evaluate>

						<div concourse-main-pane="true" initial-url="$[NG:jvar_href]" class="navpage-main-left" enable-extensions="${gs.getProperty('glide.ui.concourse.pane_extensions', 'false')}">
							<iframe id="gsft_main"
									allowfullscreen="true"
									main-pane="true"
									name="gsft_main"
									title="${gs.getMessage('Main Content')}"
									aria-label="${gs.getMessage('Main content')}"
									src="about:blank"/>

							<div class="extension-pane-container" style="height: 100%; display: none;"></div>
						</div>
					</j2:if>
				</main>

				<g:evaluate var="jvar_enable_debugger">
					var jvar_enable_debugger = GlidePluginManager.isActive('com.glide.glide-js-debugger') || GlidePluginManager.isActive('sn_jsdebugger');
					jvar_enable_debugger;
				</g:evaluate>

				<j:if test="${jvar_enable_debugger}">
					<g:inline template="scriptDebugger.xml" />
				</j:if>

				</div>
				</div>

				<!-- right panel (collaboration/help) -->
				<j2:if test="$[gs.isLoggedIn()]">
					<aside ng-non-bindable="$[jvar_ng_non_bindable]" class="navpage-right">
						<g:inline template="concourse_right.xml"/>
					</aside>
				</j2:if>

				<!-- footer panel -->
				<j2:if test="$[gs.isLoggedIn()]">
					<aside id="edge_south_debug" class="navpage-bottom"  role="complementary"  aria-labelledby="developer-sidebar-title">
						<h2 id="developer-sidebar-title" class="sr-only">${gs.getMessage('Developer Sidebar')}</h2>
						<iframe id="javascript_debugger" class="js-debug" title="${gs.getMessage('Developer Sidebar')}" name="javascript_debugger"/>
					</aside>
				</j2:if>
			</div>

			<j2:if test="$[gs.isLoggedIn()]">
				<j2:if test="${!GlideUtil.isExpressInstance()}">
					<j2:set var="jvar_should_show_help" value="$[gs.getUser().getPreference('overview_help.visited.helsinki') == 'false']"/>
					<overviewhelp page-name="helsinki" active="$[jvar_should_show_help]" embedded="true"/>
				</j2:if>
			</j2:if>

			<script>
				jQuery(document).ready(function() {
					// add these modules to the navpage Angular
					window.NOW = window.NOW || {};
					window.NOW.ngLoadModules = window.NOW.ngLoadModules || [];
					NOW.ngLoadModules.push('Magellan', 'sn.concourse', 'sn.overviewhelp');
				});
			</script>
			<!-- Add open frame -->
			<j:if test="${jvar_openframe}">
				<g:inline template="openframe.xml" />
			</j:if>

			<j2:if test="$[jvar_embedded_help]">
				<g2:evaluate var="jvar_is_embedded_help">
					SNC.EmbeddedHelpUtil.isEmbeddedHelpActive();
				</g2:evaluate>
				<script>
					window.NOW.isEmbeddedHelpActive = $[jvar_is_embedded_help];
				</script>
			</j2:if>
			<g:inline template="ng_translations.xml"/>
			<g2:inline template="concourse_template_preload.xml"/>
			<g:inline template="concourse_userpreference_preload.xml"/>
			<j2:choose>
				<j2:when test="$[jvar_delayed_concourse_compilation]">
					<g2:requires name="scripts/concourse/delayedAngularBootstrapper.js" inline="true" />
				</j2:when>
				<j2:otherwise>
					<g2:requires name="scripts/NavpageAngularBootstrap.js" inline="true" />
				</j2:otherwise>
			</j2:choose>
		</body>
	</html>
</j:jelly>
```