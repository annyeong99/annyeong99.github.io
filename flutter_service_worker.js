'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "2b23bda4c86866b6e8c75ee5e9855e78",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4d0fa083e5bfb5ec714425a5d72237a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/0c/57af2afd99c5f65000e1501595c82d25781348": "b2e11d8705f6cf5507a91c1ff88590e4",
".git/objects/12/81962d1a327d36a20ec82c9a8be100f3173d3f": "b72cd7e15f6dc8389fb897e3d8cb9638",
".git/objects/19/d0b8ca7d7f06792035d2dffe84445150c27424": "bf612ad232f193c27a2b868021010569",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/538613b235b0ed6a12837d334412f66a2380cb": "a382a372750751f5eec570abae3bceef",
".git/objects/2b/001342704dca6766f244f9ba9f9ec62530fba2": "36634eea60105648da9ee070422653a8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/36/28163aa9f4f55a40f40ddadbe0c00a3a6fea47": "1b1a46f39bee507b8ec57ce8f022b9e0",
".git/objects/39/3922f33683f6ca988ad8f2fb219619a501b252": "723aea0b8d5e0ddcc3611f0387b27fb8",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/40ad7b2a547be56e89efdd7d04a524d4c04664": "27f3c6cd37e3fd885c720add0f976b43",
".git/objects/4f/561df2f954ec239cef07911b4c69b5f4a95a2b": "9f826c6e9063a5b6765873c6f3b2098c",
".git/objects/58/8ba3c0d9d944ab3787ff0bda3c4c5c298c1ccf": "976a0dd6cc11f1e7354efd4ae92fb3f3",
".git/objects/5d/cca8d433c2391ce9a7a122f9d96ef3d9d78d20": "9f75d338963a70d38215cc6b794bb784",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/78/62780f34aca49239b9cc8ed835a96917024c84": "a835508cc3dcdeeb7d3d6c2587bcb15c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/8d/a4527e7ed2a4b069ecce2e9946ddbbe70e5ab6": "a28138e597a6edd315df930e0a935946",
".git/objects/91/6643a391092f47c14126778c9be41c6ec83620": "38e8e09f4160e38ca2602793c6d34124",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/48547cd0b053823ddf8230879247254e5bbc61": "50d61fe0ef441308bbe49f77b97a4216",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0dd085f60d8bc049e4a27c2b4facf29d042b1f": "c5e33aa7e174e01bf10bd2e0c3ba6cfd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/6ab41239b87010e796630ea314aa665f81b7fd": "d3cc921cc445d422aafb74bfaab92082",
".git/objects/b7/3aa555079b6d6f2550468290fa831b3b25ca9b": "07025bdc5bf135ef4f8c21d4afee18ca",
".git/objects/c9/eb80aaa3b77be6d4ffd504e65513ab33db9282": "7d51aa6fd6ae675410de715f0d502982",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/7244425b1f82de310948b4eeeb8fd965f98755": "193f26cf60954bb0e09a40bedb130516",
".git/objects/d3/f1dd8144e3cba3bcb749377e52e88583abfa88": "b4d4c98c70eacbf116939a2a212f80d0",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/5756f08564ba14281b05c3d8eed642e0cdfb2d": "c96da195df60336aea1666ad373dff75",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/dd30c6fe606a08b2ebc86703ed035fa2edfae5": "8c25cbe010a94aa50260790e28ed71cd",
".git/objects/ea/1f8b644821008d537e24b72b4362ea4a658eae": "a3248db4b88daa3c2776e5e789d3f097",
".git/objects/ed/1a206c3b4d1e055dffc0edb6777c1b12b7dc8d": "1055e9d91b0554240294f793598da3f5",
".git/objects/ed/50d516b144a3aad730110f2f29ddfa79a7845d": "58fba74121afeaaddb12e696c072b96e",
"assets/AssetManifest.json": "06076d7e96afaa30ff3683dbd87ab520",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/bosscha.jpg": "311fc947099fb0bf681e250de257ba7a",
"assets/images/farm-house.jpg": "443d677c6cfc03f4fe4ebac0bf92982a",
"assets/images/floating-market.png": "1675eb038a7a8da477cbb3ba9e29b287",
"assets/images/ic_launcher.png": "11b99743a2d02e21bacc5a4b24ff4629",
"assets/images/jalan-asia-afrika.jpg": "7c206662fc9e4a5f73bde1df0a37f393",
"assets/images/kawah-putih.jpg": "a2371babfc2a47b7f07cd21c70c4d7c1",
"assets/images/museum-geologi.jpg": "d9e076da05b3d7babe3314e75216b1b3",
"assets/images/ranca-upas.jpg": "18ec585026e0af3f21db6bb7aaccf2ce",
"assets/images/stone-garden.jpg": "bf0e1a55b4f99915eea3e16dd4ea6780",
"assets/images/taman-film.jpg": "3ebfcd7e2bcde41ec001756fbee465d8",
"assets/NOTICES": "5a7265e750676a5bdda02211eb5b42b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/icon-192.png": "ec5b467785085c75a90dfdd84412fcbb",
"icons/icon-512.png": "b1f0585bc5b0db4da4d198cf42087f09",
"index.html": "a66c95c4739d796de248e508372bf2b9",
"/": "a66c95c4739d796de248e508372bf2b9",
"main.dart.js": "034f00ce9cd5429c051c894acf4e1c33",
"manifest.json": "80c81b038572d7b45d195f9a2c0c4228",
"version.json": "bacd625e994c33d4902287cf08806b4d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
