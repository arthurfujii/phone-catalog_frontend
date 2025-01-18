import { Product } from '../../../types/Product';

type Props = {
  product: Product;
};

export const SpecsMini: React.FC<Props> = ({ product }) => {
  return (
    <div className="specsMini">
      <div className="specsMini-line">
        <div className="specsMini-title">Screen</div>
        <div className="specsMini-content">{product.specs.screen}</div>
      </div>
      <div className="specsMini-line">
        <div className="specsMini-title">Capacity</div>
        <div className="specsMini-content">{product.specs.capacity}</div>
      </div>
      <div className="specsMini-line">
        <div className="specsMini-title">RAM</div>
        <div className="specsMini-content">{product.specs.ram}</div>
      </div>
    </div>
  );
};
