import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../pages/redux/basketSlice';
import { removeFromBasket } from '../pages/redux/basketSlice';
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  thumbnail,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { id, title, price, description, category, thumbnail };

    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image
        src={thumbnail}
        height={200}
        width={200}
        objectFit="contain"
        alt=""
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-xs my-2">{description}</p>
        <Currency quantity={price} currency="GBP" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
