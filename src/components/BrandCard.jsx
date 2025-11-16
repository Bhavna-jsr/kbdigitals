import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';

const BrandCard = ({ brand }) => {
  const handleClick = () => {
    // Open brand URL in a new tab
    console.log(`Opening ${brand.url} in new tab`);
    window.open(brand.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer p-6 flex flex-col items-start gap-3 border border-gray-100 hover:border-purple-200 group"
    >
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3 w-full">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg text-2xl group-hover:scale-110 transition-transform duration-300">
          {brand.logo}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            {brand.name}
            <FiExternalLink className="w-4 h-4 text-gray-400" />
          </h3>
        </div>
      </div>

      {/* Cash Back Info */}
      <div className="w-full">
        <p className="text-purple-600 font-semibold text-base">{brand.cashBack}</p>
      </div>

      {/* Boosted Badge */}
      {brand.boosted && (
        <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <HiCheckCircle className="w-4 h-4" />
          Boosted
        </div>
      )}
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    cashBack: PropTypes.string.isRequired,
    boosted: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default BrandCard;
