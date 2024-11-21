import { Link } from "react-router-dom";

const ArtsCraftsCard = ({ craft }) => {
  const { _id, image, item_name, description, price, rating } = craft;

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
        <div className="flex justify-center">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-success items-center mt-4">
              View Details
            </button>
          </Link>
        </div>
      </div> 
    </div>
  );
};

export default ArtsCraftsCard;
