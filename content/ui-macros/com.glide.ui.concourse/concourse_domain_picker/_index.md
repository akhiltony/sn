---
title: concourse_domain_picker.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<div ng-if="!inHeader || domains.showInHeader" class="concourse-domain-picker">
		<div class="form-group">
			<label ng-if="::!inHeader" for="domain_picker_select" class="col-sm-5 section-title-top control-label"><span class="icon-tree label-icon"></span>${gs.getMessage('Domain')}</label>
			<span ng-if="::inHeader" class="icon-tree label-icon"></span>
			<span class="col-sm-7 selector" ng-class="::{'one-control' : !inHeader}">
				<select id="domain_picker_select{{ ::inHeader ? '_header' : ''}}"
					class="form-control"
					name="domain_picker_select"
					ng-model="domains.currentValue"
					aria-label="${gs.getMessage('Select domain')}"
					ng-change="updateDomain()"
					ng-options="domain.value as domain.label for domain in domains.list">
				</select>
				<a ng-if="::!inHeader" href="javascript:void(0);" ng-click="setDefaultDomain()" class="icon-clear-cache btn btn-icon" role="button" aria-label="${gs.getMessage('Reset to default domain')}" title="${gs.getMessage('Reset to default domain')}" />
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