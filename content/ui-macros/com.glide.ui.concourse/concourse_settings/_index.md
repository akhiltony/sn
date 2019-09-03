---
title: concourse_settings.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?><!-- header area -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<button id="nav-settings-button" type="button" class="btn btn-icon icon-cog" title="${gs.getMessage('Settings')}"
			sn-modal-show="settingsModal" aria-label="${gs.getMessage('Settings')}">
		<span class="sr-only">
			${gs.getMessage('Settings')}
		</span>
	</button>
	<div ng-controller="settings">
		<g:evaluate var="jvar_notification_preference_ui_subscription_enabled">
			GlideProperties.getBoolean('glide.notification.preference.ui.subscription.enabled', true);
		</g:evaluate>
		<script type='text/javascript'>
			(function(){
				var systemProperties = {
					developer : ${jvar_settings_menu_show_developer_tab},
					notifications: ${jvar_settings_menu_notifications_tab},
					subscriptions: ${jvar_notification_preference_ui_subscription_enabled}
				};

				var concourseSettings = {
				};

				<j:if test="${jvar_settings_menu_show_language_picker}">
					concourseSettings.currentLanguage = '$[JS:new SNC.I18nPickerGenerator().getCurrentLanguage()]';
				</j:if>

				<j:if test="${gs.hasRole(gs.getProperty('glide.timezone_changer.roles'))}">
					concourseSettings.timezone = '$[JS:new SNC.TimezonePickerGenerator().getCurrentTimezone()]';
				</j:if>

				<j2:if test="${jvar_settings_menu_show_domain_picker}">
					concourseSettings.domain = JSON.parse("$[JS:new SNC.DomainPickerGenerator().getCurrentDomain()]");
					concourseSettings.showDomainPickerInHeader = $[JS:gs.getPreference('glide.ui.domain_picker.in_header', 'false')];
				</j2:if>

				<j2:if test="${jvar_settings_menu_show_domain_reference_picker}">
					concourseSettings.domain = JSON.parse("$[JS:new SNC.DomainPickerGenerator().getCurrentDomain()]");
					concourseSettings.showDomainReferencePickerInHeader = $[JS:gs.getPreference('glide.ui.domain_picker.in_header', 'false')];
				</j2:if>

				<j2:if test="${jvar_settings_menu_show_encryption_picker}">
					concourseSettings.currentEncryption = JSON.parse("$[JS:new SNC.ConcoursePickerGenerator().getCurrentEncryptionAsJSON()]");
					concourseSettings.showEncryptionPickerInHeader = $[JS:gs.getPreference('glide.ui.encryption_picker.in_header', 'false')];
				</j2:if>

				<j2:if test="${jvar_settings_menu_show_developer_tab}">
					<j:if test="${jvar_settings_menu_show_application_picker}">
						concourseSettings.application = JSON.parse("$[JS:new SNC.ConcoursePickerGenerator().getCurrentApplication()]");
						concourseSettings.showApplicationPickerInHeader = $[JS:gs.getPreference('glide.ui.application_picker.in_header', 'false')];
					</j:if>
					<j:if test="${jvar_settings_menu_show_update_set_picker}">
						concourseSettings.updateSet = JSON.parse("$[JS:new SNC.ConcoursePickerGenerator().getCurrentUpdateSet()]");
						concourseSettings.showUpdateSetPickerInHeader = $[JS:gs.getPreference('glide.ui.update_set_picker.in_header', 'false')];
					</j:if>
				</j2:if>

				angular.module('sn.concourse').config(function($provide) {
					$provide.value('modalPath', '${sysparm_modal_path}');
					$provide.value('shouldModalOpen', ${sysparm_modal_path.indexOf('settings') > -1});
					$provide.value('systemProperties', systemProperties);
					$provide.value('concourseSettings', concourseSettings);
					$provide.value('applicationID', '${sysparm_application_id}');
				});
			})();
		</script>
		<g:inline template="concourse_settings_template_preload.xml"/>
		<g:inline template="concourse_i18n.xml" />
		<sn-modal id="settings_modal" name="settingsModal" class="modal settings-modal" aria-label="${gs.getMessage('System Settings')}">
			<div class="modal-dialog modal-lg ng-cloak">
				<div class="modal-content">
					<div class="modal-body clearfix">
						<div class="tab-aside col-sm-3">
							<header class="modal-header clearfix">
								${gs.getMessage('System Settings')}
							</header>
							<div class="sr-only" id="aria_live_iframe_action" role="alert" aria-relevant="all" aria-live="polite" />
							<div class="settings-tabs">
								<g:inline template="concourse_settings_aside.xml"/>
							</div>
						</div>
						<div class="tab-content col-sm-9">
							<header class="modal-header clearfix">
								<div class="modal-header-right">
									<button class="btn btn-back icon pull-left" ng-if="viewStack.length &gt; 1" ng-keypress="back($event)" ng-click="back($event)" tabindex="0">
										<span class="icon-chevron-left" aria-hidden="true" />
										<span class="btn-back-text" ng-bind="previousView().title" />
									</button>
								</div>

								<div class="modal-header-center">
									<h4 class="modal-title text-center" ng-bind="currentView().title" id="settings_modal_panel_header"/>
								</div>

								<div class="modal-header-left">
									<!-- UI15 switch button -->
									<j2:if test="$[gs.hasRole(gs.getProperty('glide.ui.ui15_switch_roles', 'admin')) ${AND} !GlideUtil.isExpressInstance()]">
										<a class="btn btn-default btn-sm"
											 href="?sysparm_userpref_use.concourse=false">
											${gs.getMessage('Switch to UI15')}
										</a>
									</j2:if>
									<button data-dismiss="modal" class="btn close icon-cross">
										<span class="sr-only">${gs.getMessage('Close')}</span>
									</button>
								</div>
							</header>
							<div class="form-horizontal view-stack settings-tab-panels" aria-labelledby="settings_modal_panel_header">
								<div class="tab-pane view-stack-item" role="tabpanel" ng-repeat="view in viewStack" data-name="{{view.name}}"
										ng-include="" src="getViewTemplate(view)" ng-hide="$index &lt; viewStack.length - 1" id="{{'tabpanel_' + view.tab}}"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</sn-modal>
	</div>
</j:jelly>

```