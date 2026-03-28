import React, { useState } from "react";
import { BiSolidCoupon } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  // Get product from localStorage
  const [product] = useState(() => {
    const storedProduct = localStorage.getItem("cartProduct");
    return storedProduct ? JSON.parse(storedProduct) : null;
  });

  // ✅ Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const memberId = user?.id;

  // Dynamic price
  const mrp = product ? product.price : 0;
  const discount = 0;

  const totalMrp = mrp * qty;
  const totalDiscount = discount * qty;
  const total = totalMrp - totalDiscount;

  const handleCheckout = () => {
    // ✅ Check login
    if (!memberId) {
      alert("Please login first");
      return;
    }

    const orderData = {
      member_id: memberId, // ✅ from user
      product_name: product?.name,
      quantity: qty,
      total_amount: product?.price * qty,
      image: product?.image
    };

    axios.post("http://127.0.0.1:8000/api/place-order", orderData)
      .then(() => {
        alert("Order Placed Successfully");
        navigate("/checkoutfinal");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="bg-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-start mt-6 sm:mt-10">

{/* LEFT SIDE - CART */}
        <div className="w-full lg:flex-1 bg-gray-100 rounded shadow-sm p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">
            My Bag{" "}
            <span className="text-gray-500 text-sm">
              ({qty} item{qty > 1 ? "s" : ""})
            </span>
          </h2>

          {product && (
            <div className="mt-3">
              <div className="flex gap-3 sm:gap-5">
                <img
                  src={product.image}
                  alt="product"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded object-cover shrink-0"
                />

                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-500">
                    {product.brand}
                  </p>

                  <h3 className="font-medium text-sm sm:text-base">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                      className="w-8 h-8 border rounded hover:bg-gray-200 text-sm"
                    >
                      −
                    </button>

                    <span className="font-semibold text-sm">{qty}</span>

                    <button
                      onClick={() => setQty(qty + 1)}
                      className="w-8 h-8 border rounded hover:bg-gray-200 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

{/* RIGHT SIDE - PRICE DETAILS */}
        <div className="w-full lg:w-80 bg-gray-100 rounded shadow-sm p-4 sm:p-6">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 text-sm sm:text-base">
              <BiSolidCoupon className="text-lg sm:text-xl shrink-0" />
              Coupons & Bank Offers
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 font-semibold mt-2">
              Login to Apply Coupons & Bank Offers
            </p>
          </div>

          <hr className="my-4" />

          <div className="mt-4">
            <h4 className="font-semibold mb-3 text-gray-700 text-sm sm:text-base">
              Price Details
            </h4>

            <div className="text-xs sm:text-sm font-semibold text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{totalMrp}</span>
              </div>

              <p className="text-xs text-gray-500">
                Inclusive of all taxes
              </p>

              <div className="flex justify-between text-green-600 font-semibold">
                <span>Discount</span>
                <span>-₹{totalDiscount}</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-base sm:text-lg text-gray-800">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <p className="text-green-600 mt-2 text-xs sm:text-sm font-semibold">
              Woohoo! You save ₹{totalDiscount}.00 on this order.
            </p>

            <button
              className="w-full bg-black text-white py-3 rounded mt-5 hover:bg-gray-800 transition text-sm sm:text-base"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;