import idb from '../../data/favoriteRestaurantsIDB';
import UrlParser from '../../routes/urlParser';
import favoriteButtonPresenter from '../../utils/favoriteButtonPresenter';
import restaurantsource from '../../data/restaurantSource';
import {
  createDetailPageCard,
  createDetailPageSkeleton,
  createRestaurantReviewsCard,
} from '../templates/defineTemplates';

export default {
  async render() {
    return `
      <div id="mainWrapper"></div>
    `;
  },

  async afterRender() {
    const {id}= UrlParser.parseActiveUrlWithoutCombiner();
    const mainWrapper= document.querySelector('#mainWrapper');
    mainWrapper.innerHTML= createDetailPageSkeleton();

    try {
      const {restaurant}= await restaurantsource.getRestaurantDetail(id);

      mainWrapper.innerHTML= createDetailPageCard(restaurant);

      favoriteButtonPresenter.init({
        favoriteButtonSection:
          document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurantsDb: idb,
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          name: restaurant.name,
          address: restaurant.address,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
          menus: restaurant.menus,
          customerReviews: restaurant.customerReviews,
        },
      });

      const reviewCards= document.querySelector('#reviewCards');
      const form= document.querySelector('form');
      const name= document.querySelector('#nameInput');
      const review= document.querySelector('#reviewInput');

      form.addEventListener('submit', async (event)=> {
        event.preventDefault();
        const reviewsData= await restaurantsource.postReview({
          id,
          name: name.value,
          review: review.value,
        });

        name.value= '';
        review.value= '';

        reviewCards.innerHTML=
          createRestaurantReviewsCard(reviewsData.customerReviews);
      });
    } catch (error) {
      mainWrapper.innerHTML= `<p>Terjadi kesalahan di server.</p>`;
    }
  },
};
