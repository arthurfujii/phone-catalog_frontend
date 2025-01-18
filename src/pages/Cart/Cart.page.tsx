// eslint-disable-next-line max-len
import { Link } from 'react-router';
import { BackPath } from '../../components/BackPath/BackPath.component';
// eslint-disable-next-line max-len
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.component';
// eslint-disable-next-line max-len
import { CartGrid } from '../../components/CartGrid/CartGrid.component';
// eslint-disable-next-line max-len
import { CartCheckout } from '../../components/CartCheckout/CartCheckout.component';

export const CartPage = () => {
  return (
    <section className="cart-page">
      <Link
        to="/home"
        className="cart-page__link"
      >
        <BackPath />
      </Link>
      <CategoryTitle title={'Cart'} />
      <CartGrid />
      <CartCheckout />
    </section>
  );
};
