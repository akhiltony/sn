---
# The Hugo Grayscale theme is a one page theme designed to be the front page to your site.  Its content is populated via the front-matter in content/_index.md.  The page consists of, in order:
# * a navbar at top linking to the other sections, and other arbitrary links
# * an intro section presenting a header title and into text with background image
# * an about section presenting a header and text with black background
# * a download section presenting header and text with background image
# * a contact section presenting header and text with black background
# 
# The section names show up as the links in the navbar, so you may wish to rename them if, for example, you're not using it for the purpose suggested by the default section name.
# 
# The background images are selected by filename - the intro section image must be named "intro-bg.jpg" and placed in the "static/img/" directory for your site.  Similarly, the downloads section image must be named "downloads-bg.jpg" and placed in the "static/img/" directory for your site.  See the default images in the theme's static directory for file size reference.

title: "OSAF"
date: 2018-09-09T00:00:00-00:00
copyright: "Jace Benson"
#mapsapikey: xxx

socialhandles:
    twitter: "jacebenson"
    github: "jacebenson/osaf"
    discord: "https://discordapp.com/invite/QaMwnGd"

#menu:
#    -
#        url: "https://discord.gg/QaMwnGd"
#        name: "Discord"

intro:
    header: "OSAF"
    text: "Open source activity formatter"

about:
    header: "About OSAF"
    text: '<p>Open Source Activity Formatter is a global ui macro that renders updates, 
    comments, work notes, and related records for a single record on the UI 16
    of Servicenow.  The Out of Box version has some limitation and they will not
    open this up.  This is my attempt to solve my problems with that formatter.</p>'

download:
    rename: "Install"
    header: "Install OSAF"
    text: '<p>If you just want to try it out, follow these steps;

    <div style="text-align:left;padding: 15px">
    <ol>
    <li>Download the XML from the <code>/dist/</code> folder</li>
    <li>Install the update set</li>
    <p><b>THIS ONLY adds the UI MACRO, it does not change your forms</b></p>
    </div>
    </p>'

contact:
    header: "Contact Us"
    text: '<p>Feel free to leave us a comment (via issues) on <a href="https://github.com/jacebenson/osaf/issues/new">github</a> to give some feedback about this theme!</p>'
---
