import {favoriteRestaurantModel} from './contract/favoriteRestaurantContract';
import db from '../src/scripts/data/favoriteRestaurantsIDB';

// describe('implementasi kontrak test Index DB restoran favorit', ()=> {
describe(`indexDB favorite restaurant test implementation`, ()=> {
  afterEach(async ()=> {
    (await db.getAllRestaurants()).forEach(async (restaurant)=> {
      await db.deleteRestaurant(restaurant.id);
    });
  });

  favoriteRestaurantModel(db);
});
