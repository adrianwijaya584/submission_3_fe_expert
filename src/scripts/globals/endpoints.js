import config from './config';

const {API_BASE_URL}= config;

export default {
  restaurantsList: `${API_BASE_URL}/list`,
  restaurantDetail: (id)=> `${API_BASE_URL}/detail/${id}`,
  addNewReview: `${API_BASE_URL}/review`,
};
