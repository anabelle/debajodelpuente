"use strict";$(document).ready(function(a){function o(){for(var o=u.length-1;o>=0;o--)a("#reticula .row").append('<div class="col-xs-12 col-sm-6 col-md-3 proyecto"><div class="efecto"><img src="'+u[o].img+'"><div class="overlay"><a class="verproyecto" href="'+u[o].link+'" target="_blank">ver proyecto</a></div></div><a href="'+u[o].link+'"><h4>'+u[o].palabra+"</h4><p>"+u[o].desc+"</p></a></div>")}function i(){function o(){if(i>=u.length){i=0}else;var e=".palabra_"+[i];i+=1,a(e).css("background","orange"),setTimeout(function(){a(e).css("background","white")},500),setTimeout(o,3e3)}var i=0;o()}function e(o,i){var e=a("#words");e.append("<table></table>");for(var n=0;n<i;n++)e.children("table").append("<tr>");a("tr").each(function(){for(var i=0;i<o;i++)a(this).append("<td></td>")})}function n(){for(var o=0,e=0,n=0;n<u.length;n++)if(console.log(u[n].orientacion),o=u[n].palabra.length,"h"===u[n].orientacion){console.log("ubicando h"),a(".posible_h").removeClass("posible_h"),a("tr").each(function(){a(this).children("td:empty").each(function(){e=a(this).nextUntil(":not(:empty)").addBack().length,e>=o&&a(this).addClass("posible_h")})});for(var t=s(a(".posible_h")).slice(0,1),p=null,b=0;b<o;b++)null===p?(t.removeClass().text(u[n].palabra[b]).addClass("palabra_"+n).data("link",u[n].link),p=t):(p.next().removeClass().addClass("palabra_"+n).text(u[n].palabra[b]).data("link",u[n].link),p=p.next())}else if("v"===u[n].orientacion){console.log("ubicando v");for(var e=0,h=-1,g=!1,b=0;b<d;b++)e=0,h++,a("table tr > :nth-child("+(b+1)+")").each(function(i,n){c(a(n))?(g===!1&&h++,e++,g=!0,a(n).addClass("posible_v_"+h)):(e=0,g=!1),a(".posible_v_"+h).length>=o&&a(".posible_v_"+h).first().addClass("posible_v")});var m=s(a(".posible_v")).slice(0,1);a(".posible_v").removeClass();for(var p=null,b=0;b<o;b++)null===p?(m.text(u[n].palabra[b]).removeClass().addClass("palabra_"+n).data("link",u[n].link),p=m,console.log(l(p))):(l(p).removeClass().addClass("palabra_"+n).text(u[n].palabra[b]).data("link",u[n].link),p=l(p))}r(),setTimeout(i,2e3)}function t(){var a="abcdefghijklmnñopqrstuvwxyz",o=a.charAt(Math.floor(Math.random()*a.length));return o}function l(a){var o=a.index(),i=a.closest("tr").next().children().eq(o);return i}function r(){a("td:empty").each(function(){a(this).text(t())})}function c(o){return!a.trim(o.html())}function s(a){for(var o,i,e=a.length;e;)i=Math.floor(Math.random()*e--),o=a[e],a[e]=a[i],a[i]=o;return a}var d=17,p=17,u=[{palabra:"Bitácora",orientacion:"v",desc:"",link:"http://bitacora.debajodelpuente.com/",img:"../img/debajodelpuente.jpg"},{palabra:"PuentePalabra",orientacion:"v",desc:"",link:"http://palabras.debajodelpuente.com/",img:"../img/puentepalabra.jpg"},{palabra:"Rio",orientacion:"v",desc:"",link:"http://rio.debajodelpuente.com/",img:"../img/cuando-el-rio-suena.jpg"},{palabra:"Caricultura",orientacion:"v",desc:"",link:"http://caricultura.debajodelpuente.com/",img:"../img/caricultura.jpg"},{palabra:"Miau",orientacion:"v",desc:" ",link:"https://drive.google.com/file/d/0B3Kr41kFa5cyNDlZcGFPT1cyMzA/view",img:"../img/puentemiau.jpg"},{palabra:"Loglines",orientacion:"v",desc:" ",link:"http://loglines.debajodelpuente.com/",img:"../img/loglines.jpg"},{palabra:"ZapatoLab",orientacion:"h",desc:"",link:"http://zapatolab.debajodelpuente.com/",img:"../img/zapatolab.jpg"},{palabra:"Radio",orientacion:"h",desc:"",link:"http://radio.debajodelpuente.com/",img:"../img/radio.jpg"},{palabra:"Arcabius",orientacion:"h",desc:" ",link:"https://youtu.be/UCoJUwnaBWU",img:"../img/arcabius.jpg"},{palabra:"Cerdos",orientacion:"h",desc:" ",link:"https://youtu.be/3KzbUTrbl1I",img:"../img/cerdos.jpg"},{palabra:"Palomo",orientacion:"h",desc:" ",link:"https://youtu.be/4hDHDxjKXu0",img:"../img/palomo.jpg"}];e(d,p),n(),o(),a("[class^='palabra_']").css({cursor:"pointer",transition:"all 0.5s ease-in-out"}),a("[class^='palabra_']").hover(function(){var o=a(this).attr("class").split("_")[1];a(".palabra_"+o).css({background:"green",color:"white"})},function(){var o=a(this).attr("class").split("_")[1];a(".palabra_"+o).css({background:"white",color:"black"})}),a("[class^='palabra_']").on("click",function(o){window.open(a(this).data("link"),"_blank")}),a(".vista_s").on("click",function(){a("#sopa").fadeOut("fast"),a("#reticula").fadeIn("slow")}),a(".vista_r").on("click",function(){a("#reticula").fadeOut("fast"),a("#sopa").slideDown()}),a("div.info2").click(function(){a("#informacion").slideToggle("slow,")}),a("div.info").click(function(){a("#informacion").slideToggle("slow,")}),a(".iconm").on("click",function(){a(".iconn").removeClass("fondoi"),a(this).addClass("fondoi")}),a(".iconn").on("click",function(){a(".iconm").removeClass("fondoi"),a(this).addClass("fondoi")})});