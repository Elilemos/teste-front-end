import { useEffect, useState } from 'react';
import type { Product, ProductResponse } from './types/product';
import { ProductSection } from './components/ProductSection';
import { ProductModal } from './components/ProductModal';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import './styles/product-list.scss';

import heroBanner from './assets/banner.png';
import partnerBanner from './assets/banner apoio 1.png';
import brandImage from './assets/compre por marcas.png';
import categoryImage from './assets/compre por categoria.png';

const PRODUCTS_URL =
  '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(PRODUCTS_URL);

        if (!response.ok) {
          throw new Error('Não foi possível buscar os produtos.');
        }

        const data: ProductResponse = await response.json();

        if (!data.success) {
          throw new Error('A API não conseguiu carregar os produtos.');
        }

        setProducts(data.products);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro inesperado.',
        );
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero-banner" aria-label="Promoção em destaque">
          <img
            src={heroBanner}
            alt="Promoções de Black Friday da Econverse"
          />

          <div className="hero-banner__content">
            <h2>Venha conhecer nossas promoções</h2>
            <p>
              <strong>50% Off</strong> nos produtos
            </p>
            <a className="hero-banner__button" href="#product-list">
              Ver produto
            </a>
          </div>
        </section>

        <section
          id="category-shortcuts"
          className="category-shortcuts"
          aria-label="Compre por categoria"
        >
          <img
            src={categoryImage}
            alt="Categorias: Tecnologia, Supermercado, Bebidas, Ferramentas, Saúde, Esportes e Fitness e Moda"
          />
        </section>

        <h1>Produtos relacionados</h1>

        {loading && <p>Carregando produtos...</p>}
        {error && <p role="alert">{error}</p>}

        {!loading && !error && (
          <>
            <ProductSection
              sectionId="product-list"
              products={products}
              onSelect={(product) => setSelectedProduct(product)}
              showCategories
              showHeading={false}
            />

            <section
              className="supporting-banner"
              aria-label="Promoção de parceiros"
            >
              <img
                src={partnerBanner}
                alt="Promoção de parceiros Econverse"
              />
            </section>

            <ProductSection
              sectionId="product-list-2"
              products={products}
              onSelect={(product) => setSelectedProduct(product)}
            />

            <section
              className="brand-section"
              aria-label="Marcas disponíveis"
            >
              <img
                src={brandImage}
                alt="Marcas disponíveis na Econverse"
              />
            </section>

            <ProductSection
              sectionId="product-list-3"
              products={products}
              onSelect={(product) => setSelectedProduct(product)}
            />

            {selectedProduct && (
              <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </>
        )}
      </main>

      <SiteFooter />
    </>
  );
}

export default App;