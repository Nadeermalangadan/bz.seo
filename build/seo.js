!function(){define("opengraph/module",["angular","bz","angular-route"],function(a){"use strict";return a.module("bz.seo.opengraph",["bz","ngRoute"])}),define("opengraph/services/bzOpenGraph",["opengraph/module"],function(a){"use strict";a.service("bzOpenGraph",["bzSeoMeta",function(a){var b=a.getHead(),c={tags:{},init:function(a){c.tags=a},set:function(a,d){var e=null;return angular.forEach(b.find("meta"),function(b){var c=angular.element(b);c.attr("property")=="og:"+a&&(e=c)}),e||(e=angular.element(document.createElement("meta")).attr("property","og:"+a),b.append(e)),c.tags[a]=d,e.attr("content",d),c}};return c}])}),define("opengraph/config",["opengraph/module","opengraph/services/bzOpenGraph"],function(a){"use strict";a.config([function(){}])}),define("bz.seo/app",["angular","bz","angular-route","opengraph/config"],function(a){"use strict";return a.module("bz.seo",["bz","ngRoute","bz.seo.opengraph"])}),define("bz.seo/services/bzSeoMeta",["opengraph/module"],function(a){"use strict";a.service("bzSeoMeta",["$document",function(a){var b=a.find("head");b.length||(b=angular.element(document.createElement("head")),a.append(b));var c=angular.element(b.find("title")[0]),d=null,e=null,f=null,g=null,h={tags:{},getHead:function(){return b},init:function(){angular.forEach(b.find("meta"),function(a){var b=angular.element(a);"fragment"==b.attr("name")&&(e=b),"keywords"==b.attr("name")&&(f=b),"description"==b.attr("name")&&(g=b)}),angular.forEach(b.find("link"),function(a){var b=angular.element(a);"image_src"==b.attr("rel")&&(d=b)}),d||(d=angular.element(document.createElement("link")).attr("rel","image_src").attr("href",""),b.append(d)),e||(e=angular.element(document.createElement("meta")).attr("name","fragment").attr("content","!"),b.append(e)),g||(g=angular.element(document.createElement("meta")).attr("name","description").attr("content",""),b.append(g)),f||(f=angular.element(document.createElement("meta")).attr("name","keywords").attr("content",""),b.append(f)),c.length||(c=angular.element(document.createElement("title")),b.append(c))},title:function(a){return c.html(a),h.tags.title=a,h},keywords:function(a){return f.attr("content",a),h.tags.keywords=a,h},description:function(a){return g.attr("content",a),h.tags.description=a,h},image_src:function(a){return d.attr("href",a),h.tags.image_src=a,h}};return h}])}),define("bz.seo/factories/route",["bz.seo/app"],function(a){"use strict";a.factory("bz.seo.factories.route",["$resource","bzConfig",function(a,b){var c=a(b.resource("/seo/routes/"),{},{});return c}])}),define("bz.seo",["bz.seo/app","bz.seo/services/bzSeoMeta","bz.seo/factories/route"],function(a){return a.config([function(){window.prerenderReady=!1}]),a.run(["$rootScope","$location","$route","bz.seo.factories.route","bzSeoMeta","$log",function(a,b,c,d,e,f){e.init();var g=null;a.$on("$routeChangeSuccess",function(){var h={url:b.path(),route:c.current.$$route.segment};angular.equals(h,g)?window.prerenderReady=!0:(g=h,d.get(h,function(b){window.prerenderReady=!0,f.debug("bz.seo: Changes meta information",b),a.$meta=b,e.title(b.title||""),e.keywords(b.keywords||""),e.description(b.description||"")}))})}]),a})}();
//# sourceMappingURL=seo.map