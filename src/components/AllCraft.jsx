import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://crafts-shop-server.vercel.app/allcraft")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching crafts:", err);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-blue-500 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p className="text-xl font-semibold">
          Failed to load crafts. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-600">
        All Art & Craft Items: {crafts.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-purple-200 rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-purple-100 to-purple-300 text-purple-900">
              <th className="border p-4 text-left text-lg font-semibold">
                Image
              </th>
              <th className="border p-4 text-left text-lg font-semibold">
                Item Name
              </th>
              <th className="border p-4 text-left text-lg font-semibold">
                Subcategory
              </th>
              <th className="border p-4 text-left text-lg font-semibold">
                Price
              </th>
              <th className="border p-4 text-left text-lg font-semibold">
                Rating
              </th>
              <th className="border p-4 text-center text-lg font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {crafts.map((craft) => (
              <tr
                key={craft._id}
                className="hover:bg-gradient-to-r from-purple-50 to-purple-100 transition-all"
              >
                <td className="border p-4">
                  <img
                    src={craft.image}
                    alt={craft.item_name}
                    className="w-20 h-20 object-cover rounded shadow-md border border-purple-200"
                  />
                </td>
                <td className="border p-4 text-purple-700 font-medium">
                  {craft.item_name}
                </td>
                <td className="border p-4 text-purple-700 font-medium">
                  {craft.subcategory_name}
                </td>
                <td className="border p-4 text-green-600 font-bold">
                  ${craft.price}
                </td>
                <td className="border p-4 text-yellow-500 font-bold">
                  {craft.rating} ★
                </td>
                <td className="border p-4 text-center">
                  <Link
                    to={`/details/${craft._id}`}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:from-blue-600 hover:to-blue-400 transition-all font-semibold"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
