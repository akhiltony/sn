---
title: concourse_encryption_picker.xml
---
```xml
java.lang.String (2840):
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<div ng-if="!inHeader || encryptions.showInHeader" class="concourse-encryption-picker">
		<div class="form-group">
			<label ng-if="::!inHeader" for="encryption_picker_select" class="col-sm-5 section-title-top control-label"><span class="icon-locked label-icon"></span>${gs.getMessage('Encryption')}</label>
			<span ng-if="::inHeader" class="icon-locked label-icon"></span>
			<span class="col-sm-7 selector">
				<select id="encryption_picker_select{{ ::inHeader ? '_header' : ''}}"
					class="form-control"
					name="encryption_picker_select"
					ng-model="encryptions.currentValue"
					aria-label="${gs.getMessage('Select encryption context')}"
					ng-change="updateEncryption()"
					ng-options="encrypt.value as encrypt.label for encrypt in encryptions.list">
				</select>
			</span>
		</div>
		<div ng-if="::!inHeader" class="form-group">
			<label class="col-sm-5 control-label" for="encryption_picker_in_header">${gs.getMessage('Show encryption picker in header')}</label>
			<div class="col-sm-7 input-switch">
				<input type="checkbox"
					ng-model="showInHeader"
					name="encryption_picker_in_header"
					id="encryption_picker_in_header" />
				<label class="switch" for="encryption_picker_in_header"></label>
			</div>
		</div>
	</div>
</j:jelly>
```