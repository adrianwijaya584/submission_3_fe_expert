import 'regenerator-runtime';
import './components/footer';
import './components/jumbotron';
import './components/navbar';
import '../styles/main.scss';
import '../styles/responsive.scss';
import swRegister from './utils/swRegister';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const navbarBtn= document.querySelector('#navbarBtn');
const drawer= document.querySelector('#navbarDrawer');
const mainContent= document.querySelector('main');

const apps= new App({
  navbarBtn,
  drawer,
  mainContent,
});

window.addEventListener('hashchange', ()=> {
  apps.render();
  drawer.classList.remove('open');
  window.scrollTo({
    top: 0,
    left: 0,
  });
});

window.addEventListener('load', ()=> {
  apps.render();
  swRegister();
});
