import React, { useEffect, useState } from "react";
import CartIcon from "/images/icon-add-to-cart.svg";

export default function Card({
  itemName,
  itemCategory,
  itemPrice,
  itemImage,
  cartItems,
  setCartItems,
}) {
  const [qty, setQty] = useState(1);

  const obj = {
    itemThumbnail: itemImage.thumbnail,
    itemName,
    itemPrice,
    itemQty: 1,
  };

  function handleAddToCartButton() {
    setQty(1);
    setCartItems([...cartItems, obj]);
  }

  useEffect(() => {
    setCartItems(
      cartItems
        .map((cartItem) =>
          cartItem.itemName === obj.itemName
            ? { ...cartItem, itemQty: qty }
            : cartItem
        )
        .filter((c) => c.itemQty !== 0)
    );
  }, [qty]);

  return (
    <div className="mb-7 hover:scale-105 transition-all hover:shadow-transparent cursor-pointer">
      <div className="mb-5 flex flex-col items-center">
        <img
          src={itemImage.desktop}
          alt={itemName}
          className={`rounded-lg ${
            cartItems.some((item) => item.itemName === itemName)
              ? "border-[2px] border-red-900"
              : ""
          }`}
        />
        <div
          className={`${
            cartItems.some((item) => item.itemName === itemName)
              ? "bg-red-900 text-white"
              : "bg-white text-black border-[1px] border-stone-500 shadow-md"
          } w-40 flex items-center justify-center gap-2 rounded-3xl p-2 -mt-3`}
        >
          {cartItems.length > 0 &&
          cartItems.some((item) => item.itemName === itemName) ? (
            <div className="flex items-center justify-between w-full py-1 px-2">
              <img
                src="/images/icon-decrement-quantity.svg"
                alt="decrement"
                onClick={() => setQty(qty - 1)}
              />
              <p className="text-xs">{qty}</p>
              <img
                className="w-2 h-2 cursor-pointer"
                src="/images/icon-increment-quantity.svg"
                alt="increment"
                onClick={() => setQty(qty + 1)}
              />
            </div>
          ) : (
            <div
              className="flex items-center gap-2"
              onClick={() => handleAddToCartButton()}
            >
              {" "}
              <img className="w-4 h-4" src={CartIcon} alt="addToCard" />
              <p className="font-semibold text-sm hover:text-red-900">add to card</p>
            </div>
          )}
        </div>
      </div>

      <p className="text-stone-500 mb-1">{itemCategory}</p>
      <h3 className="font-bold text-stone-800 tracking-tighter">{itemName}</h3>
      <p className="text-red-900 font-bold">{`$${itemPrice.toFixed(2)}`}</p>
    </div>
  );
}
