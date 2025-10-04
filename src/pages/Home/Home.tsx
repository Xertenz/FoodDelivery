import { useContext, useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.scss";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

export default function Home() {
  const [category, setCategory] = useState<string>("All");

  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
			<hr className="text-gray-200 my-8" />
			<FoodDisplay />
    </>
  );
}
