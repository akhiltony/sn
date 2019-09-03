---
title: concourse_userpreference_preload.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">

	<j2:set var="jvar_app" value="sn.concourse"/>
	<g2:evaluate var="jvar_preferences">
		var prefs = [
			'navigator.activeView',
			'table.wrap',
			'glide.ui.accessibility',
			'glide.ui.short_date_format',
			'glide.ui.date_format',
			'glide.ui.compact',
			'glide.ui.default_list_mode',
			'tabbed.forms',
			'glide.ui.related_list_timing',
			'glide.ui.listFormModal',
			'navigator.collapsed',
			'glide.ui.list_v3.row_stripes',
			'my_home_navigation_page',
			'glide.ui.field_style_circles',
			'embedded_help:language_warning.suppress',
			'embedded_help:help_pane.opened',
			'glide.ui.edit_favorites.hide_confirm',
			'connect.notifications.mobile',
			'connect.notifications.desktop',
			'connect.notifications.email',
			'connect.notifications.audio',
			'connect:conversation_list.opened',
			'connect.conversation_list.active_list.frameSet.id',
			'connect.conversation_list.active_list.frameSet.chat.id',
			'connect.conversation_list.active_list.frameSet.support.id'
		];
		prefs;
	</g2:evaluate>
	<g2:inline template="sn_add_preferences_to_cache.xml" preferences="${jvar_preferences}"/>
</j:jelly>
```