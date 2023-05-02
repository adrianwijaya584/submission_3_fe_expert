import routes from '../routes/routes';
import UrlParser from '../routes/urlParser';
import DrawerInit from '../utils/drawerInit';

class App {
  constructor({
    navbarBtn,
    drawer,
    mainContent,
  }) {
    this._drawer= drawer;
    this._mainContent= mainContent;
    this._navbarBtn= navbarBtn;

    this._initialApp();
  }

  _initialApp() {
    DrawerInit.init({
      drawer: this._drawer,
      mainContent: this._mainContent,
      navbarBtn: this._navbarBtn,
    });
  }


  async render() {
    const url= UrlParser.parseActiveUrlWithCombiner();
    const apps= routes[url];
    this._mainContent.innerHTML= await apps.render();
    await apps.afterRender();

    document.querySelector('#skipBtn').addEventListener('click', (e)=> {
      e.preventDefault();
      this._mainContent.focus();
    });
  }
}

export default App;
