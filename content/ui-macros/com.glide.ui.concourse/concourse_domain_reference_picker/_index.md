---
title: concourse_domain_reference_picker.xml
---
```xml
java.lang.String (3616):
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g:evaluate var="jvar_active_domains" jelly="true">
		var excludeInactiveDomains = GlideDomainSupport.shouldExcludeInactiveDomainsFromPicker();
		if (excludeInactiveDomains)
			", qualifier: 'active=true'";
		else
			"";
	</g:evaluate>
	<div ng-if="!inHeader || domains.showInHeader" class="domain-reference-picker">
		<div class="form-group">
			<label ng-if="::!inHeader" class="col-sm-5 section-title-top control-label"><span class="icon-tree label-icon"></span>${gs.getMessage('Domain')}</label>
			<span ng-if="::inHeader" class="icon-tree label-icon"></span>
			<span class="col-sm-7 selector" ng-class="::{'one-control' : !inHeader}">
				<sn-reference-picker
					field="domainConfig.field"
					domain="picker"
					ed="{reference: '${GlideDomainSupport.getDomainTable()}' ${jvar_active_domains}}"
					sn-options="domainOptions"
					aria-label="${gs.getMessage('Select domain')}"
					allow-clear="false"
					sn-on-change="updateDomainFromReference()" />
				<a href="javascript:void(0)" class="btn btn-icon icon-undo" ng-click="resetDomain()" aria-label="Reset domain"></a>
			</span>
		</div>
		<div ng-if="::!inHeader" class="form-group">
			<div class="col-sm-5 section-title-top control-label" title="${gs.getMessage('Show domain picker in header')}">${gs.getMessage('Show domain picker in header')}</div>
			<div class="col-sm-7 input-switch">
				<input type="checkbox"
					ng-model="showInHeader"
					aria-label="${gs.getMessage('Show domain picker in header')}"
					name="domain_picker_in_header"
					id="domain_picker_in_header" />
				<label class="switch" for="domain_picker_in_header"></label>
			</div>
		</div>
	</div>
</j:jelly>

```