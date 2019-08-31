---
title: concourse_header_help_popover.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- help popover in header area -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<j:if test="${gs.getProperty('glide.product.help_show') != 'false'}">
		<div id="helpPopover" class="popover-item-list">
			<div class="popover-body">
				<j:if test="${!GlideUtil.isExpressInstance()}">
                    <j2:if test="$[gs.getProperty('glide.product.show_what_is_new', 'true')]">
					    <div class="row">
						    <button sn-trigger-overview-help="helsinki" class="btn btn-default">
							    ${gs.getMessage("What's New")}
						    </button>
					    </div>
                    </j2:if>
				</j:if>
				<j:if test="${GlidePluginManager.isActive('com.glide.user_guide')}">
					<div class="row">
						<a class="btn btn-default"
						   href="/$h.do?sysparm_id=basics"
						   target="user_guide_frame">
							${gs.getMessage("User Guide")}
						</a>
					</div>
				</j:if>
				<div class="row">
					<a class="btn btn-default"
					   href="${jvar_help_url}"
					   target="_blank"
					   id="help_ico">
						${gs.getMessage('Search Product Documentation')}
					</a>
				</div>
			</div>
		</div>
	</j:if>
</j:jelly>
```