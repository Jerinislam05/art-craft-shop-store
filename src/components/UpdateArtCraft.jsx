import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArtCraft = () => {
	const craft = useLoaderData();
	const navigate = useNavigate();
	const { _id, image, item_name, description, price, rating } = craft;

	const handleupdateartcraft = (event) => {
		event.preventDefault();

		const form = event.target;

		const image = form.image.value;
		const item_name = form.item_name.value;
		const subcategory_name = form.subcategory_name.value;
		const description = form.description.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const customization = form.customization.value;
		const processing_time = form.processing_time.value;
		const stock_status = form.stock_status.value;
		const user_name = form.user_name.value;
		const user_email = form.user_email.value;

		const updatedArtCraft = {
			image,
			item_name,
			subcategory_name,
			description,
			price,
			rating,
			customization,
			processing_time,
			stock_status,
			user_name,
			user_email,
		};
		console.log(updatedArtCraft);

		// send data to the server
		fetch(`http://localhost:5000/craft/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedArtCraft),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("send");

				console.log(data);
				if (data.modifiedCount > 0) {
					// If modifiedCount > 0, show success modal and navigate
					Swal.fire({
						title: "Craft Updated!",
						text: "Your craft has been successfully updated.",
						icon: "success",
						confirmButtonText: "Go to Craft Details",
					}).then(() => {
						// Navigate to the details page after closing the modal
						navigate(`/details/${_id}`);
					});
				} else {
					// If no changes were made, show an info alert
					Swal.fire({
						title: "No Changes",
						text: "No changes were made to the craft.",
						icon: "info",
					});
				}
			})
			.catch((error) => {
				console.error("Error adding craft:", error);
				Swal.fire({
					title: "Error!",
					text: "Failed to add the craft. Please try again.",
					icon: "error",
					confirmButtonText: "OK",
				});
			});
	};

	return (
		<div>
			<form onSubmit={handleupdateartcraft} className="space-y-4">
				{/* Image URL */}
				<div>
					<label className="block text-sm font-medium">
						Image URL
					</label>
					<input
						type="url"
						name="image"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Item Name */}
				<div>
					<label className="block text-sm font-medium">
						Item Name
					</label>
					<input
						type="text"
						name="item_name"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Subcategory Name */}
				<div>
					<label className="block text-sm font-medium">
						Subcategory Name
					</label>
					<input
						type="text"
						name="subcategory_name"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Short Description */}
				<div>
					<label className="block text-sm font-medium">
						Short Description
					</label>
					<textarea
						name="description"
						className="w-full border p-2 rounded"
						rows="3"
						required
					></textarea>
				</div>

				{/* Price */}
				<div>
					<label className="block text-sm font-medium">Price</label>
					<input
						type="number"
						name="price"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Rating */}
				<div>
					<label className="block text-sm font-medium">Rating</label>
					<input
						type="number"
						name="rating"
						step="0.1"
						min="0"
						max="5"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Customization */}
				<div>
					<label className="block text-sm font-medium">
						Customization
					</label>
					<select
						name="customization"
						className="w-full border p-2 rounded"
						required
					>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>

				{/* Processing Time */}
				<div>
					<label className="block text-sm font-medium">
						Processing Time
					</label>
					<input
						type="text"
						name="processing_time"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Stock Status */}
				<div>
					<label className="block text-sm font-medium">
						Stock Status
					</label>
					<select
						name="stock_status"
						className="w-full border p-2 rounded"
						required
					>
						<option value="In stock">In stock</option>
						<option value="Made to Order">Made to Order</option>
					</select>
				</div>

				{/* User Name */}
				<div>
					<label className="block text-sm font-medium">
						User Name
					</label>
					<input
						type="text"
						name="user_name"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* User Email */}
				<div>
					<label className="block text-sm font-medium">
						User Email
					</label>
					<input
						type="email"
						name="user_email"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Update Button */}
				<input
					type="submit"
					value="Update Art & Craft"
					className="btn btn-accent w-full block"
				/>
			</form>
		</div>
	);
};

export default UpdateArtCraft;
