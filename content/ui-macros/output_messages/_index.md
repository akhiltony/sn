---
title: output_messages.xml
---
```xml
java.lang.String (2128):
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g:evaluate var="jvar_messages" expression="gs.getErrorMessages()" object="true"/>
	<j:forEach var="jvar_message" items="${jvar_messages}">
		<div><img src="images/message_error.gifx" alt="" /><span class="outputmsg_error">${jvar_message}</span></div>
	</j:forEach>
	<g:evaluate var="jvar_messages" expression="gs.getInfoMessages()"  object="true"/>
	<j:forEach var="jvar_message" items="${jvar_messages}">
		<div>
			<table>
				<tr>
					<td>
						<img src="images/info.gifx" alt="" />
					</td>
					<td valign="center" class="outputmsg_info">${jvar_message}</td>
				</tr>
			</table>
		</div>
	</j:forEach>
    <g:evaluate var="jvar_messages" expression="gs.getTrivialMessages()"  object="true"/>	
	<j:forEach var="jvar_message" items="${jvar_messages}">
			<script>showOutputMessages('${JS:jvar_message}', 'output_message');</script>
	</j:forEach>

	<g:evaluate expression="gs.flushMessages()" />

</j:jelly>
```