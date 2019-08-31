---
title: concourse_impersonate_modal.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">

	<sn-modal name="impersonate">
		<div class="modal-dialog modal-sm impersonate-dialog ng-cloak" ng-controller="Impersonate">
			<div class="modal-content">

				<header class="modal-header">
					<button data-dismiss="modal" class="btn-icon close icon-cross">
						<span class="sr-only">${gs.getMessage('Close')}</span>
					</button>
					<h4 class="modal-title" id="impersonate_title">${gs.getMessage('Impersonate User')}</h4>
				</header>

				<div class="modal-body">
					<div class="alert alert-danger" ng-show="show_error">
						<p ng-bind="error.detail"></p>
					</div>

					<g2:evaluate var="jvar_impersonate_qualifier">
						var name = gs.getImpersonatingUserName();
						var actual_user = null;
						if (name == null || name == '')
							actual_user = user;
						else
							actual_user = GlideUser.getUser(name);

						var qualifier = "active=true^locked_out=false^web_service_access_only=false^ORweb_service_access_onlyISEMPTY^roles!=admin";
						if (actual_user.hasRole('admin'))
							qualifier = "active=true^locked_out=false^web_service_access_only=false^ORweb_service_access_onlyISEMPTY";

						qualifier;
					</g2:evaluate>

					<sn-reference-picker
							field="searchConfig.field"
							ed="{ reference: 'sys_user', qualifier: '$[JS:qualifier]', for_impersonation: true }"
							sn-disabled="searchConfig.disabled"
							sn-options="{ placeholder: '${JS:gs.getMessage('Search for user')}' }"
							aria-label="${JS:gs.getMessage('Search for user')}"
							allow-clear="false"
							sn-on-change="submitFromReference()"
							additional-display-columns="user_name"
							/>
					<br/>
					<div class="panel panel-default" ng-if="recent_impersonations.length > 0 || $[!!gs.getImpersonatingUserName()]">
						<div class="panel-heading">
							<h5>${gs.getMessage('Recent Impersonations')}</h5>
						</div>

						<j2:if test="$[!!gs.getImpersonatingUserName()]">
							<a class="list-group-item" href="javascript:void(0)"
							   ng-click="impersonate(&quot;$[gs.getImpersonatingUserName()]&quot;)">
								$[gs.getImpersonatingUserDisplayName()]
							</a>
						</j2:if>

						<a class="list-group-item" ng-repeat="rec in recent_impersonations" href="javascript:void(0)" ng-click="impersonate(rec.user_sys_id)" ng-bind="rec.user_display_value"/>
					</div>
				</div>
			</div>
		</div>
	</sn-modal>
</j:jelly>

```