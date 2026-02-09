import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { ClientCarousel } from '../components/UI/ClientCarousel';
import { ProductShowcase } from '../components/Sections/ProductShowcase';
import { MATERIALS } from '../assets/companyData';

const Products = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="bg-white min-h-screen">
            {/* Premium Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/80 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-5 py-2 rounded-full text-sm mb-6 border border-white/20">
                        ⚙️ Our Products
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Precision-Engineered <span className="text-primary">Components</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        High-quality CNC machined parts with tight tolerances, designed for automotive and industrial applications
                    </p>
                </div>
            </section>

            {/* Product Carousel Section */}
            <ProductShowcase id="product-range" />

            {/* Trusted Clients Carousel */}
            <div className="py-10 bg-slate-50 border-b border-slate-200/50">
                <div className="container mx-auto px-4">
                    <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">Trusted By Industry Leaders</p>
                    <ClientCarousel />
                </div>
            </div>

            {/* What Sets Us Apart */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Our Edge</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">What Sets Us Apart</h2>
                        <p className="text-slate-600">Quality differentiators that make us the preferred choice</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: '📐', title: 'Tight Tolerances', desc: '±0.01mm precision', gradient: 'from-blue-500 to-cyan-400' },
                            { icon: '✅', title: 'High Accuracy', desc: 'CMM verified', gradient: 'from-emerald-500 to-green-400' },
                            { icon: '🔄', title: 'Consistency', desc: 'SPC controlled', gradient: 'from-purple-500 to-pink-400' },
                            { icon: '⏰', title: 'On-Time Delivery', desc: '98% track record', gradient: 'from-orange-500 to-amber-400' },
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-2 text-center">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <p className="font-bold text-xl text-slate-800 mb-2">{item.title}</p>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials We Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Materials</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Materials We Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Expert machining across a wide range of metals and alloys</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {MATERIALS.map((material, i) => (
                            <div key={i} className="group bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <span className="font-bold text-lg">{material}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Custom Components?</h2>
                    <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                        Our engineering team is ready to manufacture precision parts that meet your exact specifications.
                    </p>
                    <Link to="/contact#quote-form">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Request a Quote →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Products;
