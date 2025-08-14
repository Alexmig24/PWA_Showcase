import { LitElement, html, css } from 'lit';

export class EspeProductCard extends LitElement {
  static properties = {
    tema: { type: String, reflect: true },
    title: { type: String },
    description: { type: String },
    price: { type: String },
    status: { type: String },
    buttonTheme: { type: String, attribute: 'button-theme' },
    imageUrl: { type: String, attribute: 'image-url' }
  };

  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', 'Roboto', sans-serif;
      --card-bg: white;
      --text-color: #333;
      --muted-text: #666;
      --border-color: #eee;
      --btn-green-bg: #2e7d5f;
      --btn-yellow-bg: #f9be01;
      --btn-yellow-text: #000;
      --btn-green-text: white;
    }

    :host([tema="oscuro"]) {
      --card-bg: #1e1e1e;
      --text-color: #f0f0f0;
      --muted-text: #aaa;
      --border-color: #333;
      --btn-yellow-text: #111;
    }

    @media (prefers-color-scheme: dark) {
      :host(:not([tema])) {
        --card-bg: #1e1e1e;
        --text-color: #f0f0f0;
        --muted-text: #aaa;
        --border-color: #333;
        --btn-yellow-text: #111;
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      background-color: var(--card-bg);
      color: var(--text-color);
      border-radius: 16px;
      box-shadow: 0 3px 4px rgba(0,0,0,0.1);
      overflow: hidden;
      width: 100%;
      max-width: 300px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }

    .image-placeholder {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      height: 200px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .no-image-text {
      color: white;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      opacity: 0.8;
    }

    .options-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s ease, transform 0.2s ease;
      backdrop-filter: blur(4px);
    }

    .options-btn:hover {
      opacity: 1;
      transform: scale(1.1);
    }

    .content {
      padding: 16px;
      flex-grow: 1;
    }

    .title-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
      gap: 8px;
    }

    .title {
      font-weight: bold;
      font-size: 1.1rem;
      flex: 1;
      line-height: 1.3;
    }

    .badge {
      font-size: 0.8rem;
      padding: 4px 8px;
      border-radius: 12px;
      border: 1px solid;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .badge.green {
      color: #006B53;
      border-color: #006B53;
      background-color: rgba(0, 107, 83, 0.1);
    }

    .badge.red {
      color: #E63329;
      border-color: #E63329;
      background-color: rgba(230, 51, 41, 0.1);
    }

    .description {
      font-size: 0.9rem;
      color: var(--muted-text);
      margin: 10px 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .price {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 12px;
      color: var(--btn-green-bg);
    }

    .button-area {
      border-top: 1px solid var(--border-color);
      text-align: center;
      margin-top: auto;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px 16px;
      border: none;
      border-radius: 0;
      width: 100%;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.9rem;
      gap: 8px;
      transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .btn.green {
      background-color: var(--btn-green-bg);
      color: var(--btn-green-text);
    }

    .btn.green:hover:not(:disabled) {
      background-color: #1e5d42;
    }

    .btn.yellow {
      background-color: var(--btn-yellow-bg);
      color: var(--btn-yellow-text);
    }

    .btn.yellow:hover:not(:disabled) {
      background-color: #e6aa01;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      background-color: #ccc !important;
      color: #666 !important;
    }

    .cart-icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    /* Animación de entrada */
    :host {
      animation: fadeInUp 0.3s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  constructor() {
    super();
    this.title = 'Producto Genérico';
    this.description = 'Este es un producto de ejemplo para tu tienda.';
    this.price = '$00.00';
    this.status = 'Disponible';
    this.buttonTheme = 'green';
    this.imageUrl = '';
  }

  _handleOptionsClick(e) {
    e.stopPropagation();
    // Aquí puedes agregar funcionalidad para el menú de opciones
    console.log('Opciones clicked for:', this.title);
  }

  _handleCartClick(e) {
    e.stopPropagation();
    
    if (this.status === 'Sin stock') {
      return;
    }

    // Dispatch evento personalizado para que el padre lo maneje
    this.dispatchEvent(new CustomEvent('add-to-cart', {
      detail: {
        title: this.title,
        price: this.price,
        description: this.description,
        status: this.status
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const btnClass = this.buttonTheme === 'yellow' ? 'btn yellow' : 'btn green';
    const badgeClass = this.status === 'Disponible' ? 'badge green' : 'badge red';
    const isOutOfStock = this.status === 'Sin stock';

    return html`
      <div class="card">
        <div class="image-placeholder">
          ${this.imageUrl
            ? html`<img src="${this.imageUrl}" alt="Imagen de ${this.title}" class="card-image" />`
            : html`<div class="no-image-text">Sin imagen</div>`}
          <div class="options-btn" @click="${this._handleOptionsClick}">⋯</div>
        </div>
        <div class="content">
          <div class="title-row">
            <span class="title">${this.title}</span>
            <span class="${badgeClass}">${this.status}</span>
          </div>
          <div class="description">${this.description}</div>
          <div class="price">${this.price}</div>
        </div>
        <div class="button-area">
          <button 
            class="${btnClass}" 
            ?disabled="${isOutOfStock}"
            @click="${this._handleCartClick}"
          >
            ${isOutOfStock ? 'Sin stock' : 'Agregar al carrito'}
            <svg class="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M16.5 4H22L20 15H15.5M16.5 4L15.5 15M16.5 4H10.75M15.5 15H11.5M10.75 4H5L7 15H11.5M10.75 4L11.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M5 4C4.83333 3.33333 4 2 2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('espe-product-card', EspeProductCard);