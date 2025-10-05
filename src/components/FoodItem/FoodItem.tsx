import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

type FoodType = {
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  id: string;
};

export default function FoodItem({
  id,
  name,
  price,
  description,
  image,
}: FoodType) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item rounded-2xl overflow-hidden shadow-2xl ">
      <div className="food-item-img flex sm:inline-block relative">
        <img src={image} alt={name} className="flex-1" />
        <div className="absolute bottom-2 right-2">
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              alt="add"
              className="cursor-pointer"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="food-item-counter flex items-center bg-white rounded-full gap-2 p-1.5">
              <img
                src={assets.remove_icon_red}
                alt="decrease"
                className="cursor-pointer"
                onClick={() => removeFromCart(id)}
              />
              <span className="font-bold">{cartItems[id]}</span>
              <img
                src={assets.add_icon_green}
                alt="increase"
                className="cursor-pointer"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center">
          <div className="food-item-name font-bold mb-2">
            <p>{name}</p>
          </div>
          <div className="food-item-rating">
            <img src={assets.rating_starts} alt="" />
          </div>
        </div>
        <div className="food-item-description text-gray-700 mb-2">
          <p>{description}</p>
        </div>
        <div className="food-item-price font-bold">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}
