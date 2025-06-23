import React, { useState } from 'react';
import { ShoppingCart, ArrowLeft, Package, Ruler, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Red Hoodie",
    price: 79.99,
    images: [
      "/images/red-hoodie.png",
      "/images/red-hoodie2.png",
      "/images/red-hoodie3.png",
      "/images/red-hoodie4.png"
    ],
    description: "Premium organic cotton blend with relaxed fit. Perfect for casual wear and layering.",
    color: "Red",
    composition: "80% Organic Cotton, 20% Recycled Polyester",
    sizing: "Runs true to size. Model is 6'0\" wearing size M. Available in XS-XXL.",
    care: "Machine wash cold with like colors. Tumble dry low. Do not bleach or iron directly on design."
  },
  {
    id: 2,
    name: "Midnight Black Hoodie",
    price: 84.99,
    images: ["/images/black-hoodie.png"],
    description: "Timeless black hoodie with soft fleece lining. Essential wardrobe staple for any season.",
    color: "Black",
    composition: "100% Premium Cotton with Brushed Fleece Interior",
    sizing: "Relaxed fit design. Model is 5'8\" wearing size S. Unisex sizing available XS-XXL.",
    care: "Machine wash cold separately. Hang dry recommended. Iron on low heat if needed."
  },
  {
    id: 3,
    name: "Pure White Hoodie",
    price: 74.99,
    images: ["/images/white-hoodie.png"],
    description: "Clean white hoodie made from sustainable materials. Minimalist design meets comfort.",
    color: "White",
    composition: "85% Sustainable Cotton, 15% Modal Blend",
    sizing: "Modern fit with slight taper. Model is 5'6\" wearing size M. True to size fit.",
    care: "Wash with whites only in cold water. Use oxygen bleach if needed. Tumble dry medium."
  },
  {
    id: 4,
    name: "Forest Green Hoodie",
    price: 89.99,
    images: ["/images/green-hoodie.png"],
    description: "Rich forest green with durable construction. Ideal for outdoor activities and urban style.",
    color: "Green",
    composition: "70% Organic Cotton, 25% Recycled Polyester, 5% Elastane",
    sizing: "Athletic fit with stretch. Model is 6'2\" wearing size L. Consider sizing up for looser fit.",
    care: "Machine wash cold with dark colors. Air dry preferred. Do not use fabric softener."
  },
  {
    id: 5,
    name: "Ocean Blue Hoodie",
    price: 82.99,
    images: ["/images/blue-hoodie.png"],
    description: "Deep ocean blue with modern cut. Premium cotton blend for superior comfort and fit.",
    color: "Blue",
    composition: "90% Pima Cotton, 10% Polyester for Shape Retention",
    sizing: "Contemporary fit. Model is 5'10\" wearing size M. Fits true to size with room for layering.",
    care: "Cold wash with similar colors. Tumble dry low. Remove promptly to prevent wrinkles."
  },
  {
    id: 6,
    name: "Warm Beige Hoodie",
    price: 77.99,
    images: ["/images/beige-hoodie.png"],
    description: "Soft beige hoodie with luxurious texture. Versatile neutral tone for effortless styling.",
    color: "Beige",
    composition: "75% Supima Cotton, 25% Cashmere Blend",
    sizing: "Luxury relaxed fit. Model is 5'7\" wearing size S. Generous sizing for comfort.",
    care: "Gentle cycle cold wash. Lay flat to dry. Professional cleaning recommended for best results."
  },
  {
    id: 7,
    name: "Sunshine Yellow Hoodie",
    price: 79.99,
    images: ["/images/yellow-hoodie.png"],
    description: "Vibrant yellow hoodie with premium finish. Bold color choice for confident style statements.",
    color: "Yellow",
    composition: "82% Ring-Spun Cotton, 18% Polyester French Terry",
    sizing: "Standard fit with modern silhouette. Model is 5'9\" wearing size M. True to size.",
    care: "Wash inside out in cold water. Avoid direct sunlight when drying. Iron inside out if needed."
  },
  {
    id: 8,
    name: "Charcoal Gray Hoodie",
    price: 87.99,
    images: ["/images/grey-hoodie.png"],
    description: "Sophisticated charcoal gray with refined details. Perfect balance of style and functionality.",
    color: "Gray",
    composition: "88% Premium Cotton, 12% Recycled Polyester Blend",
    sizing: "Tailored fit with clean lines. Model is 6'1\" wearing size L. Fits true to size.",
    care: "Machine wash cold with like colors. Tumble dry low. Steam or iron on medium heat."
  }
];

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    setCurrentImageIndex(0);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  if (currentView === 'product' && selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Product Page Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={handleBackToLanding}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Collection
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedProduct.name}
            </h1>
          </div>
        </header>

        {/* Product Details */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows for multiple images */}
                {selectedProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProduct.images.length}
                    </div>
                  </>
                )}
              </div>
              
              {/* Thumbnail navigation for multiple images */}
              {selectedProduct.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {selectedProduct.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        index === currentImageIndex 
                          ? 'border-gray-900' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    {selectedProduct.color}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>
                
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>
                
                <div className="text-4xl font-bold text-gray-900 mb-8">
                  ${selectedProduct.price}
                </div>

                <button className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3 text-lg">
                  <ShoppingCart className="h-6 w-6" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Product Details */}
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <Package className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Composition</h3>
                    <p className="text-gray-600">{selectedProduct.composition}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Ruler className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sizing Information</h3>
                    <p className="text-gray-600">{selectedProduct.sizing}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Droplets className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Care Instructions</h3>
                    <p className="text-gray-600">{selectedProduct.care}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Premium Hoodie Collection
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Discover comfort and style in every piece
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Multiple images indicator */}
                {product.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    +{product.images.length - 1} more
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {product.color}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  
                  <div className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
                    View Details →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;