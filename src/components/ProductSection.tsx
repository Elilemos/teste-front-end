import { useRef } from 'react';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

type ProductSectionProps = {
  products: Product[];
  onSelect: (product: Product) => void;
  sectionId: string;
  showCategories?: boolean;
  showHeading?: boolean;
};

const categories = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

export function ProductSection({
  products,
  onSelect,
  sectionId,
  showCategories = false,
  showHeading = true,
}: ProductSectionProps) {
  const productListRef = useRef<HTMLUListElement>(null);

  function scrollProducts(direction: number) {
    const list = productListRef.current;

    if (list) {
      list.scrollBy({
        left: direction * list.clientWidth * 0.8,
        behavior: 'smooth',
      });
    }
  }

  return (
    <section className="product-section" id={sectionId} aria-label="Produtos relacionados">
      {showHeading && (
        <div className="product-section__heading">
          <h2>Produtos relacionados</h2>
        </div>
      )}

      {!showCategories && (
        <a className="product-section__all" href={`#${sectionId}-items`}>
          Ver todos
        </a>
      )}

      {showCategories && (
        <ul className="category-tabs" aria-label="Categorias de produtos">
          {categories.map((category, index) => (
            <li
              className={index === 0 ? 'is-active' : undefined}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      <div className="product-carousel">
        <button
          className="product-carousel__arrow"
          type="button"
          aria-label="Ver produtos anteriores"
          onClick={() => scrollProducts(-1)}
        >
          ‹
        </button>

        <ul
          id={`${sectionId}-items`}
          ref={productListRef}
          className="product-list"
        >
          {products.map((product, index) => (
            <li key={`${product.productName}-${index}`}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          className="product-carousel__arrow"
          type="button"
          aria-label="Ver próximos produtos"
          onClick={() => scrollProducts(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}