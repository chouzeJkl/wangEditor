(function(s,Q){var D,v,E;function n(){return N+O++}function F(){B||(B=w.find("a[commandName]"));B.each(function(){var b=a(this),d=a.trim(b.attr("commandName")).toLowerCase();"insertunorderedlist"!==d&&"insertorderedlist"!==d&&(l.queryCommandState(d)?b.addClass("wangEditor-btn-container-btn-selected"):b.removeClass("wangEditor-btn-container-btn-selected"))})}function G(){var b,d,c,m=k[0];H?(b=l.getSelection(),b.getRangeAt&&b.rangeCount&&(d=l.getSelection().getRangeAt(0),c=d.commonAncestorContainer)):
(d=l.selection.createRange(),c=d.parentElement());if(c&&(a.contains(m,c)||m===c))return p=c,d}function P(){var b=k.html();g=[];g.push(b);h=0}function I(){var b=g.length,a=k.html();0<b&&a===g[h]||(g.push(a),20<=b&&g.shift(),b=g.length,h=b-1)}function K(b){return b.parent().is('div[contenteditable="true"]')?b:"body"===b[0].nodeName.toLowerCase()?k.children().last():b.is('div[contenteditable="true"]')?b.children().last():K(b.parent())}function L(b){b=a.trim(b.toLowerCase());return 0===b.indexOf("javascript:")?
!1:!0}function u(b,a,c,m){if(r){var e;if(r){var f;H?(f=l.getSelection(),f.removeAllRanges(),f.addRange(r)):(f=l.selection.createRange(),f.setEndPoint("EndToEnd",r),0===r.text.length?f.collapse(!1):f.setEndPoint("StartToStart",r),f.select())}try{e=l.queryCommandEnabled(a)}catch(R){e=!1}!0===e?l.execCommand(a,!1,c):(e=M[a])&&e(a,c);r=G();m&&m.call(k);F();J.find(".wangEditor-modal:visible").hide();x.is(":visible")&&x.hide();I()}b&&b.preventDefault()}if(s.jQuery){var l=s.document,a=s.jQuery,H="function"===
typeof l.createRange,r,p,y,C,k=a('<div class="wangEditor-textarea" ></div>'),w=a('<div class="wangEditor-btn-container"></div>'),x=a('<div class="wangEditor-mask"></div>'),J=a("<div></div>"),B,M,g=[],h=-1,N="wangeditor_"+Math.random().toString().replace(".","")+"_",O=1;s.wangEditor_getUniqeId||(s.wangEditor_getUniqeId=n);D="\u5b8b\u4f53;\u9ed1\u4f53;\u6977\u4f53;\u96b6\u4e66;\u5e7c\u5706;\u5fae\u8f6f\u96c5\u9ed1;Arial;Verdana;Georgia;Times New Roman;Trebuchet MS;Courier New;Impact;Comic Sans MS".split(";");
v={"#880000":"\u6697\u7ea2\u8272","#800080":"\u7d2b\u8272","#ff0000":"\u7ea2\u8272","#ff00ff":"\u9c9c\u7c89\u8272","#000080":"\u6df1\u84dd\u8272","#0000ff":"\u84dd\u8272","#00ffff":"\u6e56\u84dd\u8272","#008080":"\u84dd\u7eff\u8272","#008000":"\u7eff\u8272","#808000":"\u6a44\u6984\u8272","#00ff00":"\u6d45\u7eff\u8272","#ffcc00":"\u6a59\u9ec4\u8272","#808080":"\u7070\u8272","#c0c0c0":"\u94f6\u8272","#000000":"\u9ed1\u8272"};E={1:"10px",2:"13px",3:"16px",4:"19px",5:"22px",6:"25px",7:"28px"};C="fontFamily fontSize | bold underline italic | foreColor backgroundColor removeFormat | unOrderedList orderedList | justifyLeft justifyCenter justifyRight | createLink unLink | insertHr insertTable webImage | undo redo".split(" ");
y={fontFamily:{title:"\u5b57\u4f53",type:"dropMenu",txt:"fa fa-font",command:"fontName ",dropMenu:function(){var b=[];a.each(D,function(a,c){b.push('<li><a href="#" commandValue="${value}" style="font-family:${family};">${txt}</a></li>'.replace("${value}",c).replace("${family}",c).replace("${txt}",c))});return a("<ul>"+b.join("")+"</ul>")}()},fontSize:{title:"\u5b57\u53f7",type:"dropMenu",txt:"fa fa-text-height",command:"fontSize",dropMenu:function(){var b=[];a.each(E,function(a,c){b.push('<li><a href="#" commandValue="${value}" style="font-size:${fontsize};">${txt}</a></li>'.replace("${value}",
a).replace("${fontsize}",c).replace("${txt}",c))});return a("<ul>"+b.join("")+"</ul>")}()},bold:{title:"\u52a0\u7c97",type:"btn",hotKey:"ctrl + b",txt:"fa fa-bold",command:"bold",callback:function(){}},underline:{title:"\u4e0b\u5212\u7ebf",type:"btn",hotKey:"ctrl + u",txt:"fa fa-underline",command:"underline "},italic:{title:"\u659c\u4f53",type:"btn",hotKey:"ctrl + i",txt:"fa fa-italic",command:"italic "},foreColor:{title:"\u524d\u666f\u8272",type:"dropMenu",txt:"fa fa-pencil|color:#4a7db1",command:"foreColor ",
dropMenu:function(){var b=[];a.each(v,function(a,c){b.push('<li><a href="#" commandValue="${value}" style="color:${color};">${txt}</a></li>'.replace("${value}",a).replace("${color}",a).replace("${txt}",c))});return a("<ul>"+b.join("")+"</ul>")}()},backgroundColor:{title:"\u80cc\u666f\u8272",type:"dropMenu",txt:"fa fa-paint-brush|color:Red",command:"backColor ",dropMenu:function(){var b=[];a.each(v,function(a,c){b.push('<li><a href="#" commandValue="${value}" style="background-color:${color};color:#ffffff;">${txt}</a></li>'.replace("${value}",
a).replace("${color}",a).replace("${txt}",c))});return a("<ul>"+b.join("")+"</ul>")}()},removeFormat:{title:"\u6e05\u9664\u683c\u5f0f",type:"btn",txt:"fa fa-eraser",command:"RemoveFormat "},unOrderedList:{title:"\u65e0\u5e8f\u5217\u8868",type:"btn",txt:"fa fa-list-ul",command:"InsertUnorderedList "},orderedList:{title:"\u6709\u5e8f\u5217\u8868",type:"btn",txt:"fa fa-list-ol",command:"InsertOrderedList "},justifyLeft:{title:"\u5de6\u5bf9\u9f50",type:"btn",txt:"fa fa-align-left",command:"JustifyLeft "},
justifyCenter:{title:"\u5c45\u4e2d",type:"btn",txt:"fa fa-align-center",command:"JustifyCenter"},justifyRight:{title:"\u53f3\u5bf9\u9f50",type:"btn",txt:"fa fa-align-right",command:"JustifyRight "},createLink:{title:"\u63d2\u5165\u94fe\u63a5",type:"modal-small",txt:"fa fa-link",modal:function(){var b=n(),d=n(),c=n(),m=n();$modal=a('<div>   \u94fe\u63a5\uff1a<input id="'+b+'" type="text" style="width:300px;"/><br />   \u6807\u9898\uff1a<input id="'+d+'" type="text" style="width:300px;"/><br />   \u65b0\u7a97\u53e3\uff1a<input id="'+
c+'" type="checkbox" checked="checked"/><br />   <button id="'+m+'" type="button" class="wangEditor-modal-btn">\u63d2\u5165\u94fe\u63a5</button></div>');callback=function(){$modal.find("input").val("")};$modal.find("#"+m).click(function(e){var f=a.trim($modal.find("#"+b).val()),m=a.trim($modal.find("#"+d).val()),k=$modal.find("#"+c).is(":checked");f||(f=a.trim(l.getElementById(b).value),m=a.trim(l.getElementById(d).value));""!==f&&(!1===L(f)?alert("\u60a8\u7684\u8f93\u5165\u5185\u5bb9\u6709\u4e0d\u5b89\u5168\u5b57\u7b26\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01"):
""!==m||k?u(e,"customCreateLink",{url:f,title:m,isBlank:k},callback):u(e,"createLink",f,callback))});return $modal}()},unLink:{title:"\u53d6\u6d88\u94fe\u63a5",type:"btn",txt:"fa fa-unlink",command:"unLink "},insertHr:{title:"\u63d2\u5165\u6a2a\u7ebf",type:"btn",txt:"fa fa-minus",command:"InsertHorizontalRule "},insertTable:{title:"\u63d2\u5165\u8868\u683c",type:"modal-small",txt:"fa fa-table",modal:function(){var b=n(),d=n(),c=n(),m=n(),e=a('<div>   \u884c\u6570\uff1a<input id="'+b+'" type="text" style="width:30px;"/>   \u5217\u6570\uff1a<input id="'+
d+'" type="text"  style="width:30px;"/>   \u663e\u793a\u6807\u9898\u884c\uff1a<input id="'+c+'" type="checkbox" checked="checked"/>   &nbsp;&nbsp;&nbsp;&nbsp;   <button id="'+m+'" class="wangEditor-modal-btn">\u63d2\u5165\u8868\u683c</button>',"</div>"),f=function(){e.find("input").val("")};e.find("#"+m).click(function(a){var m=e.find("#"+b).val(),m=""===m||isNaN(+m)?3:m,k=e.find("#"+d).val(),k=""===k||isNaN(+k)?5:k,l=e.find("#"+c).is(":checked"),n,h;n="";var p=[],g=[];for(n=0;n<m;n++){g=[];for(h=
0;h<k;h++)g.push('<td style="width:100px;">&nbsp;</td>');0===n&&l?p.push('<tr style="font-weight:bold;background-color:#f1f1f1;">${content}</tr>'.replace("${content}",g.join(""))):p.push("<tr>${content}</tr>".replace("${content}",g.join("")))}n='<table border="1" bordercolor="#cccccc" cellpadding="0" cellspacing="0" style="border-collapse:collapse;" > ${content} </table>'.replace("${content}",p.join(""));u(a,"insertHTML",n,f)});return e}()},webImage:{title:"\u7f51\u7edc\u56fe\u7247",type:"modal-small",
txt:"fa fa-image",modal:function(){var b=n(),d=n(),c=n();$modal=a('<div>   \u7f51\u5740\uff1a<input id="'+b+'" type="text" style="width:300px;"/><br/>   \u6807\u9898\uff1a<input id="'+d+'" type="text" style="width:300px;"/><br/>   <button id="'+c+'" type="button" class="wangEditor-modal-btn">\u63d2\u5165\u56fe\u7247</button></div>');callback=function(){$modal.find("input").val("")};$modal.find("#"+c).click(function(c){var e=a.trim($modal.find("#"+b).val()),f=a.trim($modal.find("#"+d).val());e||(e=
a.trim(l.getElementById(b).value),f=a.trim(l.getElementById(f).value));""!==e&&(!1===L(e)?alert("\u60a8\u7684\u8f93\u5165\u5185\u5bb9\u6709\u4e0d\u5b89\u5168\u5b57\u7b26\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01"):""===f?u(c,"insertImage",e,callback):u(c,"customeInsertImage",{url:e,title:f},callback))});return $modal}()},undo:{title:"\u64a4\u9500",type:"btn",hotKey:"ctrl+z",txt:"fa fa-undo",command:function(a){0<h&&(h-=1,k.html(g[h]));a.preventDefault()}},redo:{title:"\u91cd\u590d",type:"btn",txt:"fa fa-repeat",
command:function(a){h<g.length-1&&(h+=1,k.html(g[h]));a.preventDefault()}}};M={insertHTML:function(b,d){var c;r&&(c=K(a(p)),0===c.next().length&&(d+="<p>&nbsp;</p>"),c.after(a(d)))},customCreateLink:function(b,d){for(var c=d.url,k=d.title,e,f=n(),g;1!==p.nodeType;)p=p.parentNode;e=a(p);g=e.find("a");0<g.length&&g.attr(f,"1");l.execCommand("createLink",!1,c);c=e.find("a").not("["+f+"]");c.attr("title",k);c.attr("target","_blank");0<g.length&&g.removeAttr(f)},customeInsertImage:function(b,d){for(var c=
d.url,k=d.title,e,f=n(),g;1!==p.nodeType;)p=p.parentNode;e=a(p);g=e.find("img");0<g.length&&g.attr(f,"1");l.execCommand("insertImage",!1,c);c=e.find("img").not("["+f+"]");c.attr("title",k);c.attr("alt",k);0<g.length&&g.removeAttr(f)},delete$elem:function(a,d){d.remove()}};s.wangeditor_commonCommand||(s.wangeditor_commonCommand=u);Array.prototype.indexOf||(Array.prototype.indexOf=function(a){for(var d=0,c=this.length;d<c;d++)if(this[d]===a)return d;return-1},Array.prototype.lastIndexOf=function(a){for(var d=
this.length,d=d-1;0<=d;d--)if(this[d]===a)return d;return-1});a.fn.wangEditor=function(b){function d(b){if("|"===b.toString())return a('<div class="wangEditor-btn-container-split"></div>');var c=b.type,d=b.txt,e=b.title,f=b.command,g=b.hotKey,h=[],n,m=b.dropMenu,l=b.modal,p=b.callback,q=a('<a class="wangEditor-btn-container-btn wangEditor-btn-container-btn-default" href="#"></a>');"string"===typeof f&&(f=a.trim(f));-1!==d.indexOf("|")?(b=d.split("|"),d='<i class="'+b[0]+'" style="'+b[1]+'"></i>'):
d='<i class="'+d+'"></i>';q.html(d);e&&q.attr("title",e);if("btn"===c){if("string"===typeof f&&q.attr("commandName",f),"string"===typeof f&&q.click(function(a){u(a,f,void 0,p)}),"function"===typeof f&&q.click(function(a){f(a)}),g){var r=function(b){var c=!0;a.each(["ctrl","shift","alt","meta"],function(a,d){-1===h.indexOf(d)||b[d+"Key"]?-1===h.indexOf(d)&&b[d+"Key"]&&(c=!1):c=!1});return c},g=g.toLowerCase();n=a.trim(g.split("+")[1]);h=g.split("+")[0].split(",");a.each(h,function(b,c){h[b]=a.trim(c)});
k.on("keydown",function(a){!1!==r(a)&&String.fromCharCode(a.keyCode).toLowerCase()===n&&(a.preventDefault(),q.click())})}}else if("dropMenu"===c){var s=function(){m.hide()};q.addClass("wangEditor-btn-container-btn-drop");q.append(a('<i class="fa fa-angle-down"></i>'));m.attr("class","wangEditor-drop-menu");B.append(m);q.click(function(a){var b=q.offset().top,c=q.offset().left,d=q.height();m.css({top:b+d+5+"px",left:c+"px"});m.show();a.preventDefault();this.focus()}).blur(function(a){setTimeout(s,
100)});m.on("click","a[commandValue]",function(b){var c=a(this).attr("commandValue");u(b,f,c)});m.hide()}else 0===c.indexOf("modal")&&("modal"===c&&(c=""),l.attr("class","wangEditor-modal wangEditor-"+c),l.prepend(a('<div class="wangEditor-modal-header"><a href="#" commandName="close" class="wangEditor-modal-header-close"><i class="fa fa-close"></i></a><b>'+e+'</b><div class="wangEditor-clear-both"></div><div class="wangEditor-modal-header-line"></div></div>')),J.append(l),q.click(function(a){var b=
E.width(),c=E.height(),d=l.width(),e=w.offset().top,f=w.height();x.width(b);x.height(c);l.css({top:e+f+"px",left:(b-d)/2+"px"});x.show();l.show();a.preventDefault()}),l.find("[commandName=close]").click(function(a){x.hide();l.hide();a.preventDefault()}));if(e){var t=function(){z.show()};q.attr("title","");g&&(e=e+"("+g+")");var v,y,A,z=a('<div class="wangEditor-toolTip"></div>'),c=a('<div class="wangEditor-toolTip-content">'+e+"</div>"),e=a('<div class="wangEditor-toolTip-footer"><i class="fa fa-caret-down"></i></div>'),
C,F,G,H,I;z.append(c).append(e);D.append(z);q.mouseenter(function(){v=q.offset().top;y=q.offset().left;A=q.width();C=z.height();F=z.width();G=v-C+5;H=y-(F-A)/2+3;z.css({top:G+"px",left:H+"px"});I=setTimeout(t,200)}).mouseleave(function(){clearTimeout(I);z.hide()})}return q}function c(){r=G();F()}function g(){A&&(t.hide(),A=!1)}b=b||{};var e=b.customMenus,f=b.insertBefore,n=b.after,l=b.hideMenuConfig,h,p=this.height(),v=this.html(),B=a("<div></div>"),D=a("<div></div>"),E=a(s),t=a('<a href="#" class="wangEditor-tableDeleteBtn"><i class="fa fa-close"></i></a>'),
A;e&&(a.each(e,function(a){C.push(a)}),y=a.extend(y,e));b.menuConfig?h=b.menuConfig:(h=C,f&&a.each(f,function(b,c){var d=h.indexOf(a.trim(b));-1!==d&&("string"===typeof c&&(c=[c]),a.each(c,function(b,c){c=a.trim(c);if("|"!==c){var d=h.lastIndexOf(c);-1!==d&&(h[d]=null)}}),c.unshift(0),c.unshift(d),Array.prototype.splice.apply(h,c))}),n&&a.each(n,function(b,c){var d=h.indexOf(a.trim(b));"string"===typeof c&&(c=[c]);a.each(c,function(c,b){b=a.trim(b);if("|"!==b){var d=h.lastIndexOf(a.trim(b));-1!==
d&&(h[d]=null)}});d+1===h.length?Array.prototype.push.apply(h,c):(c.unshift(0),c.unshift(d+1),Array.prototype.splice.apply(h,c))}),l&&a.each(l,function(){var b=a.trim(this),b=h.indexOf(b);-1!==b&&(h[b]=null)}));a.each(h,function(){if(null!=this){var b=a.trim(this);if(b="|"===b?"|":y[b])b=d(b),w.append(b)}});w.append(a('<div class="wangEditor-clear-both"></div>')).append(a('<div class="wangEditor-btn-container-line"></div>'));k.on("mousedown",function(){k.on("mouseleave",function(){k.off("mouseleave");
setTimeout(c,100)})}).on("click keyup",function(a){var b=!1,b=[33,34,35,36,37,38,39,40,13,8,46,9];if(b="click"===a.type||"keyup"===a.type&&-1!==b.indexOf(a.keyCode)||a.ctrlKey||a.shiftKey)c(),"click"===a.type&&k.off("mouseleave")}).on("focus blur",function(){I()});A=!1;k.on("click","table,img",function(){var b=a(this),c=k.offset().top,d=b.offset().top,e=b.offset().left,f=t.width(),h=t.height();d<=c||(t.css({top:d-h/2+"px",left:e-f/2+"px"}),t.show(),A=!0,k.off("scroll"),k.on("scroll",g),t.off(),t.click(function(a){u(a,
"delete$elem",b,g)}))});k.on("keyup blur",function(){setTimeout(g,100)});this.attr("class","wangEditor");this.html("").append(t).append(D).append(x).append(B).append(J).append(w).append(k);k.html(v);p=p-w.height()-12;k.height(50<=p?p:100);P();return k.attr("contenteditable",!0).focus()}}})(window);