import {openDB} from 'idb';
import config from '../globals/config';

const {IDB_NAME, IDB_VERSION, OBJECT_STORE_NAME}= config;

const promisedDB= openDB(IDB_NAME, IDB_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

export default {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await promisedDB).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await promisedDB).getAll(OBJECT_STORE_NAME);
  },

  async deleteRestaurant(id) {
    return (await promisedDB).delete(OBJECT_STORE_NAME, id);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await promisedDB).put(OBJECT_STORE_NAME, restaurant);
  },
};
