import type { ReactNode } from 'react';
import logo from '../assets/logo.svg';

function HeaderIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button className="site-header__icon" type="button" aria-label={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </button>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="site-header__benefits">
        <p><span aria-hidden="true">✓</span> Compra <strong>100% segura</strong></p>
        <p><span aria-hidden="true">▰</span> <strong>Frete grátis</strong> acima de R$ 200</p>
        <p><span aria-hidden="true">▤</span> <strong>Parcele</strong> suas compras</p>
      </div>

      <div className="site-header__main">
        <a className="site-header__logo" href="#top" aria-label="Econverse, início">
          <img src={logo} alt="Econverse" />
        </a>

        <div className="site-header__search" role="search">
          <label className="visually-hidden" htmlFor="site-search">
            Buscar produtos
          </label>
          <input id="site-search" type="search" placeholder="O que você está buscando?" />
          <button type="button" aria-label="Buscar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 5 5" />
            </svg>
          </button>
        </div>

        <div className="site-header__actions">
          <HeaderIcon label="Meus pedidos">
            <path d="M4 7h16v13H4zM8 7V4h8v3M8 12h8M8 16h5" />
          </HeaderIcon>
          <HeaderIcon label="Favoritos">
            <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z" />
          </HeaderIcon>
          <HeaderIcon label="Minha conta">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20a7 7 0 0 1 14 0M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
          </HeaderIcon>
          <HeaderIcon label="Carrinho">
            <path d="M3 4h2l2.5 12h11L21 8H6M9 20h.01M18 20h.01" />
          </HeaderIcon>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Categorias da loja">
        <a href="#category-shortcuts">TODAS CATEGORIAS</a>
        <a href="#product-list">SUPERMERCADO</a>
        <a href="#product-list">LIVROS</a>
        <a href="#product-list">MODA</a>
        <a href="#product-list">LANÇAMENTOS</a>
        <a className="is-highlighted" href="#product-list">OFERTAS DO DIA</a>
        <a href="#product-list">ASSINATURA</a>
      </nav>
    </header>
  );
}