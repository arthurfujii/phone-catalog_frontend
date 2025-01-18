import { useContext } from 'react';
import { CartProductCard } from '../CartProductCard/CartProductCard.component';
import { StatesContext } from '../../store/GlobalStateProvider';

export const CartGrid: React.FC = () => {
  const { cart } = useContext(StatesContext);

  return (
    <>
      <div className="cartGrid">
        {cart.map(product => (
          <CartProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
