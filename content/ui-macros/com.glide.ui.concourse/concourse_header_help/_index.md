---
title: concourse_header_help.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- help popover in header area -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<j2:if test="${gs.getProperty('glide.product.help_show') != 'false'}">
		<div class="navpage-header-content">
			<g2:evaluate var="jvar_help_url" expression="gs.getProperty('glide.product.help_url', 'context_help.do');" />
			<button class="btn btn-icon icon-help sn-popover-basic"
					data-target="#helpPopover"
					data-toggle="popover"
					data-placement="auto"
					title="${gs.getMessage('Help')}">
				<span class="sr-only">
					${gs.getMessage('Help')}
				</span>
			</button>
		</div>
	</j2:if>
</j:jelly>
```