import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craft = useLoaderData(); // Get the specific craft item data

  console.log(craft);

  const {
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
  } = craft;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <img
        src={image}
        alt={item_name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h1 className="text-3xl font-bold mb-2 text-primary">{item_name}</h1>
      <p className="text-lg mb-4 text-gray-700">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-2">
              <strong className="text-secondary">Price:</strong>{" "}
              <span className="text-accent">${price}</span>
            </p>
            <p className="mb-2">
              <strong className="text-secondary">Rating:</strong>{" "}
              <span className="text-accent">{rating}</span>
            </p>
          </div>
          <div>
            <p className="mb-2">
              <strong className="text-secondary">Subcategory Name:</strong>{" "}
              <span className="text-accent">{subcategory_name}</span>
            </p>
            <p className="mb-2">
              <strong className="text-secondary">Customization:</strong>{" "}
              <span className="text-accent">{customization}</span>
            </p>
          </div>
          <div>
            <p className="mb-2">
              <strong className="text-secondary">Processing Time:</strong>{" "}
              <span className="text-accent">{processing_time}</span>
            </p>
            <p className="mb-2">
              <strong className="text-secondary">Stock Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  stock_status === "In Stock"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stock_status}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2">
            <strong className="text-secondary">Seller Name:</strong>{" "}
            <span className="text-accent">{user_name}</span>
          </p>
          <p className="mb-2">
            <strong className="text-secondary">Seller Email:</strong>{" "}
            <span className="text-accent">{user_email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
