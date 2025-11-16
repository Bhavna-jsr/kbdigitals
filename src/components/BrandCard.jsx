import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
  const handleClick = () => {
    // In a real app, this would navigate to the brand's page
    console.log(`Navigating to ${brand.url}`);
    // For now, we'll just use window.location or you can integrate with React Router later
    window.location.hash = brand.url;
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
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
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
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
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
