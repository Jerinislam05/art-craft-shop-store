const CustomerReview = () => {
  const reviews = [
    {
      name: "Emily Johnson",
      review: "The craftsmanship is exceptional! The product exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      review: "Beautiful and unique designs. My friends always ask where I got these from.",
      rating: 4.5,
    },
    {
      name: "Sophia Martinez",
      review: "Fast shipping and excellent quality. Highly recommend this shop!",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 font-serif bg-gradient-to-r from-green-100 to-teal-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-green-700">What Our Customers Say</h2>
        <p className="text-lg text-green-600 mt-2">
          See why our customers love us!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg transform hover:scale-105 transition-transform"
          >
            <p className="text-gray-700 text-lg italic">
              "{review.review}"
            </p>
            <div className="mt-4">
              <h3 className="text-green-700 font-bold">{review.name}</h3>
              <p className="text-yellow-500">Rating: {"⭐".repeat(Math.floor(review.rating))}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
