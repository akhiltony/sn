---
title: session_debug.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- output any session debug messages -->
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g:evaluate var="jvar_has_session_metric_plugin">
		GlidePluginManager.isActive('com.glide.session_metric');
	</g:evaluate>
	<j:if test="${jvar_has_session_metric_plugin}">
		<g:inline template="session_metric_stat_preload.xml"/>
	</j:if>
	<g2:evaluate var="jvar_messages" expression="GlideSessionDebug.getOutputMessages()" object="true"/>

	<j2:if test="$[jvar_messages.size() != 0]">
	   <style type="text/css">
          div.group_toggle label {
          	padding-left: 8px;
          }

          div.debug_line {
             border-bottom: 1px solid #eee;
          }

          span.sql_table {
             color: DarkGreen;
          }

          span.sql_where {
             font-weight: bold;
          }

          span.sql_union {
             color: DarkRed;
          }
          
          span.sql_comment {
             color: darkgoldenrod;
          }

          td.debug_acl_col1 {
             padding: 0px 10px 0px 20px;
          }

          td.debug_acl_col2 {
             border-left: 1px solid #eee;
             padding-left: 10px;
          }

          .section_header_content_no_scroll {
          	position: relative !important
          }

          div#slushbucket_body {
          	position: relative !important
          }
        </style>
        <!-- The below SessionDebugFilter.js is part of project glide/glide-paas/src/main/plugins/com.glide.sessiondebug -->
        <g:requires name="scripts/filter/SessionDebugFilter.js" />
        <div id="debug_related" style="margin-top: 60px; margin-bottom: 60px; padding: 0 15px;">
		<hr/>
		<div id="debug_filter_group" class="group_toggle">
			<strong>${gs.getMessage("Debug Output")}</strong>
			<label>
				<input type="checkbox" id="debug_sql" checked="checked" data-group="type">${gs.getMessage("SQL")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_log" checked="checked" data-group="type">${gs.getMessage("Log")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_br" checked="checked" data-group="type">${gs.getMessage("Business Rules")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_eng" checked="checked" data-group="type">${gs.getMessage("Engines")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_sec" checked="checked" data-group="type">${gs.getMessage("Security Rules")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_dt" checked="checked" data-group="type">${gs.getMessage("DateTime")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_jscc" checked="checked" data-group="type">${gs.getMessage("JS Code Coverage")}</input>
			</label>
			<label>
				<input type="checkbox" id="debug_etc" checked="checked" data-group="type">${gs.getMessage("Others")}</input>
			</label>
			<br/>
			<j2:if test="$[GlideSessionDebug.getApps().size() != 0]">
			<strong id="debug_apps_label">${gs.getMessage("Apps")}</strong>
			<j2:set var="jvar_apps" value="$[GlideSessionDebug.getApps().iterator()]" />
			<j2:while test="$[jvar_apps.hasNext()]">
				<j2:set var="jvar_app" value="$[jvar_apps.next()]"/>
				<label>
					<input type="checkbox"
						id="$[jvar_app.sysId()]"
						data-group="app"
						checked="checked">$[jvar_app.displayName()]</input>
				</label>
			</j2:while>
			</j2:if>
		</div>
		<hr/>
		<div id="debug_messages">
		<j2:forEach var="jvar_message" items="$[jvar_messages]">
			<j2:set var="jvar_message_line" value="$[jvar_message.getLine()]"/>
			<j2:set var="jvar_debug_app_class" value="$[jvar_message.getDebugClassSet()]"/>
			<j2:switch on="$[jvar_message.getType()]">
				<j2:case value="sql">
					<j2:set var="jvar_gif" value="images/icons/stats.gifx"/>
					<j2:set var="jvar_alt" value="SQL"/>
					<j2:set var="jvar_style" value="color: blue"/>
					<j2:set var="jvar_debug_class" value="debug_sql"/>
				</j2:case>
				<j2:case value="datetime">
					<j2:set var="jvar_gif" value="images/icons/stats.gifx"/>
					<j2:set var="jvar_alt" value="DateTime"/>
					<j2:set var="jvar_style" value="color: DarkGreen"/>
					<j2:set var="jvar_debug_class" value="debug_dt"/>
				</j2:case>
				<j2:case value="js_code_coverage">
					<j2:set var="jvar_gif" value="images/icons/stats.gifx"/>
					<j2:set var="jvar_alt" value="JS Code Coverage"/>
					<j2:set var="jvar_style" value="color: DarkGreen"/>
					<j2:set var="jvar_debug_class" value="debug_jscc"/>
				</j2:case>
				<j2:case value="log">
					<j2:set var="jvar_gif" value="images/nav_bult.gifx"/>
					<j2:set var="jvar_alt" value="log"/>
					<j2:set var="jvar_style" value="color: black"/>
					<j2:set var="jvar_debug_class" value="debug_log"/>
					<g2:evaluate var="jvar_message_line" jelly="true">
						var msg = jelly.jvar_message_line;
						GlideStringUtil.escapeHTML(msg);
					</g2:evaluate>
				</j2:case>
				<j2:case value="business_rule">
					<j2:set var="jvar_gif" value="images/icons/scripts.gifx"/>
					<j2:set var="jvar_alt" value="business rule"/>
					<j2:set var="jvar_style" value="color: DarkBlue"/>
					<j2:set var="jvar_debug_class" value="debug_br"/>
				</j2:case>
				<j2:case value="engines">
					<j2:set var="jvar_gif" value="images/icons/scripts.gifx"/>
					<j2:set var="jvar_alt" value="engine"/>
					<j2:set var="jvar_style" value="color: DarkBlue"/>
					<j2:set var="jvar_debug_class" value="debug_eng"/>
				</j2:case>
				<j2:case value="security_grant">
					<j2:set var="jvar_gif" value="images/workflow_approved.gifx"/>
					<j2:set var="jvar_alt" value="access granted"/>
					<j2:set var="jvar_style" value="color: DarkGreen"/>
					<j2:set var="jvar_debug_class" value="debug_sec"/>
				</j2:case>
				<j2:case value="security_refuse">
					<j2:set var="jvar_gif" value="images/icons/result_false.gifx"/>
					<j2:set var="jvar_alt" value="access denied"/>
					<j2:set var="jvar_style" value="color: DarkRed"/>
					<j2:set var="jvar_debug_class" value="debug_sec"/>
				</j2:case>
				<j2:default>
					<j2:set var="jvar_gif" value="images/changes.gifx"/>
					<j2:set var="jvar_alt" value="other (not gif, sql)"/>
					<j2:set var="jvar_style" value="color: DarkGreen"/>
					<j2:set var="jvar_debug_class" value="debug_etc"/>
				</j2:default>
			</j2:switch>
			<div class="debug_line $[jvar_debug_class] $[jvar_debug_app_class]">
				<img src="$[jvar_gif]" alt="$[jvar_alt]"/>
				<span style="$[jvar_style]"><g2:no_escape>$[jvar_message_line]</g2:no_escape></span>
			</div>
		</j2:forEach>
		</div>
		</div>
        <script>
            addAfterPageLoadedEvent(function () {
                document.body.on('click', 'img.debug_stack', function (evt, element) {
                    element.next('div').toggle();
                });

               	var typeToApps = '$[GlideSessionDebug.getTypeToAppsJSONStr()]'.evalJSON();
               	var filter = SessionDebugFilter(typeToApps);
                
                var hasOnlyGlobalApp = hasOnlyGlobalApp();
                
                // Register event handler to checkbox filters
                var boxes = $$('div#debug_filter_group input[type=checkbox]');
                boxes.each(function bindChangeEventOrHide(box) {
                	var dataGroup = $(box).readAttribute('data-group');
                	var boxID = $(box).readAttribute('id');
                    if (dataGroup == 'type') {
                    	// hide group if no log entry
                    	if (typeof typeToApps[boxID] == 'undefined') {
							Element.up(box, 'label').hide();
							return;
						}
					} else if(dataGroup == 'app') {
						// hide global if only application
						if(hasOnlyGlobalApp) {
						 	Element.up(box, 'label').hide();
						 	$('debug_apps_label').hide();
						 	return;
						 }
					}
					// if not hiding the box, then bind its change event to the filter's toggle API
                	$(box).observe('click', function (event) {
                		filter.toggleGroup(Event.element(event));
                	});
                });
                
                function hasOnlyGlobalApp() {
                	var hasApps = false;
                	for(var type in typeToApps) {
                		var apps = typeToApps[type];
                		if(apps) {
                			if(apps.length > 0) {
                				if(apps.length > 1)
                					return false;
                				if(apps[0] != 'global')
                					return false;
                				hasApps = true;
               				}
                		}
                	}
                	return hasApps;
                }
            });
        </script>
		<g2:evaluate expression="GlideSessionDebug.clearOutputMessages()" />
	</j2:if>
	<j2:if test="$[gs.isUpgradeDebuggerEnabled()]">
		<g:inline template="upgrade_debugger.xml"/>
	</j2:if>
</j:jelly>
```