const Tabs = ({ selected, onChange }) => {
  const categories = ["Tous les projets", "Bureaux", "Retail", "Habitation"];

  return (
    <div className="flex justify-center gap-4 lg:gap-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat === "Tous les projets" ? "" : cat)}
          className={`px-2 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer shadow
            ${selected === cat || (cat === "Tous les projets" && selected === "")
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
