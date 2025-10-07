import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

type FoodType = {
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  id: string;
};

interface CartItemType {
  [key: string]: number;
}

export const StoreContext = createContext<FoodType[] | null>(null);

const StoreContextProvider = (props: HTMLElement) => {
  const [cartItems, setCartItems] = useState<CartItemType>({});
  const addToCart = (itemId: number) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: number | any = food_list.find(
          (product) => product._id === item
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const data = {
    foodList: food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={data}>{props.children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
