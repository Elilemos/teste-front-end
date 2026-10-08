import { useEffect, useRef } from 'react';
import type { Product } from '../types/product';
import { formatCurrency } from '../utils/formatCurrency';
import '../styles/product-modal.scss';

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ProductModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="product-modal__close"
          type="button"
          aria-label="Fechar detalhes do produto"
          onClick={onClose}
        >
          ×
        </button>

        <img src={product.photo} alt={product.productName} />

        <div>
          <h2 id="product-modal-title">{product.productName}</h2>
          <p>{product.descriptionShort}</p>
          <p className="product-modal__price">
            {formatCurrency(product.price)}
          </p>
        </div>
      </section>
    </div>
  );
}