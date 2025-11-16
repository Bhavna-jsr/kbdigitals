import { getFeaturedBrands, getAllBrands } from '../data/brands';
import FeaturedCarousel from '../components/FeaturedCarousel';
import BrandCard from '../components/BrandCard';
import ContactUs from '../components/ContactUs';

const Home = () => {
  const featuredBrands = getFeaturedBrands();
  const allBrands = getAllBrands();

  return (
    <div className="w-full">
      {/* Featured Carousel Section */}
      <section id="home" className="w-full">
        <FeaturedCarousel featuredBrands={featuredBrands} />
      </section>

      {/* All Brands Grid Section */}
      <section id="brands" className="w-full bg-gray-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              All Brands
            </h2>
            <p className="text-gray-600">
              Shop your favorite brands and earn cash back on every purchase
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {allBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200 border-2 border-purple-600 shadow-md hover:shadow-lg">
              Load More Brands
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
};

export default Home;
