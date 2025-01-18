import { useContext, useEffect, useState } from 'react';
import { StatesContext } from '../../store/GlobalStateProvider';
import { Line } from '../base/Line/Line.component';
import cn from 'classnames';
import { Price } from '../base/Price/Price.component';
import { CardButtons } from '../base/CardButtons/CardButtons.component';
import { SpecsMini } from '../base/SpecsMini/SpecsMini.component';
import { colors } from '../../utils/colors';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/products';

export const ProductDetailsMain: React.FC = () => {
  const { selectedProduct } = useContext(StatesContext);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProducts().then((prods: Product[]) => {
      if (selectedProduct) {
        const selected = prods.find((p) => p.id === selectedProduct.id);

        setProduct(selected);
      }
    });
  }, [selectedProduct]);

  if (selectedProduct) {
    return (
      <div className="productDetailsMain">
        <div className="productDetailsMain__colors">
          <span className="productDetailsMain__colors-text">
            Available colors
          </span>
          <div className="productDetailsMain__colors-button-container">
            {selectedProduct.availableVariants.colorsAvailable.map((c, i) => (
              <button
                className={cn('productDetailsMain__colors-button-bg', {
                  'productDetailsMain__colors-button-bg--selected':
                    c === selectedProduct.specs.color,
                })}
                key={i + c}
              >
                <div
                  className="productDetailsMain__colors-button"
                  style={{ background: `${colors[c]}` }}
                />
              </button>
            ))}
          </div>
        </div>
        <Line />
        <div className="productDetailsMain__capacity">
          <span className="productDetailsMain__capacity-text">
            Select capacity
          </span>
          <div className="productDetailsMain__capacity-container">
            {selectedProduct.availableVariants.capacityAvailable.map((c, i) => (
              <button
                key={c + i}
                className={cn('productDetailsMain__capacity-button', {
                  'productDetailsMain__capacity-button--selected':
                    c === selectedProduct.specs.capacity,
                })}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <Line />
        {product && (
          <>
            <div className="productDetailsMain__price">
              <Price product={product} />
              <CardButtons product={product} />
            </div>
            <SpecsMini product={product} />
          </>
        )}
      </div>
    );
  }

  return 'no selectedProduct';
};
