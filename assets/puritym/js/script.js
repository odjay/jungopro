!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.ws">Mobirise Website Builder</a> v4.12.3';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(a){a.extend(a.easing,{easeInOutCubic:function(a,c,d,l,f){return 1>(c/=f/2)?l/2*c*c*c+d:l/2*((c-=2)*c*c+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};(function(a,c){var d=function(a,c,e){var d;return function(){var b=this,g=arguments;d?clearTimeout(d):e&&a.apply(b,g);d=setTimeout(function(){e||a.apply(b,g);d=null},c||100)}};jQuery.fn[c]=function(a){return a?this.bind("resize",d(a)):this.trigger(c)}})(jQuery,"smartresize");a.isMobile=function(e){var c=[],d={blackberry:"BlackBerry",
android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};e="undefined"==a.type(e)?"*":e.toLowerCase();"*"==e?c=a.map(d,function(a){return a}):e in d&&c.push(d[e]);return!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),"i")))};var p=function(){var e=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),c=e[0],d=parseInt(window.innerHeight/2,10),c=parseInt((window.getComputedStyle?getComputedStyle(c,null):c.currentStyle).height,
10);e.remove();return c==d}();a(function(){function e(){a(this).css("height",9*a(this).parent().width()/16)}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a(document).on("add.cards change.cards",function(b){a(b.target).outerFind(".mbr-hamburger:not(.mbr-added)").each(function(){a(this).addClass("mbr-added").click(function(){a(this).toggleClass("mbr-hamburger--open").parents(".mbr-navbar").toggleClass("mbr-navbar--open").removeClass("mbr-navbar--short")}).parents(".mbr-navbar").find("a:not(.mbr-hamburger)").click(function(){a(".mbr-hamburger--open").click()})})});
a(window).smartresize(function(){991<a(window).width()&&a(".mbr-navbar--auto-collapse .mbr-hamburger--open").click()}).keydown(function(b){27==b.which&&a(".mbr-hamburger--open").click()});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,g){var k=[b,b];k[g>b?0:1]=g;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,k)&&(b=k[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):p||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",
a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(e)});a(document).on("add.cards change.cards",function(b){var g=a(b.target).outerFind(".mbr-section--16by9");g.length?g.attr("data-16by9","true").each(e):a(b.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&
(a(document).on("destroy.parallax",function(b){a(b.target).outerFind(".mbr-parallax-background").jarallax("destroy").css("position","")}),a(document).on("add.cards change.cards",function(b){a(b.target).outerFind(".mbr-parallax-background").jarallax({speed:.8}).css("position","relative")}));if($.fn.jarallax&&!$.isMobile())$(window).on("update.parallax",function(a){setTimeout(function(){var a=$(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");a.jarallax("onScroll")},
0)});if(a.fn.socialLikes)a(document).on("add.cards",function(b){a(b.target).outerFind(".mbr-social-likes:not(.mbr-added)").on("counter.social-likes",function(b,k,c){999<c&&a(".social-likes__counter",b.target).html(Math.floor(c/1E3)+"k")}).socialLikes({initHtml:!1})});var c,d,l=0,f=null,m=!a.isMobile();a(window).scroll(function(){d&&clearTimeout(d);var b=a(window).scrollTop(),c=b<=l||m;l=b;if(f){var k=b>f.breakPoint;c?k!=f.fixed&&(m?(f.fixed=k,a(f.elm).toggleClass("is-fixed")):d=setTimeout(function(){f.fixed=
k;a(f.elm).toggleClass("is-fixed")},40)):(f.fixed=!1,a(f.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){c&&clearTimeout(c);c=setTimeout(function(){f&&(f.fixed=!1,a(f.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){f={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});var n=function(){var b=a(this),c=[],k=function(a){return new google.maps.LatLng(a[0],a[1])},d=a.extend({zoom:14,type:"ROADMAP",
center:null,markerIcon:null,showInfo:!0},eval("("+(b.data("google-map-params")||"{}")+")"));b.find(".mbr-google-map__marker").each(function(){var b=a(this).data("coordinates");b&&c.push({coord:b.split(/\s*,\s*/),icon:a(this).data("icon")||d.markerIcon,content:a(this).html(),template:a(this).html("{{content}}").removeAttr("data-coordinates data-icon")[0].outerHTML})}).end().html("").addClass("mbr-google-map--loaded");if(c.length){var h=this.Map=new google.maps.Map(this,{scrollwheel:!1,draggable:!a.isMobile(),
zoom:d.zoom,mapTypeId:google.maps.MapTypeId[d.type],center:k(d.center||c[0].coord)});a(window).smartresize(function(){var a=h.getCenter();google.maps.event.trigger(h,"resize");h.setCenter(a)});h.Geocoder=new google.maps.Geocoder;h.Markers=[];a.each(c,function(a,b){var c=new google.maps.Marker({map:h,position:k(b.coord),icon:b.icon,animation:google.maps.Animation.DROP}),g=c.InfoWindow=new google.maps.InfoWindow;g._setContent=g.setContent;g.setContent=function(a){return this._setContent(a?b.template.replace("{{content}}",
a):"")};g.setContent(b.content);google.maps.event.addListener(c,"click",function(){g.anchor&&g.anchor.visible?g.close():g.getContent()&&g.open(h,c)});b.content&&d.showInfo&&google.maps.event.addListenerOnce(c,"animation_changed",function(){setTimeout(function(){g.open(h,c)},350)});h.Markers.push(c)})}};a(document).on("add.cards",function(b){window.google&&google.maps&&a(b.target).outerFind(".mbr-google-map").each(function(){n.call(this)})});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*
parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});a(document).on("add.cards",function(b){a(b.target).outerFind("[data-bg-video]").each(function(){for(var b,c=a(this).data("bg-video"),d=[/\?v=([^&]+)/,/(?:embed|\.be)\/([-a-z0-9_]+)/i,/^([-a-z0-9_]+)$/i],h=0;h<d.length;h++)if(b=d[h].exec(c)){var c="http"+("https:"==location.protocol?
"s":"")+":",c=c+("//img.youtube.com/vi/"+b[1]+"/maxresdefault.jpg"),e=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});a(".container:eq(0)",this).before(e);a("<img>").on("load",function(){if(120==(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg")}}else e.css("background-image",
'url("'+this.src+'")').show()}).attr("src",c);a.fn.YTPlayer&&!a.isMobile()&&(c=eval("("+(a(this).data("bg-video-params")||"{}")+")"),a(".container:eq(0)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer(a.extend({videoURL:b[1],containment:"self",showControls:!1,mute:!0},c)));break}})});a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();a("html").hasClass("is-builder")||a(document).click(function(b){try{var c=
b.target;do if(c.hash){var d=/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(".mbr-navbar--sticky").length?64:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(c=c.parentNode)}catch(e){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(f&&h){var a=f/h;c.addClass({position:"absolute",
top:0,left:0,right:0,bottom:0});var b=e.height()/e.width();b>a&&(a=100*(b-a)/a,d.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),e=c.parent(),h=d[0].width,f=d[0].height;d.one("load",function(){h=d[0].width;f=d[0].height;b()});a(window).on("resize",b);b()})});a(document).on("change",'input[type="range"]',function(e){a(e.target).parents(".form-group").find(".value")[0].innerHTML=e.target.value})})(jQuery);