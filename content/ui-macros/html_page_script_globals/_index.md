---
title: html_page_script_globals.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null">

  <!--
global variable population 
TODO: remove the seldom used variables like: g_max_table_length
TODO: move references from globals into GlideManager (determine what is referenced here in [js_includes] and separate)
  -->
  
  <g2:evaluate>
	var gl = GlideLocale.get();
	var g_tz_offset = new GlideDateTime().getTZOffset();
	var g_max_table_length = gs.getMaxSchemaNameLength();
  </g2:evaluate>
  
  <g2:evaluate var="jvar_sys_enhanced"> 
  	var gr = new GlideRecord('label_user_m2m');
  	gr.isValid();
  </g2:evaluate>

  <script type="text/javascript" data-description="globals population">
	window.NOW = window.NOW || {};
	var g_loadTime = new Date();
	var lastActivity = new Date();
	var g_lang = '$[JS:gs.getUser().getLanguage()]';
	var g_system_lang = '$[JS:gs.getProperty("glide.sys.language")]';
	var g_enhanced_activated = '$[jvar_sys_enhanced]';
	  var g_popup_timeout = parseInt($[gs.getProperty('glide.ui.popup.delay', 100)]);
	var g_export_warn_threshold = parseInt($[gs.getProperty('glide.ui.export.warn.threshold', 10000)]);
	  var g_event_handler_ids = {};
	var g_event_handlers = [];
	var g_event_handlers_onLoad = [];
	var g_event_handlers_onSubmit = [];
	var g_event_handlers_onChange = [];
	var g_event_handlers_onCellEdit = {};
	var g_event_handlers_localCache = {};
	var g_event_handlers_queryTracking = true;
	var g_user_date_time_format = "$[gs.getDateTimeFormat()]";
	var g_user_date_format = "$[gs.getDateFormat()]";
	var g_user_decimal_separator = "$[gl.getDecimalSeparator()]";
	var g_user_grouping_separator = "$[gl.getGroupingSeparator()]";
	var g_glide_list_separator = "${gs.getProperty('glide.ui.glide_list.separator', ', ')}";
	var g_tz_offset = $[g_tz_offset];
	  var g_tz_user_offset = ${gs.getProperty('glide.ui.date_time.user_offset', 'true')};
	var g_first_day_of_week = parseInt(${gs.getProperty('glide.ui.date_format.first_day_of_week', 1)}, 10);
	var g_date_picker_first_day_of_week = parseInt(${gs.getProperty('glide.ui.date_picker.first_day_of_week', 0)}, 10);
	  var g_full_calendar_edit = ${gs.getProperty('glide.ui.list_edit.show_calendar_only', 'true')};
	var g_submitted = false;
	var g_max_table_length = $[g_max_table_length];
	var g_fontSizePreference = "$[gs.getPreference('font-size')]";
	var g_fontSize = "$[gs.getProperty('css.base.font-size','10pt')]";
	// use to be the sys_property glide.ui.js_error_notify, hard coded for PRB603998
	var g_jsErrorNotify = "true";
	var g_cancelPreviousTransaction = ${gs.getProperty('glide.request_manager.cancel_other_transaction', 'true')};
	var g_text_direction = "${GlideI18NStyle.getDirection()}";
	var g_glide_list_filter_max_length =  parseInt("$[gs.getProperty('glide.list.filter_max_length',0)]", 10);
	var g_accessibility = $[GlideAccessibility.isEnabled()];
	var g_accessibility_visual_patterns = ${gs.getPreference('glide.ui.report.accessibility.patterns', 'false')};
	var g_detail_row = ${gs.getProperty('glide.ui.list.detail_row', 'false')};
	// default values to be used in absence of user preferences are hard coded below
	// as well as in keyboardShortcuts.js and keyboard_preference_changer.xml
	window.g_keyboard_shortcuts = {};
	window.g_keyboard_shortcuts.allow_in_input_fields = $[gs.getPreference('glide.ui.keyboard.shortcuts.allow_in_input_fields', false)];
	window.g_keyboard_shortcuts.enabled = $[gs.getBooleanPreference('glide.ui.keyboard.shortcuts.enabled', true)];
	window.g_keyboard_shortcuts.global_search = {};
	window.g_keyboard_shortcuts.global_search.enabled = $[gs.getBooleanPreference('glide.ui.keyboard.shortcuts.global_search.enabled', true)];
	window.g_keyboard_shortcuts.global_search.key_combination = '$[gs.getPreference('glide.ui.keyboard.shortcuts.global_search.key_combo', 'ctrl + alt + g')]';
	window.g_keyboard_shortcuts.main_frame = {};
	window.g_keyboard_shortcuts.main_frame.enabled = $[gs.getBooleanPreference('glide.ui.keyboard.shortcuts.main_frame.enabled', true)];
	window.g_keyboard_shortcuts.main_frame.key_combination = '$[gs.getPreference('glide.ui.keyboard.shortcuts.main_frame.key_combo', 'ctrl + alt + p')]';
	window.g_keyboard_shortcuts.navigator_toggle = {};
	window.g_keyboard_shortcuts.navigator_toggle.enabled = $[gs.getBooleanPreference('glide.ui.keyboard.shortcuts.navigator_toggle.enabled', true)];
	window.g_keyboard_shortcuts.navigator_toggle.key_combination = '$[gs.getPreference('glide.ui.keyboard.shortcuts.navigator_toggle.key_combo', 'ctrl + alt + c')]';
	window.g_keyboard_shortcuts.navigator_filter = {};
	window.g_keyboard_shortcuts.navigator_filter.enabled = $[gs.getBooleanPreference('glide.ui.keyboard.shortcuts.navigator_filter.enabled', true)];
	window.g_keyboard_shortcuts.navigator_filter.key_combination = '$[gs.getPreference('glide.ui.keyboard.shortcuts.navigator_filter.key_combo', 'ctrl + alt + f')]';
	window.g_keyboard_shortcuts.impersonator = {}
	window.g_keyboard_shortcuts.impersonator.enabled = $[gs.getBooleanPreference('glide.ui.keyboard.shortcuts.impersonator.enabled', true)];
	window.g_keyboard_shortcuts.impersonator.key_combination = '$[gs.getPreference('glide.ui.keyboard.shortcuts.impersonator.key_combo', 'ctrl + alt + i')]';
	var g_concourse_onmessage_enforce_same_origin = '${gs.getProperty('glide.ui.concourse.onmessage_enforce_same_origin', true)}'.toLowerCase() === 'true';
	var g_concourse_onmessage_enforce_same_origin_whitelist = '${gs.getProperty('glide.ui.concourse.onmessage_enforce_same_origin_whitelist', '')}';
	window.g_load_functions = [];
	window.g_render_functions = [];
	window.g_late_load_functions = [];
	
	<j:if test="${gs.getProperty('glide.security.use_csrf_token') == 'true'}">
	var g_ck = '$[gs.getSessionToken()]';
	</j:if>

	<j:if test="${gs.getProperty('glide.xmlhttp.ac_wait_time') > 0}">
	var g_acWaitTime = parseInt(${gs.getProperty('glide.xmlhttp.ac_wait_time')});
	</j:if>

	var g_autoRequest = '$[JS:sysparm_auto_request]';

	try {
		window.NOW.dateFormat = JSON.parse("$[JS:gs.getPreference('glide.ui.date_format', '{"timeAgo": false, "dateBoth": false}')]");
	} catch (e) {
		window.NOW.dateFormat = {timeAgo: false, dateBoth: false};
	}

	window.NOW.dateFormat.dateStringFormat = "${gs.getProperty('glide.sys.date_format')}";
	window.NOW.dateFormat.timeStringFormat = "${gs.getProperty('glide.sys.time_format')}";
	window.NOW.shortDateFormat = $[gs.getBooleanPreference('glide.ui.short_date_format', false)];
	window.NOW.listTableWrap = $[gs.getBooleanPreference("table.wrap", true)];
	window.NOW.compact = $[gs.getBooleanPreference("glide.ui.compact", false)];
  	window.NOW.templateToggle = $[gs.getBooleanPreference("glide.ui.templateToggle", false)];
	window.NOW.tabbed = $[gs.getBooleanPreference("tabbed.forms", false)];
	window.NOW.permalink = $[gs.getBooleanPreference("glide.ui.enable_permalink", true)];
	window.NOW.useSimpleStorage = $[gs.getProperty("glide.ui.use_simple_storage", true)];
	window.NOW.simpleStorageSynch = "$[GlideCacheManager.getFlushStamp('syscache_message')]";
	window.NOW.language =  '$[JS:gs.getUser().getLanguage()]';
	window.NOW.listOpenInAppTab = $[gs.getBooleanPreference('glide.ui.open_list_link_inapp_tab', false)];
	window.NOW.floatingScrollbars = $[gs.getProperty('glide.ui.related_list.floating_scrollbars', false)];
	<g2:evaluate var="jvar_user" object="true">
		gs.getUser();
	</g2:evaluate>
	window.NOW.user = {};
	window.NOW.user.preferences = [];
	window.NOW.user.roles = '$[JS:GlideStringUtil.join(GlideSecurityManager.get().getRoles())]';
	window.NOW.user.allRoles = '$[JS:GlideStringUtil.join(GlideSecurityManager.get().getRoles(true))]';
	window.NOW.user.userID = '$[jvar_user.getID()]';
	window.NOW.user.departmentID = '$[JS:jvar_user.getDepartmentID()]';
	window.NOW.user.firstName = '$[NG,JS:jvar_user.getFirstName()]';
	window.NOW.user.lastName = '$[NG,JS:jvar_user.getLastName()]';
	window.NOW.user.name = '$[NG,JS:jvar_user.getName()]';
    window.NOW.batch_glide_ajax_requests = '${JS:gs.getProperty("glide.ui.batch_glide_ajax.enabled", true) &amp;&amp; !GlidePluginManager.isActive("com.glide.edgeencryption")}' === 'true';
    window.NOW.batch_glide_ajax_requests_max_time_in_queue = ~~'${JS:gs.getProperty("glide.ui.batch_glide_ajax.max_queue_time", 50)}';
    window.NOW.batch_glide_ajax_disable_time = ~~'${JS:gs.getProperty("glide.ui.batch_glide_ajax.disable_time", 1000)}';

	window.NOW.currency = {};
    window.NOW.currency.code = '${GlideLocale.get().getCurrencyCode()}';
    window.NOW.locale = {};
	window.NOW.locale.code = '${GlideLocale.get().getCurrent()}';
  </script>

	<script data-comment="GlideUser initialization">
	(function() {
		 g_render_functions.push(setGlideUser);
		function setGlideUser() {
			if (window.g_user || !window.GlideUser)
		return;

		window.g_user = new GlideUser(NOW.user.name,
			  NOW.user.firstName,
			  NOW.user.lastName,
			  NOW.user.roles,
			  NOW.user.userID,
			  NOW.user.departmentID);
		window.g_user.setRoles(NOW.user.allRoles, true);
		}
	})();
	</script>
<j:if test="${pm.isActive('com.snc.fiscal_calendar')}">
		<g2:evaluate var="jvar_date_time_filter">
			new GlideDateTimeFilterUtil().getFiscalDateTimeList();
		</g2:evaluate>

		<script data-comment="Fiscal schedule constants">
			window.NOW.filter_globals = "$[JS:jvar_date_time_filter]" || "[]";
		</script>
	</j:if>

	<g:inline template="glide_weba_header.xml" />
	<g:requires name="ConditionalFocus.jsdbx" />
</j:jelly>

```