import { useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import { ProductSlider } from '../../components/base/ProductSlider/ProductSlider.component';
// eslint-disable-next-line max-len
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory.component';
import { Welcome } from '../../components/Welcome/Welcome.component';
import { getProducts } from '../../api/products';
import { Product } from '../../types/Product';

export const HomePage = () => {
  const [sortedByYear, setSortByYear] = useState<Product[]>([]);
  const [sortedByPrice, setSortByPrice] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(undefined, 15).then(products => {
      setSortByYear(products);
    });
  }, []);

  useEffect(() => {
    getProducts('price', 15).then(products => {
      setSortByPrice(products);
    });
  }, []);

  return (
    <div className="home-page">
      <Welcome />
      <ProductSlider
        title={'Brand new models'}
        products={sortedByYear}
        showDiscount={false}
      />
      <ShopByCategory />
      <ProductSlider
        title={'Hot prices'}
        products={sortedByPrice}
        showDiscount={true}
      />
    </div>
  );
};
