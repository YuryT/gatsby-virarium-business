/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-96250908165f2f89db09.js"
  },
  {
    "url": "app-40ffe83359e3d6e5e207.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-2db3b02cf50e44cf384f.js"
  },
  {
    "url": "index.html",
    "revision": "22ce8265723cfe3674ecfa5976c332fd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6d943823164a1b5b98c1461d7ae8da97"
  },
  {
    "url": "1.1532e797dcbe108f25f8.css"
  },
  {
    "url": "component---src-templates-home-page-js-7bb2a8a3005dec140dde.js"
  },
  {
    "url": "1-952b8bb99e145c34e5eb.js"
  },
  {
    "url": "3-5133c93823850704d6f4.js"
  },
  {
    "url": "0-594d6fe9f9889532983e.js"
  },
  {
    "url": "static/d/310/path---index-6a9-XBXSI0atiBDLXYGtMDl6JtSV4Cs.json",
    "revision": "b6de681aa0f7d8e1992c73695c87b637"
  },
  {
    "url": "js/toggle.js"
  },
  {
    "url": "component---src-pages-404-js-6f06d91a48398eaae8ce.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "7f6889cc68c5ec109aadfa23950e4995"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9aece87ef1f23683dbdc1ae28ca266c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});