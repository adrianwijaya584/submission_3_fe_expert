/* eslint-disable max-len */
import db from '../src/scripts/data/favoriteRestaurantsIDB';
import * as TestFactories from './helpers/testFactories';

describe('adding restaurant to favorite list', ()=> {
  const favoriteButtonContainer= ()=> {
    document.body.innerHTML= `<div id="favoriteButtonContainer"></div>`;
  };

  beforeEach(()=> {
    favoriteButtonContainer();
  });

  it('should show liking button if restaurant is not liked before', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});

    expect(
        document.querySelector('[aria-label="tambahkan restoran ke  daftar favorit"]'),
    ).toBeTruthy();
  });

  it('should not show dislike button if restaurant is not liked before', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});
    expect(document.querySelector('[aria-label="hapus restoran dari daftar favorit"]'))
        .toBeFalsy();
  });

  it('should add restaurant to favorite restaurants list', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const restaurant= await db.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});

    db.deleteRestaurant(1);
  });

  it('should not able to add restaurant to favorite restaurants list if restaurant is already liked', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({id: 1});
    await db.putRestaurant({id: 1});
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await db.getAllRestaurants()).toEqual([{id: 1}]);
    db.deleteRestaurant(1);
  });

  it('should not able to add restaurant to favorite restaurant list if id is not present', async ()=> {
    await TestFactories.favoriteRestaurantButtonPresenter({ });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await db.getAllRestaurants()).toEqual([]);
  });
});
