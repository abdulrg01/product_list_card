import React from "react";
import Card from "./Card";

export default function CardView({ data, cartItems, setCartItems }) {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5 text-gray-800">Desserts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map((item) => (
          <Card
            key={item.name}
            itemName={item.name}
            itemCategory={item.category}
            itemPrice={item.price}
            itemImage={item.image}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}
