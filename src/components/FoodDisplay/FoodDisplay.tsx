import { useContext } from "react";
import {StoreContext} from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.scss";

type FoodType = {
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  _id: string;
};

export default function FoodDisplay() {
  const {foodList}  = useContext(StoreContext) as FoodType[] | null;

  return (
    <section className="food-display">
      <div className="container mx-auto">
        <h1>Top dishes near you</h1>
        <div className="food-display-list grid gap-x-8 gap-y-8">
          {foodList &&
            foodList.map((item: FoodType) => (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                category={item.category}
                description={item.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
