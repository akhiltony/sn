---
# Course title, summary, and position.
linktitle: "glide.live.chat_html_card_template"
summary: ""
weight: 1
# Page metadata.
title: "glide.live.chat_html_card_template"
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID name.
# - weight: Position of link in menu.
menu:
  properties:
    parent: Properties
    name: "glide.live.chat_html_card_template"
    weight: 1
---

Description: 


Value: `<style>
  .vac-header {
    border-bottom: solid 1px #c7c7c7;
    padding-bottom: 4px;
    margin-bottom: 8px;
   }
.vac-header-title {
display: inline-block;
}

.vac-header-subtitle {
float: right;
}

.vac-link {
    font: 1.6rem SourceSansProSemibold,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #6BA89E;
    text-decoration: none;
    font-weight: bold;
}

.vac-content {
padding-bottom: 4px;
    display: flex;
font-size: 12px;
}

.vac-content-label {
    width: 78px;
    text-align: left;
    flex-shrink: 0;
    font: 1.4rem SourceSansProSemibold,Helvetica Neue,Helvetica,Arial,sans-serif;
    display: inline-block;
}

.vac-content-value {
  padding-left: 8px;
    justify-self: left;
    display: inline-block;
}


</style>
<div class = "vac-card">                 
<div class = "vac-body">                     
<div class = "vac-header">                        
       <div class ="vac-header-title">{{title}} </div>                       
       <div class="vac-header-subtitle"> <a class = "vac-link" href="{{url}}">{{subtitle}}</a> </div>   
</div>                                    
     <div class = "vac-content">              
        <div class= "vac-fields">   {{fields}} </div>                     
      </div>                            
</div>        
 </div>    `