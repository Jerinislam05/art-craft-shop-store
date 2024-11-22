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
        fetch(`http://localhost:5000/addcraft/${_id}`, {
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
              const remaining = crafts.filter((cra) => cra._id !== _id);
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
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={item_name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="card-actions justify-between mt-4">
          <div className="badge badge-outline">Price: ${price}</div>
          <div className="badge badge-outline">Rating: {rating}</div>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          <Link to={`updateArtCraft/${_id}`}>
            <button className="btn bg-sky-900">Update</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-pink-500">
            X
          </button>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-sky-900">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtsCraftsCard;
