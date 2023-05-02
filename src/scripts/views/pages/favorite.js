import db from '../../data/favoriteRestaurantsIDB';
import {
  createRestaurantCard,
  createRestaurantSkeletonCard,
} from '../templates/defineTemplates';

export default {
  async render() {
    return `
      <div id="mainWrapper">
        <h2>Restoran Favorit Anda</h2>
        <div id="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsSection= document.querySelector('#restaurants');
    restaurantsSection.innerHTML= '';

    for (let num= 0; num < 3; num++) {
      restaurantsSection.innerHTML+= createRestaurantSkeletonCard();
    }

    try {
      const restaurants= await db.getAllRestaurants();

      if (!restaurants.length) {
        restaurantsSection.innerHTML=
        '<p>Daftar restoran favorit anda kosong.</p>';

        return;
      }
      restaurantsSection.innerHTML= '';
      restaurants.forEach((restaurant)=> {
        restaurantsSection.innerHTML += createRestaurantCard(restaurant);
      });
    } catch (error) {
      restaurantsSection.innerHTML= `<p>Maaf terjadi kesalahan di server</p>`;
    }
  },
};
