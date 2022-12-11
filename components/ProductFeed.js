import data from './Data';
import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {data.products
        .slice(0, 4)
        .map(({ id, title, price, description, category, thumbnail }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            thumbnail={thumbnail}
          />
        ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {data.products
          .slice(4, 5)
          .map(({ id, title, price, description, category, thumbnail }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              thumbnail={thumbnail}
            />
          ))}
      </div>

      {data.products
        .slice(5, data.products.length)
        .map(({ id, title, price, description, category, thumbnail }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            thumbnail={thumbnail}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
