const Navbar = ({ category, setcategory }) => {
  const categories = [
    "Technology",
    "Business",
    "Health",
    "Sports",
    "Entertainment",
  ];

  return (
    <nav className="bg-[#060404a8] text-white h-14">
      <div className="flex items-center justify-between px-4 max-w-screen-xl mx-auto h-full">
        <h2 className="text-2xl bg-white text-black font-bold tracking-wide w-36 text-center py-1 rounded-[8px]">
          NewsMag
        </h2>

        <ul className="flex gap-4 items-center list-none">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setcategory(cat)}
              className={`px-3 py-2 cursor-pointer rounded-md font-medium transition-transform duration-200 ${
                category === cat
                  ? "bg-blue-600 text-white scale-105"
                  : "text-blue-400 hover:text-blue-600 hover:scale-105"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
