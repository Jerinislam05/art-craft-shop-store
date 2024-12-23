import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ArtsCraftsCard from "./ArtsCraftsCard";

const CraftItemsSection = () => {
	const loadedCrafts = useLoaderData();
	const [crafts, setCrafts] = useState(loadedCrafts);

	return (
		<div className="pt-24 pb-32 bg-zinc-900">
			<h2 className="text-4xl font-bold mb-16 text-center text-white">
				Arts and Crafts ({crafts.length})
			</h2>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
				{crafts.map((craft) => (
					<ArtsCraftsCard
						key={craft._id}
						craft={craft}
						crafts={crafts}
						setCrafts={setCrafts}
					/>
				))}
			</div>
		</div>
	);
};

export default CraftItemsSection;
