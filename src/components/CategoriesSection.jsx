import "tailwindcss/tailwind.css";

const CategoriesSection = () => {
  const categories = [
    { name: "Painting", icon: "🎨" },
    { name: "Sculpture", icon: "🗿" },
    { name: "Jewelry", icon: "💎" },
    { name: "Textiles", icon: "🧵" },
    { name: "Ceramics", icon: "🏺" },
  ];

  return (
    <section className="py-12 font-serif bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Explore Our Categories
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Find the perfect art & craft pieces to match your style and passion.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg transform hover:scale-110 transition-transform"
          >
            <div className="text-6xl animate-bounce mb-4">{category.icon}</div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-colors">
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
