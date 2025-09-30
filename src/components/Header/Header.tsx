import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content bg-cover! p-12 ">
        <div className="container m-auto">
          <div className="jumbotron">
            <h1 className="mb-3 font-bold text-white text-2xl md:text-4xl">
              Order your favourite food here
            </h1>
            <p className="mb-3 hidden md:block text-white">
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with a finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dinning
              experience, one delicous meal at a time.
            </p>
            <button className="text-white font-bold px-5 py-2 cursor-pointer bg-transparent border-blue-800 border rounded-full hover:bg-blue-800 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
