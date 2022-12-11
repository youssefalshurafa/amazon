import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  thumbnail,
}) {
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
      <div className="flex flex-col space-y-2 my-auto justify-center">
        <button className="button">Add to Basket</button>
        <button className="button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
