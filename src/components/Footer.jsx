import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-10">
      {/* Company Details Section */}
      <aside className="flex flex-col items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 text-yellow-400 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        </div>
        <p className="font-bold text-2xl">
          Crafty Creations
          <br />
          <span className="text-yellow-300">
            Inspiring creativity and craftsmanship since 1992
          </span>
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      {/* Contact Section */}
      <aside className="mt-6">
        <p className="text-lg font-semibold">Contact Us</p>
        <p>
          Email:{" "}
          <span className="text-yellow-200">support@craftycreations.com</span>
        </p>
        <p>
          Phone: <span className="text-yellow-200">+1 123 456 7890</span>
        </p>
      </aside>

      {/* Social Media Links */}
      <nav className="mt-6">
        <div className="grid grid-flow-col gap-6">
          {/* Facebook */}
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transform transition"
            whileHover={{ scale: 1.3 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatDelay: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-400 hover:text-blue-600"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </motion.a>
          {/* Twitter */}
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transform transition"
            whileHover={{ scale: 1.3 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatDelay: 0.7,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-cyan-400 hover:text-cyan-600"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </motion.a>
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transform transition"
            whileHover={{ scale: 1.3 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatDelay: 0.9,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-pink-400 hover:text-pink-600"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </motion.a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
