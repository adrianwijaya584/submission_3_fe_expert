export default {
  init({
    navbarBtn,
    drawer,
    mainContent,
  }) {
    navbarBtn.addEventListener('click', (event)=> {
      this._toggleDrawer(event, drawer);
    });

    mainContent.addEventListener('click', (event)=> {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};
