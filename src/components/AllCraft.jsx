import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraft = () => {
	const [crafts, setCrafts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch("http://localhost:5000/craft")
			.then((res) => {
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				setCrafts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error fetching crafts:", err);
				setLoading(false);
				setError(true);
			});
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-2xl font-bold text-zinc-500 animate-pulse">
					Loading...
				</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center text-red-500 min-h-[75vh]">
				<p className="text-xl font-semibold">
					Failed to load crafts. Please try again later.
				</p>
			</div>
		);
	}

	return (
		<div className="w-full p-4 sm:p-6 bg-white min-h-[75vh] mt-8">
			<h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 text-orange-600">
				All Art & Craft Items: {crafts.length}
			</h1>
			<div className="overflow-x-auto">
				<table className="table-auto w-full border-collapse border border-orange-200 rounded-lg">
					<thead>
						<tr className="bg-gradient-to-r from-orange-100 to-orange-300 text-orange-900">
							<th className="hidden sm:table-cell border p-4 text-left text-lg font-semibold">
								Image
							</th>
							<th className="border p-4 text-left text-sm sm:text-lg font-semibold">
								Item Name
							</th>
							<th className="hidden sm:table-cell border p-4 text-left text-sm sm:text-lg font-semibold">
								Subcategory
							</th>
							<th className="border p-4 text-left text-sm sm:text-lg font-semibold">
								Price
							</th>
							<th className="hidden sm:table-cell border p-4 text-left text-sm sm:text-lg font-semibold">
								Rating
							</th>
							<th className="border p-4 text-center text-sm sm:text-lg font-semibold">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{crafts.map((craft) => (
							<tr
								key={craft._id}
								className="hover:bg-gradient-to-r from-orange-50 to-orange-100 transition-all"
							>
								<td className="hidden sm:table-cell border p-4">
									<img
										src={craft.image}
										alt={craft.item_name}
										className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded shadow-md border border-orange-200"
									/>
								</td>
								<td className="border p-4 text-orange-700 font-medium">
									{craft.item_name}
								</td>
								<td className="hidden sm:table-cell border p-4 text-orange-700 font-medium">
									{craft.subcategory_name}
								</td>
								<td className="border p-4 text-zinc-600 font-bold">
									${craft.price}
								</td>
								<td className="hidden sm:table-cell border p-4 text-yellow-500 font-bold">
									{craft.rating} ★
								</td>
								<td className="border p-4 text-center">
									<Link
										to={`/details/${craft._id}`}
										className="btn bg-zinc-900 text-white hover:bg-zinc-800"
									>
										Details
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllCraft;
