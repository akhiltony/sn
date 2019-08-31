---
title: heisenberg_output.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">

	<g:evaluate var="jvar_is_excluded" jelly="true">
		var excludes = gs.getProperty('glide.ui.heisenberg.exclude');
		var isCurrentPageExcluded = false;
		if (excludes) {
			var excludeList = excludes.split(',');
			for (var i = 0; i != excludeList.length; i++) {
				if (excludeList[i] == jelly.jvar_form_name) {
					isCurrentPageExcluded = true;
					break;
				}
			}
		}

		isCurrentPageExcluded;
	</g:evaluate>

	<j:if test="${!jvar_is_excluded}">
		<j:if test="${jvar_type == 'css'}">
			<j:set var="jvar_theme_version" value="${new GlideThemeUtil().getThemeVersion()}"/>
			<j:if test="${jvar_theme_version == 'glide.css.theme.ui16'}">
				<g2:evaluate var="jvar_theme">
					var theme = gs.getPreference('glide.css.theme.ui16');
					if (null == theme){
						var company = gs.getUser().getCompanyRecord();
					if (null != company)
						theme = company.getValue("theme");
					}
					theme;
				</g2:evaluate>
				<g2:requires name="styles/heisenberg/source_sans_pro.css" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
			</j:if>
			<j:if test="${jvar_theme_version != 'glide.css.theme.ui16'}">
				<j2:set var="jvar_theme" value="$[new GlideThemeUtil().getThemeSysId()]"/>
			</j:if>
			<j2:if test="$[jvar_isMSIE9]">
				<g2:requires name="styles/heisenberg/heisenberg_ie9_part0.css" includes="true" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
				<g2:requires name="styles/heisenberg/heisenberg_ie9_part1.css" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
				<g2:requires name="styles/heisenberg/heisenberg_ie9_part2.css" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
				<g2:requires name="styles/heisenberg/heisenberg_ie9_part3.css" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
				<g2:requires name="styles/heisenberg/heisenberg_ie9_part4.css" includes="true" params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
			</j2:if>
			<j2:if test="$[!jvar_isMSIE9]">
				<g2:requires name="styles/heisenberg/heisenberg_all.css" includes="true"
							params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
			</j2:if>

			<j:if test="${jvar_text_direction == 'rtl'}">
				<g2:requires name="styles/heisenberg/heisenberg_rtl.css"
							 params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=$[jvar_theme]" />
			</j:if>
		</j:if>
		<j:if test="${jvar_type == 'js'}">
			<g:inline template="html_page_script_includer.xml" includes_file="scripts/heisenberg/heisenberg_all.js" />
		</j:if>
	</j:if>
</j:jelly>
```