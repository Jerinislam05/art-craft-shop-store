const NotFound = () => (
  <div className="flex flex-col font-serif items-center justify-center h-screen bg-gradient-to-r from-red-100 via-pink-100 to-red-200">
    {/* Big 404 Text */}
    <h1 className="text-9xl font-extrabold text-red-600 drop-shadow-lg mb-6 animate-bounce">
      404
    </h1>

    {/* Page Not Found Message */}
    <p className="text-3xl font-bold text-gray-800 mb-4">
      Oops! The page you're looking for doesn't exist.
    </p>

    {/* Decorative Subtext */}
    <p className="text-lg text-gray-600 mb-8">
      It seems you’ve hit a dead end. Let’s get you back on track!
    </p>

    {/* Back to Home Button */}
    <a
      href="/"
      className="px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-md shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
    >
      Go Back to Home
    </a>
  </div>
);

export default NotFound;
