---
title: login.xml
---

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
    <FORM name="loginPage" id="loginPage" action="login.do" method="post">
		<g2:inline template="output_messages.xml" />

		<!-- used in exactly one place -->
		<style>
			DIV.login {
				width: 20em;
				margin: 1em;
				padding: 1em;
				padding-top: 0;
				border: 1px solid lightgrey;
				border-radius: 4px;
			}

			DIV.login DIV {
				margin-top: 1em;
			}

			DIV.login INPUT {
				width: 100%;
			}

			DIV.login LABEL {
				font-weight: bold;
			}
		</style>

	    <j:if test="${gs.getProperty('glide.ldap.onetime.password.enabled') == 'true'}">
		   <g:include_script src="LDAPAuthClientUtils.jsdbx" />
	    </j:if>

		<div class="login">
			<h1 class="sr-only row">${gs.getMessage('Login')}</h1>
			<div>
				<label class="control-label" for="user_name">${gs.getMessage('User name')}</label>
				<input type="text" class="form-control" id="user_name" name="user_name" value="" autocomplete="off" aria-label="${jvar_session_timeout_message}"/>
			</div>
			<div>
				<label class="control-label" for="user_password">${gs.getMessage('Password')}</label>
				<input type="password" id="user_password" name="user_password" autocomplete="off"
						class="form-control"/>
				<!-- this hidden field tells the logging mechanism not to write the field's contents to the log -->
				<input type="hidden" id="ni.nolog.user_password" name="ni.nolog.user_password" value="true" />
				<!-- this hidden fields that the specified values are not to appear in the referring URL -->
				<input type="hidden" id="ni.noecho.user_name" name="ni.noecho.user_name" value="true" />
				<input type="hidden" id="ni.noecho.user_password" name="ni.noecho.user_password" value="true" />
			</div>

			<g:login_language_select />

			<div>
				<j:if test="${gs.getProperty('glide.ui.forgetme') != 'true'}">
					<span id="remembermeoption">
						<script>
							function setCheckBox(e) {
								if (e.checked)
									e.value = "true";
								else
									e.value = "false";
							}
						</script>
						<j:set var="jvar_remember_me_default" value="${gs.getProperty('glide.ui.remember.me.default', 'true');}" />
						<span class="input-group-checkbox">
							<j:if test="${jvar_remember_me_default}">
								<input type="checkbox" class="checkbox" id="remember_me" name="remember_me" checked="checked" value="true" onClick="setCheckBox(this);" />
							</j:if>
							<j:if test="${!jvar_remember_me_default}">
								<input type="checkbox" class="checkbox" id="remember_me" name="remember_me" value="false" onClick="setCheckBox(this);" />
							</j:if>
							<label class="checkbox-label" style="margin-left: 0" for="remember_me">${gs.getMessage('Remember me')}</label>
						</span>
					</span>
				</j:if>
				<!-- form submission data -->
				<input type="hidden" id="screensize" name="screensize" value="" />
				<input type="hidden" id="sys_action" name="sys_action" value="none" />

				<!-- Where to go if the login fails -->
				<j2:if test="$[!empty(jvar_login_url)]">
					<input type="hidden" name="sysparm_login_url" value="$[jvar_login_url]" />
				</j2:if>

				<!-- Where to go if the login succeeds -->
				<j2:if test="$[!empty(jvar_login_goto_url)]">
					<input type="hidden" name="sysparm_goto_url" value="$[jvar_login_goto_url]" />
				</j2:if>
			</div>
			<div class="clearfix">
				<j:if test="${gs.getProperty('glide.security.forgot_password.display.link') == 'true'}">
					<a class="pull-left btn btn-link" href="${gs.getProperty('glide.security.password_reset.uri')}" style="padding-left: 0px">${gs.getMessage('Forgot Password ?')}</a>
				</j:if>
				<button name="not_important" id="sysverb_login" class="pull-right btn btn-primary" type="submit" onclick="loginPage.sys_action.value=this.id;">${gs.getMessage('Login')}</button>
			</div>

			<div>
				<j:if test="${gs.getProperty('glide.authenticate.multisso.enabled') == 'true'}">
					<a href="login_locate_sso.do">
						${gs.getMessage('Use external login')}
					</a>
				</j:if>
			</div>
		</div>
	</FORM>

	<script language="javascript">
		(function() {
			// focus user name on page load
			gel('user_name').focus();

			if (screen) {
				var w = screen.width;
				var h = screen.height
				var d = document.getElementById("screensize");
				if (d)
					d.value = w + "x" + h;
			}
		})();
	</script>
</j:jelly>
```