import {
  likeBtnTemplate,
  dislikeBtnTemplate,
} from '../views/templates/defineTemplates';

export default {
  async init({
    favoriteButtonSection,
    favoriteRestaurants,
    restaurant,
  }) {
    this._favoriteButtonSection= favoriteButtonSection;
    this._restaurant= restaurant;
    this._favoriteRestaurants= favoriteRestaurants;

    await this._render();
  },

  async _render() {
    const {id}= this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderDislike();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant= await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderDislike() {
    this._favoriteButtonSection.innerHTML= dislikeBtnTemplate();
    const dislikeButton= document.querySelector('#favoriteButton');
    dislikeButton.addEventListener('click', async ()=> {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._render();
    });
  },

  _renderLike() {
    this._favoriteButtonSection.innerHTML= likeBtnTemplate();
    const likeButton= document.querySelector('#favoriteButton');
    likeButton.addEventListener('click', async ()=> {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._render();
    });
  },
};
