import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const { id, imageUrl, title, bedrooms, bathrooms, location, price } =
    property;

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500">{location}</p>
        <p className="text-xl font-bold text-sky-700">{price}</p>

        {/* Additional Property Info */}
        <div className="mt-2 flex justify-between text-gray-600">
          <span>🏠 {bedrooms} Bedrooms</span>
          <span>🛁 {bathrooms} Bathrooms</span>
        </div>

        <Link to={`/properties/${id}`}>
          <button className="mt-4 bg-sky-700 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-sky-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
