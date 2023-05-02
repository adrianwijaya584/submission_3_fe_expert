import db from '../src/scripts/data/favoriteRestaurantsIDB';
import * as TestFactories from './helpers/testFactories';

// describe('Menghapus restoran dari favorit', ()=> {
describe('remove restaurant from favorite list', ()=> {
  const addlikeButtonContainer= ()=> {
    document.body.innerHTML= '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async ()=> {
    addlikeButtonContainer();
    await db.putRestaurant({id: 1});
  });

  afterEach(async ()=> {
    await db.deleteRestaurant(1);
  });

  // it('harus dapat menampilkan tombol hapus dari favorit saat restoran sudah difavoritkan', async ()=> {
  it(`should show favorite restaurant delete button when resaturant is
    already f`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});

    expect(document.querySelector('[aria-label="hapus restoran dari favorit"]'))
        .toBeTruthy();
  });

  // it('harus tidak menampilkan tombol tambah ke favorit saat restoran sudah difavoritkan', async ()=> {
  it(`should not show favorite restaurant fav`, async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});

    expect(document.querySelector('[aria-label="tambahkan restoran ke favorit"]'))
        .toBeFalsy();
  });

  // it('harus bisa menghapus restoran yang difavoritkan dari daftar restoran favorit', async ()=> {
  it('harus bisa menghapus restoran yang difavoritkan dari daftar restoran favorit', async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});
    document.querySelector('[aria-label="hapus restoran dari favorit"]')
        .dispatchEvent(new Event('click'));
    expect(await db.getAllRestaurants()).toEqual([]);
  });

  // it('harus tidak throw error apabila restoran yang belum difavoritkan tidak ada di daftar restoran favorit', async ()=> {
  it('harus tidak throw error apabila restoran yang belum difavoritkan tidak ada di daftar restoran favorit', async ()=> {
    await TestFactories.favoriteButtonPresenterInRestaurant({id: 1});
    await db.deleteRestaurant(1);

    document.querySelector('[aria-label="hapus restoran dari favorit"]').dispatchEvent(new Event('click'));
    expect(await db.getAllRestaurants()).toEqual([]);
  });
});
