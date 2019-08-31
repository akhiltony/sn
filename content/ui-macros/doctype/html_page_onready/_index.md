---
title: html_page_onready.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:j2="null">
	  
  <script type="text/javascript">
    g_swLoadTime = new StopWatch(g_loadTime);

    if (window.CustomEvent){
        CustomEvent.fireAll("ck_updated", "$[gs.getSessionToken()]");
	    CustomEvent.fireTop("navigation.complete", window);
	}

    addLoadEvent( function() {

		if (isValidTouchDevice())
			addTouchScrollClassToBody();

      if (typeof g_ck != 'undefined') {
        CustomEvent.observe("ck_updated", function(ck) { g_ck = ck; });
        CustomEvent.fireAll("ck_updated", "$[gs.getSessionToken()]");
        
        <j2:if test="$[jvar_session.isLoggedIn()]">
        
            <!-- notify top window about the impersonation, navpage contains the listener 
                 so it can refresh the whole interface if needed, we have to put it here as 
                 it needs be after CSRF token updated otherwise the validation fails.
            -->
            CustomEvent.fireTop('user.impersonation', '$[JS:jvar_session.getImpersonatingUserName()]');
            
            <!--  The main frame is reloaded. Check if the domain picker is still consistent -->
            <j2:if test="${pm.isActive('com.glide.domain')}">
           		CustomEvent.fireTop('record.domain', { domain: '$[JS:jvar_session.getCurrentDomain()]', domainId: '$[JS:jvar_session.getCurrentDomainID()]', domainName: '$[JS:jvar_session.getCurrentDomainName()]' });
            </j2:if>
        </j2:if>
      }
      
      <j2:if test="$[sysparm_base_form != 'navpage']">
        <j2:if test="$[RP.refreshNav(sysparm_base_form)]" >         
        if (top.gsftReloadNav)
          top.gsftReloadNav();
        </j2:if>
      </j2:if>
          
      <j2:if test="$[sysparm_base_form != '']">
        <j:if test="${gs.getProperty('glide.product.help_url') == ''}" >
          <j2:if test="$[sysparm_base_form != 'navigator']">          
            try {
              var helpico = getTopWindow().document.getElementById("help_ico");

              if (helpico) {
                var urlname=window.location.pathname.split("?");
                var search_str = window.location.search;
                
                // if this is a form, extract the record's sys_id...
                var sys_id_loc = search_str.search(/sys_id=[0-9a-f]{32}/i);
                var sys_id_str = (sys_id_loc != -1) ? search_str.substr(sys_id_loc, 39) : null;
                
                // make the URL to our context help processor...
                var url_search = "?sysparm_url=" + urlname[0];
                if (sys_id_loc != -1)
                   url_search += "$[AMP]" + sys_id_str;

               	helpico.href="context_help.do" + url_search;                	
              }
            } catch (exception) {}
          </j2:if>
        </j:if>
      </j2:if>

	  <j2:if test="$[jvar_isMSIE9]">
		  $j(window).on('resize', function(){
		  	if ($j(document.body).width() > 549){
		  		$j(document.body).addClass('not-xs');
		  	}else{
		  		$j(document.body).removeClass('not-xs');
		  	}
		  });
	  </j2:if>

      synchCache();
      pageLoaded();
    });
    
    function synchCache() {
      try {
        var w = getTopWindow();
        if (w.g_cache_message)
          w.g_cache_message.stamp("$[GlideCacheManager.getFlushStamp('syscache_message')]");
  
        if (w.g_cache_td)
          w.g_cache_td.stamp("$[GlideCacheManager.getFlushStamp('syscache_tabledescriptor')]");
      } catch(e) {}
    }

    function isValidTouchDevice() {
		var navigator = window.navigator || {};
		var devices;
		try {
			devices = '${gs.getProperty('glide.ui.touch_scroll_platforms', 'iPad,Android')}'.split(',');
		} catch(ex) {
			devices = [];
		}
		return devices.some(function(item) {return item.trim() === navigator.platform;});
	}

	function addTouchScrollClassToBody() {
		if ('ontouchstart' in window ||
				(navigator.maxTouchPoints !== 'undefined' $[AND] navigator.maxTouchPoints > 0) ||
				(navigator.msMaxTouchPoints !== 'undefined' $[AND] navigator.msMaxTouchPoints > 0)) {
			if (typeof document.body != undefined) {
				document.body.classList.add('touch_scroll');
			}
		}
	}
  </script>
	  
</j:jelly>
```