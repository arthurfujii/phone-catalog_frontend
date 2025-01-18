import { Link, useNavigate } from 'react-router';
import { Price } from '../Price/Price.component';
import { SpecsMini } from '../SpecsMini/SpecsMini.component';
import { CardButtons } from '../CardButtons/CardButtons.component';
import { Line } from '../Line/Line.component';
import { Product } from '../../../types/Product';

type Props = {
  product: Product;
  showDiscount: boolean;
};

export const ProductCard: React.FC<Props> = ({ product, showDiscount }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <Link
        to={'/'}
        className="card__link"
        onClick={(e) => {
          e.preventDefault();
          navigate(`../../${product.categoryId}/${product.id}`);
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <figure className="card__image-wrapper">
          <img
            src={`/${product.images[0]}`}
            className="card__image"
          />
        </figure>
        <div className="card__product-name">{product.name}</div>
      </Link>
      <Price
        product={product}
        showDiscount={showDiscount}
      />
      <Line />
      <SpecsMini product={product} />
      <CardButtons product={product} />
    </div>
  );
};
