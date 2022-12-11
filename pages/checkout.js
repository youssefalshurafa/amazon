import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from './redux/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
function checkout() {
  const items = useSelector(selectItems);
  console.log(items);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1050}
            height={250}
            objectFit="contain"
            alt=""
          />
          <div className="flex flex-col p-5 bg-white space-y-10">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? 'Your Basket is empty'
                : ' Your Shopping Basket'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                thumbnail={item.thumbnail}
              />
            ))}
          </div>
        </div>

        {/* Right */}
      </main>
    </div>
  );
}

export default checkout;
