import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArtsCraftsCard = ({ craft, crafts, setCrafts }) => {
	const { _id, image, item_name, description, price, rating } = craft;

	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/craft/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your art & craft item has been deleted.",
								icon: "success",
							});

							// Update the state to remove the deleted craft
							const remaining = crafts.filter(
								(cra) => cra._id !== _id
							);
							setCrafts(remaining); // Update the state
						}
					})
					.catch((error) => {
						Swal.fire({
							title: "Error!",
							text: "Failed to delete the item.",
							icon: "error",
						});
						console.error("Error deleting item:", error);
					});
			}
		});
	};

	return (
		<div className="card bg-white shadow-2xl group hover:scale-105 transition-transform">
			<figure>
				<img
					src={image}
					alt={item_name}
					className="w-full h-48 object-cover"
				/>
			</figure>
			<div className="card-body">
				{/* Center-align text */}
				<div className="flex flex-col items-center text-center">
					<h2 className="card-title text-2xl font-bold text-zinc-800">
						{item_name}
					</h2>
					<p className="text-zinc-600">{description}</p>
				</div>
				<div className="card-actions justify-center mt-4">
					<div className="badge badge-outline border-zinc-600 text-zinc-600 p-4">
						Price: ${price}
					</div>
					<div className="badge badge-outline border-zinc-600 text-zinc-600 p-4">
						Rating: {rating}
					</div>
				</div>
				<div className="flex justify-center mt-4 gap-2">
					<Link to={`/details/${_id}`}>
						<button className="btn bg-zinc-900 text-white hover:bg-zinc-800">
							View
						</button>
					</Link>
					<Link to={`/updateartcraft/${_id}`}>
						<button className="btn bg-zinc-900 text-white hover:bg-zinc-800">
							Update
						</button>
					</Link>
					<button
						onClick={() => handleDelete(_id)}
						className="btn bg-orange-600 text-white hover:bg-orange-800"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArtsCraftsCard;
