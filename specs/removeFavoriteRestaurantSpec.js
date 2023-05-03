/* eslint-disable max-len */
import idb from '../src/scripts/data/favoriteRestaurantsIDB';
import * as TestFactories from './helpers/testFactories';

describe('remove restaurant from favorites restaurant list', ()=> {
  const createFavoriteButtonContainer= ()=> {
    document.body.innerHTML= '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async ()=> {
    createFavoriteButtonContainer();
    await idb.putRestaurant({id: 1});
  });

  afterEach(async ()=> {
    await idb.deleteRestaurant(1);
  });

  it('should show favorite restaurant delete button when resaturant is already liked', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="hapus restoran dari daftar favorit"]'))
        .toBeTruthy();
  });

  it('should not show favorite restaurant button when restaurant is already liked', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="tambahkan restoran ke  daftar favorit"]'))
        .toBeFalsy();
  });

  it('should delete liked restaurant from favorite restaurants list', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});
    document.querySelector('[aria-label="hapus restoran dari daftar favorit"]')
        .dispatchEvent(new Event('click'));
    expect(await idb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if dislike restaurant is not in favorite restaurants list ', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});
    await idb.deleteRestaurant(1);

    document.querySelector('[aria-label="hapus restoran dari daftar favorit"]').dispatchEvent(new Event('click'));
    expect(await idb.getAllRestaurants()).toEqual([]);
  });
});
