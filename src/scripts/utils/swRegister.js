import * as WorkboxWindow from 'workbox-window';
import {precacheAndRoute} from 'workbox-precaching';


export default async ()=> {
  if (!('serviceWorker' in navigator)) {
    console.log('SW tidak didukung browser ini.');
    return;
  }

  precacheAndRoute(self.__WB_MANIFEST || []);

  const wb= new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    console.log('Gagal meregistrasi SW.', error);
  }
};
