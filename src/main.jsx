import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCraft from "./components/AllCraft.jsx";
import AddCraft from "./components/AddCraft.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import MyCraftList from "./components/MyCraftList.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProviders from "./components/providers/AuthProviders.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home.jsx";
import ViewDetails from "./components/ViewDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addcraft"),
      },
      {
        path: "allcraft",
        element: <AllCraft></AllCraft>,
      },
      {
        path: "addcraft",
        element: (
          <ProtectedRoute>
            <AddCraft />
          </ProtectedRoute>
        ),
      },
      {
        path: "mylist",
        element: (
          <ProtectedRoute>
            <MyCraftList />
          </ProtectedRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/addcraft/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch craft details");
          }
          return response.json();
        },
        errorElement: (
          <div className="p-4">
            <h1 className="text-xl font-bold text-red-600">Error</h1>
            <p>Could not fetch the craft details. Please try again later.</p>
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </AuthProviders>
  </StrictMode>
);