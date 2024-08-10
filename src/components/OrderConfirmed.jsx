import React from "react";

export default function OrderConfirmed({ cartItems, handleNewOrder }) {
  let totalPrice = 0;

  return (
    <div
      className="h-screen w-screen bg-black/50 fixed z-10 top-0 left-0 flex justify-center items-end text-gray-800"
      onClick={handleNewOrder}
    >
      <div
        className="rounded-t-3xl bg-[#fff] flex flex-col max-h-[85%] w-[600px] h-max py-6 px-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pb-5">
          <img
            src="/images/icon-order-confirmed.svg"
            alt="icon-order-confirmed.svg"
          />
          <h1 className="py-3 tracking-wider font-bold text-4xl">
            Order Confirmed
          </h1>
          <p className="text-gray-600">We hope you enjoy your food!</p>
        </div>
        <div class="p-6 rounded-md bg-[#F4EDEB] overflow-y-scroll scrollNone">
          <ul className="flex flex-col gap-3">
            {cartItems.length > 0 &&
              cartItems.map((cartItem, i) => {
                totalPrice += cartItem.itemPrice * cartItem.itemQty;
                return (
                  <li key={i} className="flex items-center justify-between border-b-[1px] border-gray-400 pb-2 gap-2">
                    <div className="flex items-center gap-4">
                      <img src={cartItem.itemThumbnail} alt="cartItem" className="w-14 h-14 rounded-lg" />
                      <div className="flex flex-col gap-2">
                        <p className="font-medium text-sm">{cartItem.itemName}</p>
                        <p className="text-sm flex gap-6 font-semibold text-red-700">
                          {`${cartItem.itemQty}x`}
                          <span className="text-gray-600">{`@${cartItem.itemPrice.toFixed(2)}`}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-semibold">{`$${(cartItem.itemPrice * cartItem.itemQty).toFixed(
                      2
                    )}`}</p>
                  </li>
                );
              })}
          </ul>
          <p className="flex items-center justify-between my-5 font-semibold text-lg">
            Order Total <span className="font-bold text-2xl"> {`$${totalPrice.toFixed(2)}`}</span>
          </p>
        </div>
        <button className="bg-red-700 rounded-full w-full py-3.5 text-[#fff] mt-7" onClick={handleNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
