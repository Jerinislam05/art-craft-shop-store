const CategoriesSection = () => {
    const categories = ["Painting", "Sculpture", "Jewelry", "Textiles", "Ceramics"];
  
    return (
      <section className="py-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">Art & Craft Categories</h2>
        <div className="flex justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {category}
            </button>
          ))}
        </div>
      </section>
    );
  };
  
  export default CategoriesSection;
  