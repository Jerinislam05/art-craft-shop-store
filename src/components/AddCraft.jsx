import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCraft = () => {
	const navigate = useNavigate();
	const handleAddArtCraft = (event) => {
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

		const newArtCraft = {
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
		console.log(newArtCraft);

		// send data to the server
		fetch("http://localhost:5000/craft", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newArtCraft),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					// Show SweetAlert success modal
					Swal.fire({
						title: "Craft Added!",
						text: "Your craft has been successfully added.",
						icon: "success",
						confirmButtonText: "Go to All Crafts",
					}).then(() => {
						// Navigate to AllCraft page after clicking OK
						navigate("/allcraft");
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
		<div className="bg-white w-full mt-3 py-8">
			<form onSubmit={handleAddArtCraft} className="space-y-4 container mx-auto">
				{/* Image URL */}
				<div>
					<label className="block text-sm font-medium">
						Image URL
					</label>
					<input
						type="url"
						name="image"
						className="w-full border p-2 rounded"
						placeholder="Photo url"
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
						placeholder="Item name"
						required
					/>
				</div>

				{/* Subcategory Name */}
				<div>
					<label className="block text-sm font-medium">
						Subcategory Name
					</label>
					<select
						id="subcategory_name"
						name="subcategory_name"
						className="w-full p-2 border-zinc-900 border rounded-sm"
					>
						<option value="Painting">Painting</option>
						<option value="Sculpture">Sculpture</option>
						<option value="Jewelry">Jewelry</option>
						<option value="Knitting">Knitting</option>
						<option value="Ceramics">Ceramics</option>
						<option value="Other">Other</option>
					</select>
				</div>

				{/* Short Description */}
				<div>
					<label className="block text-sm font-medium">
						Short Description
					</label>
					<textarea
						name="description"
						className="w-full border p-2 rounded"
						placeholder="Short description"
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
						placeholder="Item amount"
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
						placeholder="Enter rating"
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
						placeholder="Processing time"
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
						placeholder="User name"
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
						placeholder="User email"
						className="w-full border p-2 rounded"
						required
					/>
				</div>

				{/* Add Button */}
				<input
					type="submit"
					value="Add Craft Item"
					className="btn bg-orange-600 text-white hover:bg-orange-800 w-full"
				/>
			</form>
		</div>
	);
};

export default AddCraft;
