import { useState } from 'react';
import { PRODUCTS } from '../../assets/companyData';

interface ProductShowcaseProps {
    title?: string;
    subtitle?: string;
    id?: string;
}

export const ProductShowcase = ({
    title = "What We Manufacture",
    subtitle = "Precision components engineered to exceed OEM specifications",
    id
}: ProductShowcaseProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const nextProduct = () => {
        setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
    };

    const currentProduct = PRODUCTS[currentIndex];

    return (
        <section id={id} className="py-20 bg-white">
            {/* Image Modal/Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Product Full View"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300 bg-white p-4"
                            onClick={(e) => e.stopPropagation()}
                            style={{ filter: 'contrast(1.1) brightness(1.05) saturate(1.1)' }}
                        />
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 w-full max-w-7xl">
                <div className="text-center mb-14">
                    <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Product Range</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{title}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Product Display */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                        {/* Product Image (Left) */}
                        <div
                            className="flex-1 w-full lg:w-1/2 cursor-pointer group"
                            onClick={() => setSelectedImage(currentProduct.image)}
                        >
                            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                                {/* White Background Container - Made Larger */}
                                <div className="bg-white p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[600px]">
                                    <img
                                        src={currentProduct.image}
                                        alt={currentProduct.name}
                                        className="w-full h-full max-h-[550px] object-contain transition-transform duration-500 group-hover:scale-105"
                                        style={{ filter: 'contrast(1.1) brightness(1.05) saturate(1.1)' }}
                                    />
                                </div>

                                {/* View Hint Overlay */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <span className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow-xl flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Click to Zoom
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Product Details (Right) */}
                        <div className="flex-1 lg:w-1/2 text-center lg:text-left">
                            <div className="mb-6">
                                <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
                                    Product {currentIndex + 1} / {PRODUCTS.length}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight break-words hyphens-auto">{currentProduct.name}</h3>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-primary/20 pl-6">{currentProduct.desc}</p>

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={prevProduct}
                                        className="w-16 h-16 bg-white hover:bg-primary hover:text-white border border-slate-200 text-slate-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                        aria-label="Previous Product"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={nextProduct}
                                        className="w-16 h-16 bg-white hover:bg-primary hover:text-white border border-slate-200 text-slate-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                        aria-label="Next Product"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Product Indicators */}
                                <div className="flex gap-3 bg-slate-100 px-4 py-3 rounded-full">
                                    {PRODUCTS.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={`h-3 rounded-full transition-all duration-300 ${i === currentIndex
                                                ? 'bg-primary w-10'
                                                : 'bg-slate-300 hover:bg-slate-400 w-3'
                                                }`}
                                            aria-label={`Go to product ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
