// import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-blue-600 dark:bg-gray-800 text-white py-8 mt-8"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Connect with Us</h2>
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="text-lg hover:text-blue-200">
            Facebook
          </a>
          <a href="#" className="text-lg hover:text-blue-200">
            Instagram
          </a>
          <a href="#" className="text-lg hover:text-blue-200">
            Twitter
          </a>
        </div>
        <p className="mt-4">
          Subscribe to our newsletter for the latest updates!
        </p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="bg-gray-100 dark:bg-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-6 rounded-md ml-2 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 Geek Food. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
