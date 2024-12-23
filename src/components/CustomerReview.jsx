const CustomerReview = () => {
	const reviews = [
		{
			name: "Sarah L., California",
			review: "I’ve been crafting for years, and this shop has become my go-to for supplies. The quality of the paints, brushes, and canvases is top-notch. Shipping is always on time, and their customer service team is so friendly and helpful. Highly recommend to all artists!",
			rating: 4.5,
		},
		{
			name: "Amanda R., New York",
			review: "I was new to crafting and didn’t know where to start, but this shop made it so easy. The product descriptions are detailed, and the starter kits are perfect for beginners. Now, crafting is my favorite weekend hobby!",
			rating: 5,
		},
		{
			name: "James T., London",
			review: "I love the customization options this shop offers! I ordered a set of personalized stamps, and they turned out amazing. They’ve added a unique touch to all my projects. I’ll definitely be ordering again!",
			rating: 5,
		},
		{
			name: "Priya S., Bangalore",
			review: "The prices here are unbeatable! I’ve compared them with other stores, and you really get the best value for your money. Plus, their seasonal discounts are a lifesaver for my crafting budget.",
			rating: 4.5,
		},
		{
			name: "Michael H., Sydney",
			review: "This store has everything I need for my DIY projects. Whether it’s beads, threads, or fabric, I can find it all in one place. The quality is fantastic, and I love their eco-friendly packaging.",
			rating: 4.5,
		},
		{
			name: "Emily W., Toronto",
			review: "I bought a DIY jewelry kit as a gift for my sister, and she absolutely loved it! The packaging was beautiful, and the instructions were so easy to follow. This shop is perfect for unique and thoughtful presents.",
			rating: 5,
		},
		{
			name: "Ahmed M., Dubai",
			review: "Even though I live halfway across the world, my orders always arrive on time and in perfect condition. Their worldwide shipping service is reliable, and the items are packed with care.",
			rating: 5,
		},
	];

	return (
		<section className="pt-12 pb-32 font-sans bg-gray-50">
			<div className="text-center my-16 text-black">
				<h2 className="text-4xl mb-4 font-bold font-sans">
					What Our Customers Say
				</h2>
				<p className="text-lg mb-6 font-sans">
					See why our customers love us!
				</p>
			</div>
			<div className="marquee-container">
				<div
					className="marquee"
					onTouchStart={(e) => e.target.classList.add("pause")}
					onTouchEnd={(e) => e.target.classList.remove("pause")}
				>
					<div className="marquee-content px-16">
						{reviews.map((review, index) => (
							<div key={index} className="testimonial-card">
								<p className="text-white text-xl leading-8 font-sans">
									{review.review}
								</p>
								<div className="mt-4">
									<h3 className="text-white font-bold font-sans">
										{review.name}
									</h3>
									<p className="text-orange-600 inline-block bg-white p-2 mt-6 rounded-full">
										{"⭐".repeat(Math.floor(review.rating))}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<p className="text-center text-black font-semibold mt-4 md:hidden">
				Touch on a review to stop it, touch outside to reset
			</p>
		</section>
	);
};

export default CustomerReview;
