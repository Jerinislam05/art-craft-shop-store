const WhyChoose = () => {
	const features = [
		{
			icon: "🖌️",
			title: "Artisanal Quality",
			description:
				"Each piece is a work of art, crafted with love andattention to detail by talented artisans.",
		},
		{
			icon: "🌍",
			title: "Eco-friendly Materials",
			description:
				"We prioritize sustainability, using environmentally responsible materials in our creations.",
		},

		{
			icon: "🎨",
			title: "Customizable Designs",
			description:
				"Express your style! We offer customizable options to create items that are truly one-of-a-kind.",
		},
		{
			icon: "💖",
			title: "Made With Love",
			description:
				"Our creations are not mass-produced; they are handcrafted with care, passion, and dedication.",
		},
		{
			icon: "🚀",
			title: "Fast and Reliable Service",
			description:
				"Enjoy quick turnaround times and dependable delivery, ensuring your satisfaction every step of the way.",
		},
		{
			icon: "⭐",
			title: "Customer Delight",
			description:
				"We are committed to making you happy. Your satisfaction is at the heart of everything we do.",
		},
	];

	return (
		<section className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 pt-16 pb-32">
			<div className="container mx-auto">
				{/* Section Heading */}
				<h2 className="text-4xl font-sans font-bold text-center text-orange-600 mb-6">
					Why Choose{" "}
					<span className="text-orange-500">Our Creations?</span>
				</h2>

				{/* Intro Text */}
				<p className="text-lg font-sans text-center text-gray-700 mb-8">
					Discover the magic of authenticity and artistry. Our
					handcrafted items are designed to add charm, beauty, and a
					touch of uniqueness to your world. Here’s why we stand out!
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
						>
							<span className="text-4xl">{feature.icon}</span>
							<h3 className="text-2xl font-bold text-orange-600 my-4">
								{feature.title}
							</h3>
							<p className="text-zinc-900">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChoose;
