import { useLoaderData, Link } from "react-router-dom";

const ViewDetails = () => {
	const craft = useLoaderData();

	const {
		_id,
		image,
		item_name,
		description,
		price,
		rating,
		stock_status,
		processing_time,
	} = craft;

	const ratingRounded = Math.round(rating);

	console.log(craft);

	return (
		<div className="w-full flex items-center min-h-[75vh] p-6 mt-4 bg-gray-50 text-center">
			<div className="m-auto container flex flex-col md:flex-row gap-6 items-center">
				<img
					src={image}
					alt={item_name}
					className="object-cover w-full md:w-1/3 rounded-lg"
				/>
				<div className="flex flex-col gap-2 w-full md:w-2/3 items-start">
					<p className="text-amber-600">
						{Array.from({ length: ratingRounded }).map(
							(_, index) => (
								<span key={index}>★</span>
							)
						)}
					</p>
					<div className="flex items-center gap-2">
						<p className="badge badge-outline text-zinc-700 p-3">
							${price}
						</p>
						<p className="badge badge-outline text-zinc-700 p-3">
							{processing_time}
						</p>
					</div>
					<h1 className="text-2xl font-semibold text-orange-700">
						{item_name}
					</h1>
					<p className="text-lg font-medium text-gray-700 text-justify md:text-left">
						{description}
					</p>

					<p
						className={`${
							stock_status === "In stock"
								? "text-green-700"
								: "text-red-700"
						} font-semibold`}
					>
						({stock_status})
					</p>
					<div className="flex justify-center gap-4 mt-4">
						<Link
							to={`/updateartcraft/${_id}`}
							className="btn bg-zinc-900 text-white hover:bg-zinc-800"
						>
							Update
						</Link>
						<Link
							to="/"
							className="btn bg-orange-600 text-white hover:bg-orange-800"
						>
							Go to Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewDetails;
