"use strict";var precacheConfig=[["/index.html","a80004f4866cc46b97f8f6e0bcbf653c"],["/static/css/main.c43ce372.css","0cbefbd2c73dec14fddb36a3402cf41a"],["/static/js/0.36c28f20.chunk.js","2b8e8549b97537c4340fd82a5c8d85f2"],["/static/js/1.f0fbe37a.chunk.js","4c556baba261086fd6de14a4f6fc82a8"],["/static/js/2.4e4bdc50.chunk.js","25a88281a0b118e1a6976daf57103229"],["/static/js/3.fe63a0d7.chunk.js","dfb62a825267ba1998ed0414a1bca751"],["/static/js/4.40845f69.chunk.js","c6662ea903b33f52ff9a98041aaa69ff"],["/static/js/5.7d3c343f.chunk.js","1449aae72fb185804ef25900931288e0"],["/static/js/6.90d5a758.chunk.js","aae0ea07df9a905a7857b30e2f22de6b"],["/static/js/main.b00b7a53.js","2eff598985c4b4b229b75ff30312e890"],["/static/media/2016.839a6a22.png","839a6a2222a2883e3029ceee5014a560"],["/static/media/2017.e5f8348b.png","e5f8348b77c584546f03a481acbf5866"],["/static/media/background.4e0ca556.jpg","4e0ca5564c432e8ee012bec2c8f180db"],["/static/media/bosch.139dd266.png","139dd2661eac50239c14effb033da795"],["/static/media/gif.03f934ed.mp4","03f934ed857d4af89d8bc560a2e69048"],["/static/media/logo_text.eeccec99.png","eeccec99e33a570bbc5c7d89dd899c45"],["/static/media/mec_logo_no_text.fae7c956.png","fae7c9560de7cc6e508577e68b6fc91f"],["/static/media/nest_logo.62648bc1.png","62648bc16ec83bebbae93018708f3f78"],["/static/media/tic-tac-toe.a2e9b7c1.png","a2e9b7c1a25043babe15db454814857c"],["/static/media/trianglebg.9a30e6c6.png","9a30e6c6c75344e5bd217bbe9720ef3e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});