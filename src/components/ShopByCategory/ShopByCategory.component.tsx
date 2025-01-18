import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getCategories } from '../../api/products';
import { Category } from '../../types/Category';

export const ShopByCategory = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);

  useEffect(() => {
    getCategories().then((cats: Category[]) => setCategories(cats));
  }, []);

  return (
    <section className="category">
      <h2>Shop by category</h2>
      <div className="category__container">
        {categories.map((cat) => (
          <article
            className="category__group"
            key={cat.category_name}
          >
            <Link
              to={`/${cat.category_name}`}
              className="category__link"
            >
              <figure className="category__image-frame">
                <img
                  src={`/img/category-${cat.category_name}-sqr.png`}
                  alt={cat.category_name}
                  className="category__image"
                />
                <figcaption className="category__figure-caption">
                  <h4>{cat.category_name}</h4>
                  <span className="category__figure-caption-models">
                    {cat.products_count} models
                  </span>
                </figcaption>
              </figure>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
