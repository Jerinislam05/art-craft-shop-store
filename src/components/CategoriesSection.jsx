import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const CategoriesSection = () => {
	const categories = [
		{ name: "Painting", icon: "🎨" },
		{ name: "Sculpture", icon: "🗿" },
		{ name: "Jewelry", icon: "💎" },
		{ name: "Knitting", icon: "🧵" },
		{ name: "Ceramics", icon: "🏺" },
	];

	return (
		<section className="py-32 font-sans bg-gradient-to-r from-white via-white to-gray-50">
			<div className="text-center mb-8">
				<h2 className="text-4xl font-bold font-sans text-gray-800">
					Explore Our Categories
				</h2>
				<p className="text-lg font-sans text-gray-700 mt-2">
					Find the perfect art & craft pieces to match your style and
					passion
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-6">
				{categories.map((category, index) => (
					<div
						key={index}
						className="flex flex-col gap-8 items-center p-16 md:p-8 border border-black md:border-gray-200 hover:border-black rounded-md transform duration-1000 transition-all cursor-pointer"
					>
						<div className="text-8xl">{category.icon}</div>
						<Link
							to={`/categories/${category.name.toLowerCase()}`}
							className="font-sans bg-zinc-900 hover:bg-black text-white text-lg px-6 py-3 rounded-full"
						>
							{category.name}
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default CategoriesSection;
