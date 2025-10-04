import { assets } from "../../assets/assets";

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
  return (
    <div className="food-item rounded-2xl overflow-hidden shadow-2xl">
      <div className="food-item-img flex sm:inline-block ">
        <img src={image} alt={name} className="flex-1" />
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
