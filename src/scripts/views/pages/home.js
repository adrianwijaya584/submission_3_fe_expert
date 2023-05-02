import restaurantsource from '../../data/restaurantSource';
import {
  createRestaurantSkeletonCard,
  createRestaurantCard,
  createCommentCard,
} from '../templates/defineTemplates';
import commentsExample from '../../data/commentsExample.json';

export default {
  async render() {
    return `
      <custom-jumbotron></custom-jumbotron>

      <div id="mainWrapper">
        <div id="restaurantsWrapper">
          <div class="headline">
            <h2>Daftar Restoran</h2>
            <p>Daftar restoran yang dapat anda lihat</p>
          </div>
          <div id="restaurants"></div>
        </div>

        <div class="commentsWrapper">
          <div class="headline">
            <h2>Komentar</h2>
            <p>Komentar mereka mengenai kami</p>
          </div>

          <div id="comments"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsSection= document.querySelector('#restaurants');
    const commentsSection= document.querySelector('#comments');
    restaurantsSection.innerHTML= '';

    commentsExample.forEach((comment)=> {
      commentsSection.innerHTML+= createCommentCard(comment);
    });

    for (let num= 0; num < 3; num++) {
      restaurantsSection.innerHTML+= createRestaurantSkeletonCard();
    }

    try {
      const {restaurants, error, message}=
        await restaurantsource.getAllRestaurants();

      if (error) {
        restaurantsSection.innerHTML= `Error: ${message}`;
        return;
      }

      restaurantsSection.innerHTML= '';
      restaurants.forEach((restaurant)=> {
        restaurantsSection.innerHTML += createRestaurantCard(restaurant);
      });
    } catch (error) {
      restaurantsSection.innerHTML= `<p>Terjadi kesalahan di server.</p>`;
    }
  },
};
