---
title: concourse_i18n.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<now-message key="General" value="${gs.getMessage('General')}"/>
	<now-message key="Theme" value="${gs.getMessage('Theme')}"/>
	<now-message key="Lists" value="${gs.getMessage('Lists')}"/>
	<now-message key="Forms" value="${gs.getMessage('Forms')}"/>
	<now-message key="Applications" value="${gs.getMessage('Applications')}"/>
	<now-message key="Channels" value="${gs.getMessage('Channels')}"/>
	<now-message key="Notifications" value="${gs.getMessage('Notifications')}"/>
	<now-message key="Developer" value="${gs.getMessage('Developer')}"/>
	<now-message key="Tour ended because the next step was not found." value="${gs.getMessage('Tour ended because the next step was not found.')}"/>
	<now-message key="record inserted" value="${gs.getMessage('record inserted')}"/>
	<now-message key="record updated" value="${gs.getMessage('record updated')}"/>
	<now-message key="record deleted" value="${gs.getMessage('record deleted')}"/>

	<j:if test="${jvar_settings_menu_notifications_tab}">
		<g:inline template="notification_preference_i18n.xml" />
	</j:if>
</j:jelly>
```