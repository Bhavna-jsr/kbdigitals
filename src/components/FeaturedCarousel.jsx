import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedCarousel = ({ featuredBrands }) => {
  return (
    <div className="w-full bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-purple-400',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-600',
        }}
        loop={true}
        className="featured-carousel"
      >
        {featuredBrands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="w-full">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px]">
                  {/* Left Side - Text Content */}
                  <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Get over{' '}
                      <span className="text-purple-600">{brand.cashBack}</span>
                      <br />
                      with {brand.name}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl">
                      {brand.description || 'Join today and get rewarded with Cash Back at the stores you love every time you shop. Savings are waiting, so sign up now to start earning.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Shop Now
                      </button>
                      <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 border-2 border-purple-600">
                        Learn More
                      </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 pt-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">17M</div>
                        <div className="text-sm text-gray-600">Members</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">$4.6B</div>
                        <div className="text-sm text-gray-600">Cash Back earned</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex text-green-500">
                          {'★'.repeat(5)}
                        </div>
                        <div className="text-sm text-gray-600">
                          33,000+ reviews
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Featured Brand Cards */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="relative w-full max-w-md mx-auto">
                      {/* Background illustration - people sitting */}
                      <div className="relative bg-purple-200/50 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="aspect-square bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">{brand.logo}</div>
                            <div className="text-2xl font-bold text-gray-800">{brand.name}</div>
                          </div>
                        </div>
                        
                        {/* Floating brand cards */}
                        <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-xl p-3 flex items-center gap-2 animate-float">
                          <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-lg">
                            {brand.logo}
                          </div>
                          <div className="text-sm font-semibold text-purple-600">
                            {brand.cashBack}
                          </div>
                        </div>
                        
                        {brand.boosted && (
                          <div className="absolute top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-1 animate-bounce-slow">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">Boosted</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .featured-carousel .swiper-pagination {
          position: relative;
          padding: 20px 0;
        }
        
        .featured-carousel .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

FeaturedCarousel.propTypes = {
  featuredBrands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      cashBack: PropTypes.string.isRequired,
      boosted: PropTypes.bool.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default FeaturedCarousel;
