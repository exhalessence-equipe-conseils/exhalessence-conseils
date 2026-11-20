// Service worker minimal : l'app se charge toujours depuis le réseau (rien de sensible n'est gardé en cache)
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){});
