import {ExpirationPlugin} from 'workbox-expiration';
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {NetworkFirst} from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST || []);

registerRoute(
    ({url})=> url.origin== 'https://restaurant-api.dicoding.dev',
    new NetworkFirst({
      cacheName: 'restaurants',
      plugins: [
        new ExpirationPlugin({
          maxAgeSeconds: 10 * 60, // 10 minutes
        }),
      ],
    }),
);
