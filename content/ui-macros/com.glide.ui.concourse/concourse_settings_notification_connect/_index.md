---
title: concourse_settings_notifications_connect.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<preference-changer label="${gs.getMessage('Connect mobile notifications')}"
						moreinfo="${gs.getMessage('Enable or disable mobile notifications for Connect messages')}"
						preference="connect.notifications.mobile"
						fire-event="connect.notifications.mobile.update" type="boolean"/>
	<preference-changer label="${gs.getMessage('Connect desktop notifications')}"
						moreinfo="${gs.getMessage('Enable or disable desktop notifications for Connect messages')}"
						preference="connect.notifications.desktop"
						fire-event="connect.notifications.desktop.update" type="boolean"/>
	<preference-changer label="${gs.getMessage('Connect email notifications')}"
						moreinfo="${gs.getMessage('Enable or disable email notifications for Connect messages')}"
						preference="connect.notifications.email"
						fire-event="connect.notifications.email.update" type="boolean"/>
	<preference-changer label="${gs.getMessage('Connect audio notifications')}"
						moreinfo="${gs.getMessage('Enable or disable audio notifications for Connect messages')}"
						preference="connect.notifications.audio"
						fire-event="connect.notifications.audio.update" type="boolean"/>
</j:jelly>
```