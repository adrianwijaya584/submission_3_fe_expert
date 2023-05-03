import {favoriteRestaurantModel} from './contract/favoriteRestaurantContract';
import idb from '../src/scripts/data/favoriteRestaurantsIDB';

describe('favorite restaurant indexDB test implementation', ()=> {
  afterEach(async ()=> {
    (await idb.getAllRestaurants()).forEach(async (restaurant)=> {
      await idb.deleteRestaurant(restaurant.id);
    });
  });

  favoriteRestaurantModel(idb);
});
