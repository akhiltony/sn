---
title: output_messages2.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- FBL - Nov 06
	created for the Jelly streamlining - we really want to delete the output_messages
	but I did not test all places where output_messages was invoked
-->
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<j2:if test="$[sysparm_skipmsgs != true]">
		<g2:evaluate var="jvar_output_style">
			var buckets = ['info', 'error','access'];
			var ret = 'outputmsg_hide';
			if (gs.hasMessages(buckets))
				ret = '';

			ret;
		</g2:evaluate>
		<div id="output_messages" class="outputmsg_container $[jvar_output_style]">
			<h2 class="sr-only">${gs.getMessage("Notifications")}</h2>
			<button aria-label="${gs.getMessage('Close Messages')}" id="close-messages-btn" class="btn btn-icon close icon-cross"
					onclick="GlideUI.get().clearOutputMessages(this); return false;">
			</button>
			<div class="outputmsg_div" aria-live="polite" role="region" data-server-messages="$[gs.hasMessages(buckets)]">

				<!-- error messages -->
				<g2:evaluate var="jvar_messages" expression="gs.getErrorMessages()" object="true" />
				<j2:forEach var="jvar_message" items="$[jvar_messages]">
					 <div class="outputmsg outputmsg_error notification notification-danger">
						<span class="notification-icon icon-cross-circle">
							 <span class="sr-only">
									${gs.getMessage('Error Message')}
							 </span>
						</span>
						<div class="outputmsg_text">
						 <g2:no_escape>$[jvar_message]</g2:no_escape>
						</div>
					 </div>
				</j2:forEach>

				<!-- info messages -->
				<g2:evaluate var="jvar_messages" expression="gs.getInfoMessages()" object="true" />
				<j2:forEach var="jvar_message" items="$[jvar_messages]">
					 <div class="outputmsg outputmsg_info notification notification-info">
						<span class="notification-icon icon-info">
							<span class="sr-only">
								${gs.getMessage('Info Message')}
							</span>
						</span>
						<div class="outputmsg_text">
							<g2:no_escape>$[jvar_message]</g2:no_escape>
						</div>
					 </div>
				</j2:forEach>
				 <!--  We want to show the access handler message only for table forms and not for any other type of pages like list or search page -->
				<j2:if test="$[jvar_form_type == 'TABLE']">
						<g2:evaluate var="jvar_messages" expression="gs.getAccessMessages()" object="true" />
						<j2:forEach var="jvar_message" items="$[jvar_messages]">
						<div class="outputmsg outputmsg_warning notification notification-warning">
							<span class="notification-icon icon-alert">
								 <span class="sr-only">
										${gs.getMessage('Access Message')}
								 </span>
							</span>
							<div class="outputmsg_text">
								<g2:no_escape>$[jvar_message]</g2:no_escape>
							</div>
						</div>
						</j2:forEach>
						<!-- Let's remove these messages from session
						so the subsequent pages that user navigates to does not display these messages if not applicable. -->
						<g2:evaluate expression="gs.flushAccessMessages()"/>
				</j2:if>
			</div>
		</div>

		<g:evaluate var="jvar_is_accessibility_enabled" expression="gs.getPreference('glide.ui.accessibility', 'false')" />

		<script>
			addRenderEvent(function() {CustomEvent.fire('glide_optics_inspect_update_watchfield', '$[gs.getSession().getWatchField()]');});

			var accessibilityEnabled = Boolean(${JS:jvar_is_accessibility_enabled});
			if (accessibilityEnabled) {
				$j(function() {
					$j('#output_messages .btn.btn-icon.close').focus();
				});
			}
		</script>

		<!-- session level ui notifications go out as spans with attributes -->
		<g2:session_notifications />
		<g2:evaluate expression="gs.flushMessages()" />
	</j2:if>
</j:jelly>
```