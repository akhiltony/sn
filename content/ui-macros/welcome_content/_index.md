---
title: welcome_content.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g:evaluate>
			var welcome_content = new GlideRecord('sys_home');
			welcome_content.addQuery('language', gs.getSession().getLanguage());
			welcome_content.orderBy('order');
			welcome_content.addQuery('active', 'true');
			welcome_content.query();
			if (!welcome_content.hasNext()) {
				welcome_content.initialize();
				welcome_content.addQuery('language', 'en');
				welcome_content.orderBy('order');
				welcome_content.addQuery('active', 'true');
				welcome_content.query();
			}
	</g:evaluate>
	<j:while test="${welcome_content.next()}">
		<g:evaluate var="jvar_should_show">
			var evaluator = new GlideScopedEvaluator();
			evaluator.evaluateScript(welcome_content, "condition");
		</g:evaluate>
		<j:if test="${jvar_should_show}">
			<hr/>
			<div class="text_caption">${NS,ALLOW_JELLY:welcome_content.short_description}</div>
			<div>
				<g:no_escape>
					${NS,ALLOW_JELLY:welcome_content.text.getXHTMLValue()}
				</g:no_escape>
			</div>
		</j:if>
		<j:if test="${welcome_content.condition == ''}">
			<hr/>
			<div class="text_caption">${NS,ALLOW_JELLY:welcome_content.short_description}</div>
			<div>
				<g:no_escape>
					${NS,ALLOW_JELLY:welcome_content.text.getXHTMLValue()}
				</g:no_escape>
			</div>
		</j:if>
	</j:while>
	
</j:jelly>
```