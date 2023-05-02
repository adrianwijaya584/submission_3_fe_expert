class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML= `
      <header>
        <h1 class="title"><a href="#">AdrianWResto</a></h1>
        <button id="navbarBtn" aria-label="Navbar Menu">
          <i class="fa fa-solid fa-bars"></i>
        </button>
        <nav id="navbarDrawer">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#/favorites">Favorite</a></li>
            <li><a href="https://github.com/adrianwijaya584" referrer="no-referrer" target="_blank">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
