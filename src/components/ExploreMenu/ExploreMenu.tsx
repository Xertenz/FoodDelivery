import "./ExploreMenu.scss";
import { menu_list } from "../../assets/assets.ts";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <section className="container mx-auto explore-menu pt-12 pb-9 px-8 sm:px-0" id="explore-menu">
      <h1 className="text-3xl text-center font-bold mb-4">Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-menu-list py-4 flex justify-between items-center overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item px-3"
            onClick={() =>
              setCategory((prev) =>
                prev == item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`min-w-20 min-h-20 mb-3 ${
                category == item.menu_name ? "active" : ""
              }`}
            />
            <p className="text-center">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
