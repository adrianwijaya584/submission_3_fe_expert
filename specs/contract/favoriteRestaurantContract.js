/* eslint-disable max-len */

export const favoriteRestaurantModel= (restaurant)=> {
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

  it('should not able add restaurant to favorite list if the properties invalid', async ()=> {
    restaurant.putRestaurant({invalid: 'invalid'});

    expect(await restaurant.getAllRestaurants())
        .toEqual([]);
  });

  it('should return all liked restaurant', async ()=> {
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

  it('should delete liked restaurant', async ()=> {
    restaurant.putRestaurant({id: 1});
    restaurant.putRestaurant({id: 2});
    restaurant.putRestaurant({id: 3});

    await restaurant.deleteRestaurant(2);

    expect(await restaurant.getAllRestaurants())
        .toEqual([
          {id: 1},
          {id: 3},
        ]);
  });

  it('should delete restaurant even restaurant have not liked', async ()=> {
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
