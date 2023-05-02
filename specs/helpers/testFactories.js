import favoriteButtonPresenter
  from '../../src/scripts/utils/favoriteButtonPresenter';
import db from '../../src/scripts/data/favoriteRestaurantsIDB';

export const favoriteButtonPresenterInRestaurant= async (restaurant)=> {
  await favoriteButtonPresenter.init({
    favoriteButtonSection: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: db,
    restaurant,
  });
};
