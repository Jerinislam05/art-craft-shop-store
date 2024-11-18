import Swal from "sweetalert2";

const AddCraft = () => {
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
    fetch("http://localhost:5000/addcraft", {
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
          Swal.fire({
            title: "Good job!",
            text: "User added successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <form onSubmit={handleAddArtCraft} className="space-y-4">
      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="url"
          name="image"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Item Name */}
      <div>
        <label className="block text-sm font-medium">Item Name</label>
        <input
          type="text"
          name="item_name"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Subcategory Name */}
      <div>
        <label className="block text-sm font-medium">Subcategory Name</label>
        <input
          type="text"
          name="subcategory_name"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Short Description */}
      <div>
        <label className="block text-sm font-medium">Short Description</label>
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
        <label className="block text-sm font-medium">Customization</label>
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
        <label className="block text-sm font-medium">Processing Time</label>
        <input
          type="text"
          name="processing_time"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Stock Status */}
      <div>
        <label className="block text-sm font-medium">Stock Status</label>
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
        <label className="block text-sm font-medium">User Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* User Email */}
      <div>
        <label className="block text-sm font-medium">User Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Add Button */}
      <input
        type="submit"
        value="Add Art & Craft"
        className="btn btn-accent w-full block"
      />
    </form>
  );
};

export default AddCraft;
