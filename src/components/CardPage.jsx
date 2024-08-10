import React, { useState } from "react";
import data from "../data.json";
import Cart from "./Cart";
import CardView from "./CardView";
import OrderConfirmed from "./OrderConfirmed";

export default function CardPage() {
  const [cartItems, setCartItems] = useState([]);
  const [orderConfirmation, SetOrderConfirmation] = useState(false);

  function removeItem(removeItemName) {
    setCartItems(cartItems.filter((item) => item.itemName !== removeItemName));
  }

  const handleNewOrder = () => {
    SetOrderConfirmation(false);
    setCartItems([]);
  };

  return (
    <div className="flex items-start max-sm:flex-col gap-5 m-5">
      <CardView data={data} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart
        removeItem={removeItem}
        cartItems={cartItems}
        SetOrderConfirmation={SetOrderConfirmation}
      />
      {orderConfirmation && (
        <OrderConfirmed
          cartItems={cartItems}
          SetOrderConfirmation={SetOrderConfirmation}
          handleNewOrder={handleNewOrder}
        />
      )}
    </div>
  );
}
