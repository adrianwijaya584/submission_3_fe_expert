class CustomFooter extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML= `
      <footer>
        <h3>&copy; 2023 By AdrianWResto.</h3>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
