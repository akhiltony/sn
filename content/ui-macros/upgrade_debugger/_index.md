---
title: upgrade_debugger
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g2:evaluate jelly="true">
		var result = gs.getUpgradeDebuggerResult();
	</g2:evaluate>
	<j2:set var="jvar_skipped_records" value="$[result.getSkippedArtifacts()]"/>
	<j2:set var="jvar_customized_records" value="$[result.getCustomerCustomizedArtifacts()]"/>
	<j2:set var="jvar_updated_records" value="$[result.getUpdatedArtifacts()]"/>
	<j2:set var="jvar_default_visible" value="10"/>
	
	<div id="upgrade-debug" data-default-visible="$[jvar_default_visible]">
		<h3>
			<i class="icon-vcr-right"/>
			${gs.getMessage("Skipped During Last Upgrade")}
		</h3>
		<table class="table table-hover hidden">
			<j2:if test="$[jvar_skipped_records.length > 0]">
				<thead>
					<tr>
						<th class="name">
							${gs.getMessage("Name")}
						</th>
						<th class="class">
							${gs.getMessage("Type")}
						</th>
						<th class="modified-date">
							${gs.getMessage("Last modified")}
							<i class="icon-vcr-down"/>
						</th>
					</tr>
				</thead>
				<tbody id="artifact-entry" data-number-of-artifacts="$[jvar_skipped_records.length]">
					<j2:forEach var="jvar_record" indexVar="jvar_index" items="$[jvar_skipped_records]">
						<j2:set var="jvar_record_name" value="$[jvar_record.name]"/>
						<j2:set var="jvar_record_type" value="$[jvar_record.type]"/>
						<j2:set var="jvar_record_date" value="$[jvar_record.sys_updated_on]"/>
						<j2:set var="jvar_record_url" value="$[jvar_record.url]"/>
						<g2:set_if var="jvar_hidden" test="$[jvar_index >= jvar_default_visible]" true="hidden" false="" />
						<tr class="$[jvar_hidden]">
							<td>
								<a href="$[jvar_record_url]" target="_blank">
									$[jvar_record_name]
								</a>
							</td>
							<td class="class">
								$[jvar_record_type]	
							</td>
							<td class="modified-date">
								$[jvar_record_date]
							</td>
						</tr>
					</j2:forEach>
					<j2:if test="$[jvar_skipped_records.length > jvar_default_visible]">
						<tr class="artifact-group-expander">
							<td colspan="3" data-expanded="false"
								data-show-less-label="${gs.getMessage('Show less')}"
								data-show-more-label="${gs.getMessage('Show more')}"
								data-number-of-artifacts="$[jvar_skipped_records.length]">
								${gs.getMessage("Show more")}
							</td>
						</tr>
					</j2:if>
				</tbody>
			</j2:if>
			<j2:if test="$[jvar_skipped_records.length == 0]">
				<tr class="empty-section-row">
					<td colspan="3">
						${gs.getMessage("None")}
					</td>
				</tr>
			</j2:if>
		</table>
		<h3>
			<i class="icon-vcr-right"/>
			${gs.getMessage("Customer Customized")}
		</h3>
		<table class="table table-hover hidden">
			<j2:if test="$[jvar_customized_records.length > 0]">
				<thead>
					<tr>
						<th class="name">
							${gs.getMessage("Name")}
						</th>
						<th class="class">
							${gs.getMessage("Type")}
						</th>
						<th class="modified-date">
							${gs.getMessage("Last modified")}
							<i class="icon-vcr-down"/>
						</th>
					</tr>
				</thead>
				<tbody id="artifact-entry" data-number-of-artifacts="$[jvar_customized_records.length]">
					<j2:forEach var="jvar_record" indexVar="jvar_index" items="$[jvar_customized_records]">
						<j2:set var="jvar_record_name" value="$[jvar_record.name]"/>
						<j2:set var="jvar_record_type" value="$[jvar_record.type]"/>
						<j2:set var="jvar_record_date" value="$[jvar_record.sys_updated_on]"/>
						<j2:set var="jvar_record_url" value="$[jvar_record.url]"/>
						<g2:set_if var="jvar_hidden" test="$[jvar_index >= jvar_default_visible]" true="hidden" false="" />
						<tr class="$[jvar_hidden]">
							<td>
								<a href="$[jvar_record_url]" target="_blank">
									$[jvar_record_name]
								</a>
							</td>
							<td class="class">
								$[jvar_record_type]	
							</td>
							<td class="modified-date">
								$[jvar_record_date]
							</td>
						</tr>
					</j2:forEach>
					<j2:if test="$[jvar_customized_records.length > jvar_default_visible]">
						<tr class="artifact-group-expander">
							<td colspan="3" data-expanded="false"
								data-show-less-label="${gs.getMessage('Show less')}"
								data-show-more-label="${gs.getMessage('Show more')}"
								data-number-of-artifacts="$[jvar_customized_records.length]">
								${gs.getMessage("Show more")}
							</td>
						</tr>
					</j2:if>			
				</tbody>
			</j2:if>
			<j2:if test="$[jvar_customized_records.length == 0]">
				<tr class="empty-section-row">
					<td colspan="3">
						${gs.getMessage("None")}
					</td>
				</tr>
			</j2:if>
		</table>
		<h3>
			<i class="icon-vcr-right"/>
			${gs.getMessage("ServiceNow Modified During Last Upgrade")}
		</h3>
		<table class="table table-hover hidden">
			<j2:if test="$[jvar_updated_records.length > 0]">
				<thead>
					<tr>
						<th class="name">
							${gs.getMessage("Name")}
						</th>
						<th class="class">
							${gs.getMessage("Type")}
						</th>
						<th class="modified-date">
							${gs.getMessage("Last modified")}
							<i class="icon-vcr-down"/>
						</th>
					</tr>
				</thead>
				<tbody id="artifact-entry" data-number-of-artifacts="$[jvar_updated_records.length]">
					<j2:forEach var="jvar_record" indexVar="jvar_index" items="$[jvar_updated_records]">
						<j2:set var="jvar_record_name" value="$[jvar_record.name]"/>
						<j2:set var="jvar_record_type" value="$[jvar_record.type]"/>
						<j2:set var="jvar_record_date" value="$[jvar_record.sys_updated_on]"/>
						<j2:set var="jvar_record_url" value="$[jvar_record.url]"/>
						<g2:set_if var="jvar_hidden" test="$[jvar_index >= jvar_default_visible]" true="hidden" false="" />
						<tr class="$[jvar_hidden]">
							<td>
								<a href="$[jvar_record_url]" target="_blank">
									$[jvar_record_name]
								</a>
							</td>
							<td class="class">
								$[jvar_record_type]	
							</td>
							<td class="modified-date">
								$[jvar_record_date]
							</td>
						</tr>
					</j2:forEach>
					<j2:if test="$[jvar_updated_records.length > jvar_default_visible]">
						<tr class="artifact-group-expander">
							<td colspan="3" data-expanded="false"
								data-show-less-label="${gs.getMessage('Show less')}"
								data-show-more-label="${gs.getMessage('Show more')}"
								data-number-of-artifacts="$[jvar_updated_records.length]">
								${gs.getMessage("Show more")}
							</td>
						</tr>
					</j2:if>
				</tbody>
			</j2:if>
			<j2:if test="$[jvar_updated_records.length == 0]">
				<tr class="empty-section-row">
					<td colspan="3">
						${gs.getMessage("None")}
					</td>
				</tr>
			</j2:if>
		</table>
			
		<style>
			#upgrade-debug {
				padding: 0 15px;
			}

			#upgrade-debug h3 {
				font-size: 18px;
			}

			#upgrade-debug h3 i {
				padding-right: 6px;
			}
			
			#upgrade-debug th {
				padding-right: 12px;
			}
			
			#upgrade-debug th.name {
				padding-left: 12px;
			}

			#upgrade-debug table {
				width: 100%;
				table-layout: fixed;
				word-wrap: break-word;
				border-width: 0;
			}

			#upgrade-debug td {
				padding: 12px;
			}

			#upgrade-debug i {
				font-size: 10px;
				vertical-align: 3px;
			}

			#upgrade-debug th i {
				padding-left: 6px;
			}

			#upgrade-debug td.class, #upgrade-debug th.class, #upgrade-debug td.modified-date, #upgrade-debug th.modified-date {
				text-align: right;
				width: 15%
			}
			
			#upgrade-debug tr.artifact-group-expander td, #upgrade-debug td, #upgrade-debug h3 {
				cursor: pointer;
			}

			#upgrade-debug tr.artifact-group-expander, #upgrade-debug a {
				color: #278efc;
				text-decoration: none;
			}

			#upgrade-debug tr.artifact-group-expander td:hover, #upgrade-debug h3:hover, #upgrade-debug a:hover {
				text-decoration: underline;
			}
		</style>
		<g:requires name="scripts/upgrade_debugger.js"/>
	</div>
</j:jelly>
```