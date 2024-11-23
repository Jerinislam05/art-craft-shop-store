const WhyChoose = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 p-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-serif font-extrabold text-center text-orange-600 mb-6">
          Why Choose <span className="text-yellow-500">Our Creations?</span>
        </h2>

        {/* Intro Text */}
        <p className="text-lg font-serif text-center text-gray-700 mb-8">
          Discover the magic of authenticity and artistry. Our handcrafted items
          are designed to add charm, beauty, and a touch of uniqueness to your
          world. Here’s why we stand out!
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-serif gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              🖌️ Artisanal Quality
            </h3>
            <p className="text-amber-800">
              Each piece is a work of art, crafted with love and attention to
              detail by talented artisans.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              🌍 Eco-Friendly Materials
            </h3>
            <p className="text-amber-800">
              We prioritize sustainability, using environmentally responsible
              materials in our creations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              🎨 Customizable Designs
            </h3>
            <p className="text-amber-800">
              Express your style! We offer customizable options to create items
              that are truly one-of-a-kind.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              💖 Made with Love
            </h3>
            <p className="text-amber-800">
              Our creations are not mass-produced; they are handcrafted with
              care, passion, and dedication.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              🚀 Fast and Reliable Service
            </h3>
            <p className="text-amber-800">
              Enjoy quick turnaround times and dependable delivery, ensuring
              your satisfaction every step of the way.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              ⭐ Customer Delight
            </h3>
            <p className="text-amber-800">
              We are committed to making you happy. Your satisfaction is at the
              heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
