import { createContext } from "react";
import { food_list } from "../assets/assets";

type FoodType = {
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  id: string;
};

export const StoreContext = createContext<FoodType[] | null>(null);

const StoreContextProvider = (props) => {
  const data = {
    foodList: food_list,
  };

  return (
    <StoreContext.Provider value={data}>{props.children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
