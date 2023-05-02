import detailPage from '../views/pages/detail';
import favoritePage from '../views/pages/favorite';
import homePage from '../views/pages/home';

export default {
  '/': homePage,
  '/detail/:id': detailPage,
  '/favorites': favoritePage,
};
