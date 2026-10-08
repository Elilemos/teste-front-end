import type { Product } from '../types/product';
import { formatCurrency } from '../utils/formatCurrency';

type ProductCardProps = {
    product: Product;
    onSelect: (product: Product) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
    return (
        <article className="product-card">
            <img src={product.photo} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>{product.descriptionShort}</p>
            <p>{formatCurrency(product.price)}</p>

            <button type="button" onClick={() => onSelect(product)}>
                Ver detalhes
            </button>

        </article>
    );
}