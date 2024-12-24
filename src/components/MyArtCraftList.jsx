import { useLoaderData } from "react-router-dom";
import ArtsCraftsCard from "./ArtsCraftsCard";
import { useAuth } from "./providers/AuthProviders";

const MyArtCraftList = () => {
	const crafts = useLoaderData();
	const { user } = useAuth();

	const myCrafts = crafts.filter((craft) => craft.user_email === user.email);

	if (myCrafts.length == 0) {
		return (
			<div className="text-center mt-10 min-h-[75vh]">
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					You do not have any items. Add a craft item to see them
					here.
				</h2>
			</div>
		);
	}

	return (
		<div className="mt-3 bg-zinc-900 w-full min-h-[75vh] py-8">
			<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
				{myCrafts.map((craft) => (
					<ArtsCraftsCard key={craft._id} craft={craft} />
				))}
			</div>
		</div>
	);
};

export default MyArtCraftList;
