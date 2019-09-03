---
title: concourse_settings_general.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<preference-changer label="${gs.getMessage('Accessibility enabled')}"
						moreinfo="${gs.getMessage('Improves accessibility when using a keyboard or screen reader')}"
						preference="glide.ui.accessibility" type="boolean" reload="true"
						confirm="${gs.getMessage('To change accessibility settings, the page must be reloaded')}"/>
	<j:if test="${gs.getPreference('glide.ui.accessibility', 'false') == 'true'}">
		<preference-changer label="${gs.getMessage('Accessible tooltips on forms')}"
							moreinfo="${gs.getMessage('Displays a help icon next to each field that has a hint. Note that disabling accessibility mode turns this feature off.')}"
							preference="glide.ui.accessibility.accessible.tooltips" type="boolean"
							reload="true" confirm="${gs.getMessage('To change accessibility settings, the page must be reloaded')}"/>
	</j:if>
	<j:if test="${gs.getPreference('glide.ui.accessibility', 'false') == 'false'}">
		<preference-changer label="${gs.getMessage('Accessible tooltips on forms')}"
							disabledmsg="${gs.getMessage('Accessible tooltips are disabled. To change this setting, you must first enable accessibility mode.')}"
							preference="glide.ui.accessibility.accessible.tooltips" type="boolean-disabled" />
	</j:if>
	<preference-changer label="${gs.getMessage('Data visualization patterns enabled')}"
			moreinfo="${gs.getMessage('Replaces solid colors with patterns to improve accessibility in data visualizations')}"
			preference="glide.ui.report.accessibility.patterns" type="boolean" reload="true"
						confirm="${gs.getMessage('To change data visualization patterns, the page must be reloaded')}"/>
	<preference-changer label="${gs.getMessage('Compact the user interface')}"
						moreinfo="${gs.getMessage('Compresses lines to minimize vertical scrolling throughout platform')}"
						fire-event="compact" preference="glide.ui.compact" type="boolean"/>
	<preference-changer label="${gs.getMessage('Compact list date/time')}"
						moreinfo="${gs.getMessage('In lists, displays date and time values in a compact format')}"
						fire-event="cc_dateformat_compact_set" type="boolean"
						preference="glide.ui.short_date_format"/>
	<preference-changer label="${gs.getMessage('Keyboard shortcuts enabled')}"
						moreinfo="${gs.getMessage('Enables application navigator keyboard shortcuts')}"
						fire-event="application_navigator_keyboard_shortcuts_updated" type="boolean"
						preference="glide.ui.keyboard.shortcuts.enabled"
						default-value="true"/>
	<g:evaluate jelly="true">
		var isCanvasActive = GlidePluginManager.isActive('com.glideapp.dashboards') ${AND}
		gs.getProperty('glide.cms.enable.responsive_grid_layout', true); var paRights =
		(GlidePluginManager.isActive('com.snc.pa') ${AND} (gs.hasRole('pa_viewer')||
		gs.hasRole('pa_contributor'))) || isCanvasActive;
	</g:evaluate>
	<j:if test="${paRights}">
		<preference-changer label="${gs.getMessage('Home')}"
							moreinfo="${gs.getMessage('Choose the type of page to set as your Home')}"
							options="[{value: 'default', label: '${HTML,JS:gs.getMessage('Homepages')}'}, {value: '$pa_dashboard.do', label: '${HTML,JS: gs.getMessage('Dashboards')}'}]"
							type="choice" preference="my_home_navigation_page"/>
	</j:if>
	<preference-changer label="${gs.getMessage('Date/Time')}"
						moreinfo="${gs.getMessage('Choose the format in which dates and times are displayed')}"
						fire-event="cc_dateformat_set"
						options="[{value: '{&quot;timeAgo&quot;:false,&quot;dateBoth&quot;:false}', label: '${HTML:gs.getMessage('Calendar')}'},{value: '{&quot;timeAgo&quot;:true,&quot;dateBoth&quot;:false}', label: '${HTML:gs.getMessage('Time Ago')}'},{value: '{&quot;timeAgo&quot;:false,&quot;dateBoth&quot;:true}', label: '${HTML:gs.getMessage('Both')}'}]"
						type="choice"
						preference="glide.ui.date_format"/>
	<j:if test="${jvar_settings_menu_show_language_picker}">
		<g2:evaluate var="jvar_picker_language_list"
					 expression="new SNC.I18nPickerGenerator().getAvailableLanguages()"/>
		<preference-picker current="settings.currentLanguage"
						   list="${jvar_picker_language_list}"
						   endpoint="language"
						   reload="true"
						   label-title="${gs.getMessage('Language')}"
						   refresh-title="${gs.getMessage('Refresh language picker')}"/>
	</j:if>
	<j:if test="${gs.hasRole(gs.getProperty('glide.timezone_changer.roles'))}">
		<g2:evaluate var="jvar_picker_timezone_list"
					 expression="new SNC.TimezonePickerGenerator().getTimezoneList()"/>
		<preference-picker current="settings.timezone"
						   list="${jvar_picker_timezone_list}"
						   endpoint="timezone"
						   reload="false"
						   label-title="${gs.getMessage('Time zone')}"
						   refresh-title="${gs.getMessage('Refresh time zone picker')}"/>
	</j:if>
	<j2:if test="${jvar_settings_menu_show_domain_picker}">
		<domain-picker current="settings.domain"
					   in-header=""
					   show-in-header="settings.showDomainPickerInHeader"/>
	</j2:if>
	<j2:if test="${jvar_settings_menu_show_domain_reference_picker}">
		<domain-reference-picker current="settings.domain"
								 in-header=""
								 show-in-header="settings.showDomainReferencePickerInHeader"/>
	</j2:if>
	<j2:if test="${jvar_settings_menu_show_encryption_picker}">
		<encryption-picker current="settings.currentEncryption"
						   in-header=""
						   show-in-header="settings.showEncryptionPickerInHeader"/>
	</j2:if>
	<printer-friendly/>
</j:jelly>
```