'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b5180426b40c6bfea8fa7379f0a7d6c5",
"/": "b5180426b40c6bfea8fa7379f0a7d6c5",
"main.dart.js": "5f84e74f2fde2b74eb09373e9c3734f5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "980b53c8fa8c436c7075526358dd9106",
"assets/LICENSE": "59844a026d05c04ff832a90250bb1baa",
"assets/images/github.png": "17a6652f345bc5ea2db2d4fba0c95a84",
"assets/images/medium.png": "bd516690c99267a778885736015befe8",
"assets/images/ig.png": "097b77494452f9352630bcf79697db4d",
"assets/images/profile_pic.jpg": "b80447d09ccf9d1109a7ca7c942bfb0d",
"assets/images/twitter.png": "b77a663b538f89e259f64bfc64dfc041",
"assets/images/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/AssetManifest.json": "c1233ed122d1642d33051546b9b120e2",
"assets/FontManifest.json": "c5acef57808810f19bde979b14a21738",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/fonts/Abel-Regular.ttf": "afc1550a0b170efd8f270a8316c85da7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
