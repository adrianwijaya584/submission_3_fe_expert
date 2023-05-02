import favoriteButtonPresenter
  from '../../src/scripts/utils/favoriteButtonPresenter';
import idb from '../../src/scripts/data/favoriteRestaurantsIDB';

export const favoriteRestaurantButtonPresenter= async (restaurant)=> {
  await favoriteButtonPresenter.init({
    favoriteButtonSection: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurantsDb: idb,
    restaurant,
  });
};
