import { useLoaderData, Link } from "react-router-dom";

const ViewDetails = () => {
  const craft = useLoaderData();

  const { _id, image, item_name, description, price, rating, stock_status } = craft;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={item_name}
        className="w-64 h-64 object-cover mx-auto mb-6 rounded-lg shadow-md border-4 border-purple-300"
      />
      <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
        {item_name}
      </h1>
      <p className="text-lg font-medium text-gray-700 mb-6">{description}</p>
      <div className="grid grid-cols-1 gap-4 text-center text-lg">
        <p className="text-blue-600 font-semibold">
          <strong className="text-purple-800">Price:</strong> ${price}
        </p>
        <p className="text-yellow-500 font-semibold">
          <strong className="text-purple-800">Rating:</strong> {rating} ★
        </p>
        <p
          className={`font-semibold ${
            stock_status === "In Stock" ? "text-green-500" : "text-red-500"
          }`}
        >
          <strong className="text-purple-800">Stock Status:</strong>{" "}
          {stock_status}
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          to={`/updateartcraft/${_id}`}
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all font-bold"
        >
          Update
        </Link>
        <Link
          to="/"
          className="bg-purple-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-700 transition-all font-bold"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
