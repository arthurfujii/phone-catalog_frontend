import { Navigate, useParams } from 'react-router';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid.component';
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.component';
import { NavigationPath } from '../../components/NavigationPath/NavigationPath.component';
import { useEffect, useState } from 'react';
import { Category } from '../../types/Category';
import { getCategoryByCatId, getProductsByCatId } from '../../api/products';
import { Product } from '../../types/Product';

export const CatalogPage: React.FC = () => {
  const { category: categoryId } = useParams<string>();
  const [category, setCategory] = useState<Category>();
  const [products, setProducts] = useState<Product[]>();
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (categoryId) {
      getProductsByCatId(categoryId).then((prods) => {
        setProducts(prods);
      });
      getCategoryByCatId(categoryId)
        .then((cat) => {
          setCategory(cat);
        })
        .finally(() => setIsReady(true));
    }
  }, [categoryId]);

  if (isReady && !category) {
    return <Navigate to="notfound" />;
  }

  if (isReady && category && products) {
    return (
      <section className="catalog-page">
        <NavigationPath firstLevel={category.category_name} />
        <CategoryTitle
          title={`${category.category_name.charAt(0).toUpperCase()}${category.category_name.slice(1)}`}
          productsCount={products.length}
        />
        <ProductGrid
          productsArray={products}
          pagination
        />
      </section>
    );
  } else {
    return 'Loading... Wait a second!';
  }
};
