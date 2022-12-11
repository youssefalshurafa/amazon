import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../pages/redux/basketSlice';
import { useRouter } from 'next/router';
function Product({ id, title, price, description, category, thumbnail }) {
  const dispatch = useDispatch();

  return (
    <div className="relative flex  flex-col m-5 bg-white z-30 p-10">
      <div className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </div>
      <Image
        src={thumbnail}
        width="200"
        height="200"
        style={{ width: '100%', height: 'auto' }}
        alt=""
      />
      <h4 className="my-3 ">{title}</h4>

      <div className="text-xs my-2 line-clamp-2">{description}</div>
      <div className="mb-5">
        <Currency quantity={price} currency="EGP" />
      </div>

      <button
        onClick={() =>
          dispatch(
            addToBasket({
              id,
              title,
              thumbnail,
              price,
            })
          )
        }
        className="mt-auto button"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
