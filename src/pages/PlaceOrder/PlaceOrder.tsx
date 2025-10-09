import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.scss";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order container mx-auto flex justify-between items-start gap-12 py-12">
      <div className="place-order-left">
        <p className="title text-2xl font-bold mb-4">Delivery Information</p>
        <div className="multi-fields flex gap-4">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields flex gap-4">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields flex gap-4">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right w-100">
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
          <button className="uppercase text-white bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors py-1.5 rounded">
            proced to payment
          </button>
        </div>
      </div>
    </form>
  );
}
