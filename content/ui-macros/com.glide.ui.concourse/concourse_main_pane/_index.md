---
title: concourse_main_pane.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide">

	<div>
		<iframe id="gsft_main"
				main-pane="true"
				name="gsft_main"
				title="${gs.getMessage('Main Content')}"
				src="about:blank"/>

		<div class="extension-pane-container" style="height: 100%"></div>
	</div>
</j:jelly>
```