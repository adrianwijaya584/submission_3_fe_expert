import db from '../src/scripts/data/favoriteRestaurantsIDB';
import * as TestFactories from './helpers/testFactories';

// describe(`Menambahkan restoran ke favorit`, ()=> {
describe(`adding restaurant to favorite list`, ()=> {
  const favoriteButtonContainer= ()=> {
    document.body.innerHTML= `<div id="favoriteButtonContainer"></div>`;
  };

  beforeEach(()=> {
    favoriteButtonContainer();
  });

  // it(`harus menampilkan tombol tambah favorit saat restoran belum difavoritkan sebelumnya`, async ()=> {
  it(`harus menampilkan tombol tambah favorit saat restoran belum difavoritkan sebelumnya`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});

    expect(
        document.querySelector(`[aria-label="tambahkan restoran ke favorit"]`),
    ).toBeTruthy();
  });

  it(`harus tidak menampilkan tombol hapus favorit saat restoran belum difavoritkan sebelumnya`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});
    expect(document.querySelector(`[aria-label="hapus restoran dari favorit"]`))
        .toBeFalsy();
  });

  it(`harus bisa menambahkan restoran ke daftar favorit`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});

    document.querySelector(`#favoriteButton`).dispatchEvent(new Event(`click`));

    const restaurant= await db.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});

    db.deleteRestaurant(1);
  });

  it(`harus tidak dapat menambahkan restoran apabila restoran telah ditambahkan ke favorit`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});
    await db.putRestaurant({id: 1});
    document.querySelector(`#favoriteButton`).dispatchEvent(new Event(`click`));

    expect(await db.getAllRestaurants()).toEqual([{id: 1}]);
    db.deleteRestaurant(1);
  });

  it(`harus tidak menambahkan restoran saat tidak memiliki id`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({ });
    document.querySelector(`#favoriteButton`).dispatchEvent(new Event(`click`));
    expect(await db.getAllRestaurants()).toEqual([]);
  });
});
