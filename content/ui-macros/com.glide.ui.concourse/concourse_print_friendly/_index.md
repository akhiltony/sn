---
title: concourse_print_friendly.xml
---
```xml
<div class="row form-group">
	<div class="col-sm-5 control-label">
		${gs.getMessage('Printer friendly version')}
	</div>
	<div class="col-sm-7">
		<a href="javascript:void(0)" id="print-icon" aria-label="${gs.getMessage('Open printer friendly version of page')}"
			ng-click="printList('25000')" class="icon-print settings-menu-icon" />
	</div>
</div>
```