import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ArtsCraftsCard from "./ArtsCraftsCard";

function Category() {
	const { category } = useParams();
	const categoryName = category;
	const categoryData = useLoaderData();
	const [crafts, setCrafts] = useState(categoryData);

	return (
		<div className="my-16">
			<h2 className="text-center font-bold text-3xl mb-6">
				Explore all our {categoryName} related items
			</h2>

			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{crafts.length > 0 ? (
					crafts.map((craft) => (
						<ArtsCraftsCard
							key={craft._id}
							craft={craft}
							crafts={categoryData}
							setCrafts={setCrafts}
						/>
					))
				) : (
					<p className="text-center">
						No craft items prepared in this category yet
					</p>
				)}
			</div>
		</div>
	);
}

export default Category;
