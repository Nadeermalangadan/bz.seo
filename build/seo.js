!function(){define("bz.seo/app",["angular","bz"],function(a){"use strict";return a.module("bz.seo",["bz"])}),define("bz.seo/factories/route",["bz.seo/app"],function(a){"use strict";a.factory("bz.seo.factories.route",["$resource","bzConfig",function(a,b){var c=a(b.resource("/seo/routes/"),{},{});return c}])}),define("bz.seo",["bz.seo/app","bz.seo/factories/route"],function(a){return a.config([function(){window.prerenderReady=!1}]),a.run(["$rootScope","$location","$route","bz.seo.factories.route","$rootElement",function(a,b,c,d,e){var f=e.find("head");f.length||(g=angular.element(document.createElement("title")),e.find("head").append(metaKeywords));var g=angular.element(f.find("title")[0]);metaKeywords=angular.element(f.find("meta[name=keywords]")[0]),metaDesc=angular.element(f.find("meta[name=description]")[0]),metaDesc.length||(metaDesc=angular.element(document.createElement("meta")).attr("name","description").attr("content",""),e.find("head").prepend(metaDesc)),metaKeywords.length||(metaKeywords=angular.element(document.createElement("meta")).attr("name","keywords").attr("content",""),e.find("head").prepend(metaKeywords)),g.length||(g=angular.element(document.createElement("title")),e.find("head").prepend(g));var h=null;a.$on("$routeChangeSuccess",function(){window.prerenderReady=!0;var e={url:b.path(),route:c.current.$$route.segment};angular.equals(e,h)||(h=e,d.get(e,function(b){a.$meta=b,g.html(b.title||""),metaKeywords.attr("content",b.keywords||""),metaDesc.attr("content",b.description||"")}))})}]),a})}();
//# sourceMappingURL=seo.map