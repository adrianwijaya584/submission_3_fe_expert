import endpoints from '../globals/endpoints';

export default class restaurantsource {
  static async getAllRestaurants() {
    const response= await fetch(endpoints.restaurantsList);
    const data= await response.json();
    return data;
  }

  static async getRestaurantDetail(id) {
    const response= await fetch(endpoints.restaurantDetail(id));
    const data= await response.json();
    return data;
  }

  static async postReview(review) {
    const response= await fetch(endpoints.addNewReview, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const data= await response.json();
    return data;
  }
}
