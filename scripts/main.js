"use strict";$(document).ready(function(a){function t(){for(var t=h.length-1;t>=0;t--)a("#reticula .row").append('<div class="col-xs-12 col-sm-6 col-md-3 proyecto"><div class="efecto"><img src="'+h[t].img+'"><div class="overlay"><a class="verproyecto" href="'+h[t].link+'">ver proyecto</a></div></div><a href="'+h[t].link+'"><h4>'+h[t].palabra+"</h4><p>"+h[t].desc+"</p></a></div>")}function e(){function t(){if(e>=h.length){e=0}else;var l=".palabra_"+[e];e+=1,a(l).css("background","orange"),setTimeout(function(){a(l).css("background","white")},500),setTimeout(t,3e3)}var e=0;t()}function l(t,e){var l=a("#words");l.append("<table></table>");for(var o=0;o<e;o++)l.children("table").append("<tr>");a("tr").each(function(){for(var e=0;e<t;e++)a(this).append("<td></td>")})}function o(){for(var t=0,l=0,o=0;o<h.length;o++)if(console.log(h[o].orientacion),t=h[o].palabra.length,"h"===h[o].orientacion){console.log("ubicando h"),a(".posible_h").removeClass("posible_h"),a("tr").each(function(){a(this).children("td:empty").each(function(){l=a(this).nextUntil(":not(:empty)").addBack().length,l>=t&&a(this).addClass("posible_h")})});for(var i=s(a(".posible_h")).slice(0,1),p=null,u=0;u<t;u++)null===p?(i.removeClass().text(h[o].palabra[u]).addClass("palabra_"+o).data("link",h[o].link),p=i):(p.next().removeClass().addClass("palabra_"+o).text(h[o].palabra[u]).data("link",h[o].link),p=p.next())}else if("v"===h[o].orientacion){console.log("ubicando v");for(var l=0,b=-1,v=!1,u=0;u<d;u++)l=0,b++,a("table tr > :nth-child("+(u+1)+")").each(function(e,o){c(a(o))?(v===!1&&b++,l++,v=!0,a(o).addClass("posible_v_"+b)):(l=0,v=!1),a(".posible_v_"+b).length>=t&&a(".posible_v_"+b).first().addClass("posible_v")});var f=s(a(".posible_v")).slice(0,1);a(".posible_v").removeClass();for(var p=null,u=0;u<t;u++)null===p?(f.text(h[o].palabra[u]).removeClass().addClass("palabra_"+o).data("link",h[o].link),p=f,console.log(n(p))):(n(p).removeClass().addClass("palabra_"+o).text(h[o].palabra[u]).data("link",h[o].link),p=n(p))}r(),setTimeout(e,2e3)}function i(){var a="abcdefghijklmnñopqrstuvwxyz",t=a.charAt(Math.floor(Math.random()*a.length));return t}function n(a){var t=a.index(),e=a.closest("tr").next().children().eq(t);return e}function r(){a("td:empty").each(function(){a(this).text(i())})}function c(t){return!a.trim(t.html())}function s(a){for(var t,e,l=a.length;l;)e=Math.floor(Math.random()*l--),t=a[l],a[l]=a[e],a[e]=t;return a}var d=15,p=15,h=[{palabra:"Bitácora",orientacion:"v",desc:" ",link:"http://bitacora.debajodelpuente.com/",img:"http://placehold.it/280x180"},{palabra:"PuentePalabra",orientacion:"v",desc:" ",link:"http://palabras.debajodelpuente.com/",img:"http://placehold.it/280x180"},{palabra:"Rio",orientacion:"v",desc:" ",link:"http://rio.debajodelpuente.com/",img:"http://placehold.it/280x180"},{palabra:"Caricultura",orientacion:"v",desc:" ",link:"http://caricultura.debajodelpuente.com/",img:"http://placehold.it/280x180"},{palabra:"ZapatoLab",orientacion:"h",desc:" ",link:"http://zapatolab.debajodelpuente.com/",img:"http://placehold.it/280x180"},{palabra:"Loglines",orientacion:"h",desc:" ",link:"http://loglines.debajodelpuente.com/",img:"http://placehold.it/280x180"},{palabra:"Radio",orientacion:"h",desc:" ",link:"http://radio.debajodelpuente.com/",img:"http://placehold.it/280x180"}];l(d,p),o(),t(),a("[class^='palabra_']").css({cursor:"pointer",transition:"all 0.5s ease-in-out"}),a("[class^='palabra_']").hover(function(){var t=a(this).attr("class").split("_")[1];a(".palabra_"+t).css({background:"green",color:"white"})},function(){var t=a(this).attr("class").split("_")[1];a(".palabra_"+t).css({background:"white",color:"black"})}),a("[class^='palabra_']").on("click",function(t){window.open(a(this).data("link"),"_blank")}),a(".vista_s").on("click",function(){a("#letras").fadeOut("fast"),a("#reticula").fadeIn("slow")}),a(".vista_r").on("click",function(){a("#reticula").fadeOut("fast"),a("#letras").slideDown()}),a("div.info").click(function(){a(this).next("#informacion").slideToggle("slow,")})});