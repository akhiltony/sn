---
title: client_transaction.xml
---
```xml
<?xml version="1.0" encoding="UTF-8"?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">
   <!-- 
      Send the Client Transaction times to the server via AJAX
      
      Create the following object that is passed to the page_timing_client event handlers:
      
         {
            types: [ 'SECT', 'UIOL', etc... for each type that we should send based on glide.log.client.<x> properties ],
            transaction_id: transaction_id,
            table_name: table_name,
            form_name: form_name,
            view_id: view,
      
    -->
    <!-- Don't process this if the transaction has been canceled. We don't need this anyway, but also we don't want 
    	to query the viewID which may perform inconsistently -->
	<j:if test="${!GlideTransaction.cancelled()}">
   		<j:if test="${gs.getProperty('glide.client.track_transaction_timings', true) == 'true'}">
	      var o = {};
	      o.types = {};
	      <j:if test="${gs.getProperty('glide.log.client.form.sections', true) == 'true'}">
	         o.types['SECT'] = true;
	      </j:if>
	       
	      <j:if test="${gs.getProperty('glide.log.client.related.lists', true) == 'true'}">
	         o.types['RLV2'] = true;
	      </j:if>
	      
	      <j:if test="${gs.getProperty('glide.log.client.ui.policy', true) == 'true'}">
	         o.types['UIOL'] = true;
	      </j:if>
	
	      <j:if test="${gs.getProperty('glide.log.client.script.on.load', true) == 'true'}">
	         o.types['CSOL'] = true; 
	      </j:if>
	
	      <j:if test="${gs.getProperty('glide.log.client.script.on.change', true) == 'true'}">
	         o.types['CSOC'] = true;
	      </j:if>
	
	      o.transaction_id = '$[jvar_transaction_info.getSysId()]';
	      o.table_name = '${JS:jvar_ref_table}';
	      o.form_name = '${JS:jvar_form_name}';
	      o.view_id = '${RP.getViewID()}';
	      o.logged_in = $[gs.isLoggedIn() === true];
	      o.win = window;
	      CustomEvent.fire('page_timing_client', o);
	   </j:if>
   </j:if>
</j:jelly>
```