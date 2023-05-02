export const favoriteRestaurantModel= (restaurant)=> {
  // it('harus menampilkan restoran yang sudah ditambahkan', async ()=> {
  it('should show added restaurant', async ()=> {
    restaurant.putRestaurant({id: 1});
    restaurant.putRestaurant({id: 2});

    expect(await restaurant.getRestaurant(1))
        .toEqual({id: 1});
    expect(await restaurant.getRestaurant(2))
        .toEqual({id: 2});
    expect(await restaurant.getRestaurant(3))
        .toEqual(undefined);
  });

  // it(`harus menolak penambahan restoran apabila restoran tidak memiliki properti yang benar`, async ()=> {
  it(`should deny adding restaurant to favorite list
   if properties invalid`, async ()=> {
    restaurant.putRestaurant({invalid: 'invalid'});

    expect(await restaurant.getAllRestaurants())
        .toEqual([]);
  });

  // it('harus dapat mengembalikan semua restoran yang telah ditambahkan', async ()=> {
  it(`should return all liked restaurant`, async ()=> {
    restaurant.putRestaurant({id: 2});
    restaurant.putRestaurant({id: 3});

    expect(await restaurant.getAllRestaurants())
        .toEqual([
          {
            id: 2,
          },
          {
            id: 3,
          },
        ]);
  });

  // it('harus dapat menghapus restoran favorit', async ()=> {
  it(`should delete liked restaurant`, async ()=> {
    restaurant.putRestaurant({id: 1});
    restaurant.putRestaurant({id: 2});
    restaurant.putRestaurant({id: 3});

    await restaurant.deleteRestaurant(3);

    expect(await restaurant.getAllRestaurants())
        .toEqual([
          {id: 1},
          {id: 2},
        ]);
  });

  // it('harus menghandle permintaan untuk menghapus restoran walaupun restoran belum ditambahkan', async ()=> {
  it(`should delete restaurant even restaurant haven't liked`, async ()=> {
    restaurant.putRestaurant({id: 1});
    restaurant.putRestaurant({id: 2});
    restaurant.putRestaurant({id: 3});

    await restaurant.deleteRestaurant(5);

    expect(await restaurant.getAllRestaurants())
        .toEqual([
          {id: 1},
          {id: 2},
          {id: 3},
        ]);
  });
};
