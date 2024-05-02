import PropTypes from "prop-types";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div id="menu">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt="Food"
          className="w-full h-96  object-cover"
          style={{ minHeight: "200px" }} // Set a minimum height to ensure the card has a consistent size
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 text-sm">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Card;
