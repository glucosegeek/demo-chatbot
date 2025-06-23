import React, { useState } from 'react';
import { ShoppingCart, ArrowLeft, Package, Ruler, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Klasyczna Czerwona Bluza",
    price: 320,
    images: [
      "/images/red-hoodie.png",
      "/images/red-hoodie2.png",
      "/images/red-hoodie3.png",
      "/images/red-hoodie4.png"
    ],
    description: "Mieszanka premium bawełny organicznej o luźnym kroju. Idealna do noszenia na co dzień i warstwowego stylizowania.",
    color: "Czerwona",
    composition: "80% Bawełna Organiczna, 20% Poliester z Recyklingu",
    sizing: "Rozmiar zgodny z tabelą. Model ma 183 cm wzrostu i nosi rozmiar M. Dostępne rozmiary XS-XXL.",
    care: "Prać w zimnej wodzie z podobnymi kolorami. Suszyć w suszarce na niskiej temperaturze. Nie wybielać ani prasować bezpośrednio na nadruku."
  },
  {
    id: 2,
    name: "Północna Czarna Bluza",
    price: 340,
    images: ["/images/black-hoodie.png"],
    description: "Ponadczasowa czarna bluza z miękką podszewką z polaru. Niezbędny element garderoby na każdą porę roku.",
    color: "Czarna",
    composition: "100% Premium Bawełna z Szczotkowanym Polarem Wewnątrz",
    sizing: "Luźny krój. Model ma 173 cm wzrostu i nosi rozmiar S. Rozmiary unisex dostępne XS-XXL.",
    care: "Prać w zimnej wodzie osobno. Zalecane suszenie na powietrzu. W razie potrzeby prasować na niskiej temperaturze."
  },
  {
    id: 3,
    name: "Czysta Biała Bluza",
    price: 300,
    images: ["/images/white-hoodie.png"],
    description: "Czysta biała bluza wykonana z materiałów zrównoważonych. Minimalistyczny design spotyka się z komfortem.",
    color: "Biała",
    composition: "85% Zrównoważona Bawełna, 15% Mieszanka Modal",
    sizing: "Nowoczesny krój z lekkim zwężeniem. Model ma 168 cm wzrostu i nosi rozmiar M. Rozmiar zgodny z tabelą.",
    care: "Prać tylko z białymi ubraniami w zimnej wodzie. W razie potrzeby używać wybielacza tlenowego. Suszyć w suszarce na średniej temperaturze."
  },
  {
    id: 4,
    name: "Leśna Zielona Bluza",
    price: 360,
    images: ["/images/green-hoodie.png"],
    description: "Bogata leśna zieleń o trwałej konstrukcji. Idealna do aktywności na świeżym powietrzu i miejskiego stylu.",
    color: "Zielona",
    composition: "70% Bawełna Organiczna, 25% Poliester z Recyklingu, 5% Elastan",
    sizing: "Sportowy krój z rozciągliwością. Model ma 188 cm wzrostu i nosi rozmiar L. Rozważ większy rozmiar dla luźniejszego dopasowania.",
    care: "Prać w zimnej wodzie z ciemnymi kolorami. Preferowane suszenie na powietrzu. Nie używać płynu do zmiękczania tkanin."
  },
  {
    id: 5,
    name: "Oceaniczna Niebieska Bluza",
    price: 332,
    images: ["/images/blue-hoodie.png"],
    description: "Głęboki oceaniczny błękit o nowoczesnym kroju. Mieszanka premium bawełny dla najwyższego komfortu i dopasowania.",
    color: "Niebieska",
    composition: "90% Bawełna Pima, 10% Poliester dla Zachowania Kształtu",
    sizing: "Współczesny krój. Model ma 178 cm wzrostu i nosi rozmiar M. Rozmiar zgodny z tabelą z miejscem na warstwowe noszenie.",
    care: "Prać w zimnej wodzie z podobnymi kolorami. Suszyć w suszarce na niskiej temperaturze. Wyjmować natychmiast, aby zapobiec pomiarszczeniu."
  },
  {
    id: 6,
    name: "Ciepła Beżowa Bluza",
    price: 312,
    images: ["/images/beige-hoodie.png"],
    description: "Miękka beżowa bluza o luksusowej fakturze. Wszechstronny neutralny odcień do bezproblemowego stylizowania.",
    color: "Beżowa",
    composition: "75% Bawełna Supima, 25% Mieszanka Kaszmiru",
    sizing: "Luksusowy luźny krój. Model ma 170 cm wzrostu i nosi rozmiar S. Hojne rozmiary dla komfortu.",
    care: "Delikatny cykl prania w zimnej wodzie. Suszyć na płasko. Zalecane czyszczenie profesjonalne dla najlepszych rezultatów."
  },
  {
    id: 7,
    name: "Słoneczna Żółta Bluza",
    price: 320,
    images: ["/images/yellow-hoodie.png"],
    description: "Żywa żółta bluza o premium wykończeniu. Odważny wybór kolorystyczny dla pewnych siebie stylizacji.",
    color: "Żółta",
    composition: "82% Bawełna Ring-Spun, 18% Poliester French Terry",
    sizing: "Standardowy krój o nowoczesnej sylwetce. Model ma 175 cm wzrostu i nosi rozmiar M. Rozmiar zgodny z tabelą.",
    care: "Prać na lewą stronę w zimnej wodzie. Unikać bezpośredniego światła słonecznego podczas suszenia. W razie potrzeby prasować na lewą stronę."
  },
  {
    id: 8,
    name: "Węglowa Szara Bluza",
    price: 352,
    images: ["/images/grey-hoodie.png"],
    description: "Wyrafinowana węglowa szarość z dopracowanymi detalami. Idealna równowaga stylu i funkcjonalności.",
    color: "Szara",
    composition: "88% Premium Bawełna, 12% Mieszanka Poliestrowa z Recyklingu",
    sizing: "Dopasowany krój o czystych liniach. Model ma 185 cm wzrostu i nosi rozmiar L. Rozmiar zgodny z tabelą.",
    care: "Prać w zimnej wodzie z podobnymi kolorami. Suszyć w suszarce na niskiej temperaturze. Parować lub prasować na średniej temperaturze."
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
              Powrót do Kolekcji
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
                  alt={`${selectedProduct.name} - Zdjęcie ${currentImageIndex + 1}`}
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
                        alt={`${selectedProduct.name} miniatura ${index + 1}`}
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
                  {selectedProduct.price} zł
                </div>

                <button className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3 text-lg">
                  <ShoppingCart className="h-6 w-6" />
                  <span>Dodaj do Koszyka</span>
                </button>
              </div>

              {/* Product Details */}
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <Package className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Skład</h3>
                    <p className="text-gray-600">{selectedProduct.composition}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Ruler className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Informacje o Rozmiarach</h3>
                    <p className="text-gray-600">{selectedProduct.sizing}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Droplets className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Instrukcje Pielęgnacji</h3>
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
            Kolekcja Premium Bluz
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Odkryj komfort i styl w każdym elemencie
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
                    +{product.images.length - 1} więcej
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
                    {product.price} zł
                  </span>
                  
                  <div className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
                    Zobacz Szczegóły →
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