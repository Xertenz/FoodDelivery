import { useContext } from "react";
import "./Cart.scss";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, foodList, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
	const navigate = useNavigate();

  return (
    <section className="cart py-12">
      <div className="container mx-auto">
        <div className="cart-items mb-12">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quality</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          <br />
          {foodList.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="cart-items-title cart-items-item py-2"
                >
                  <img src={item.image} alt="" className="w-24" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="flex justify-center items-center w-8 h-8 bg-red-500 hover:bg-red-600 transition-colors rounded text-white font-bold cursor-pointer"
                  >
                    X
                  </button>
                </div>
              );
            }
          })}
        </div>

        <div className="cart-bottom flex flex-col-reverse justify-between gap-12 md:flex-row lg:gap-48 xl:gap-84">
          <div className="cart-total flex-1 flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Cart totals</h2>
            <div className="flex flex-col gap-2">
              <div className="cart-total-details flex justify-between">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details flex justify-between">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() == 0 ? 0 : 2}</p>
              </div>
              <div className="cart-total-details flex justify-between font-bold">
                <p>Total</p>
                <p>${getTotalCartAmount() == 0 ? 0 : getTotalCartAmount()+2}</p>
              </div>
            </div>
            <button onClick={() => navigate("/order")} className="uppercase text-white bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors py-1.5 rounded">
              proced to checkout
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p className="mb-2">If you have a promo code, enter it here.</p>
              <div className="cart-promocode-input">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="mr-2 outline-none py-1 px-2  bg-gray-200 rounded"
                />
                <button className="uppercase text-white bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors py-1.5 px-3 rounded text-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
