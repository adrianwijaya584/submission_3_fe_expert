class CustomJumbotron extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML= `
      <div class="jumbotron">
        <div class="overlay">
          <h1>AdrianWResto</h1>
          <p>Selamat datang di AdrianWRestos.</p>
          <a href="#restaurantsWrapper" class="bannerBtn">Mulai Eksplor</a>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-jumbotron', CustomJumbotron);
