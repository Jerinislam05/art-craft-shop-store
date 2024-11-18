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
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={image}
        alt={item_name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h1 className="text-3xl font-bold mb-2">{item_name}</h1>
      <p className="text-lg text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Subcategory Name:</strong> {subcategory_name}
          </p>
          <p>
            <strong>Customization:</strong> {customization}
          </p>
          <p>
            <strong>Processing Time:</strong> {processing_time}
          </p>
          <p>
            <strong>Stock Status:</strong> {stock_status}
          </p>
        </div>
        <div>
          <p>
            <strong>Seller Name:</strong> {user_name}
          </p>
          <p>
            <strong>Seller Email:</strong> {user_email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
