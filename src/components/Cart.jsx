import React, { useEffect, useState } from "react";

export default function Cart({ cartItems, removeItem, SetOrderConfirmation }) {
  const [totalQty, setTotalQty] = useState(0);
  let totalPrice = 0;

  useEffect(() => {
    setTotalQty(
      cartItems.reduce((sum, cartItem) => {
        return sum + cartItem.itemQty;
      }, 0)
    );
  }, [cartItems]);

  return (
    <div className="flex flex-col rounded-lg p-5 bg-[#FCF9F7] text-black">
      <h2 className="text-red-700 text-2xl font-bold">Your Cart({totalQty})</h2>
      {cartItems.length <= 0 && (
        <div className="flex flex-col items-center">
          <img src="/images/illustration-empty-cart.svg" />
          <p className="text-[0.9rem] font-[650] text-gray-500 tracking-tight">
            Your added items will appear here
          </p>
        </div>
      )}
      <div>
        <ul className="item-list">
          {cartItems.length >= 0 &&
            cartItems.map((cartItem, i) => {
              totalPrice += cartItem.itemPrice * cartItem.itemQty;
              return (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-gray-200"
                >
                  <div className="text-[0.8rem] py-3">
                    <h4 className="font-[680] text-[#000]">
                      {cartItem.itemName}
                    </h4>
                    <div className="flex pt-2">
                      <p className="text-red-600 pr-6">
                        <strong>{`${cartItem.itemQty}x`}</strong>
                      </p>
                      <p className="pr-2 text-gray-700">
                        {" "}
                        {`@$${cartItem.itemPrice.toFixed(2)}`}
                      </p>
                      <p className="text-gray-700">
                        <strong>{`$${(
                          cartItem.itemPrice * cartItem.itemQty
                        ).toFixed(2)}`}</strong>
                      </p>
                    </div>
                  </div>
                  <img
                    src="/images/icon-remove-item.svg"
                    alt="icon-remove"
                    className="hover:cursor-pointer w-3 h-3"
                    onClick={() => removeItem(cartItem.itemName)}
                  />
                </li>
              );
            })}
        </ul>
        <div className="text-[0.9rem] font-medium flex justify-start items-center py-5">
          <p>Order Total</p>{" "}
          <strong className="font-extrabold text-xl ml-auto">{`$${totalPrice.toFixed(
            2
          )}`}</strong>
        </div>
        <div className="text-[0.8rem] flex items-center rounded-md py-[15px] px-[25px] bg-gray-200 whitespace-nowrap gap-1">
          <img src="/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
          <p className="text-sm">
            This is a <strong>carbon-neutral</strong> delivery
          </p>
        </div>
        <button
          disabled={cartItems.length <= 0}
          className="p-[15px] border-none w-full rounded-full text-[0.8rem] mt-[15px] bg-red-700 text-gray-200 font-normal"
          onClick={() => SetOrderConfirmation(true)}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
