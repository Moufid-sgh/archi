const Tabs = ({ selected, onChange }) => {
  const categories = ["Tous les projets", "Bureaux", "Retail", "Habitation"];

  return (
    <div className="flex justify-center gap-4 lg:gap-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat === "Tous les projets" ? "" : cat)}
          className={`px-2 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold duration-300 transition-all cursor-pointer shadow border border-gray-100
            ${selected === cat || (cat === "Tous les projets" && selected === "")
              ? "text-violet-600"
              : "text-black hover:text-violet-600"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
