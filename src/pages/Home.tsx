import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { ClientCarousel } from '../components/UI/ClientCarousel';
import { STATS, INDUSTRIES, PROCESS_CHAIN, CORE_VALUES } from '../assets/companyData';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '', duration = 400 }: { end: number | string, suffix?: string, duration?: number }) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const numericEnd = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, '')) || 0 : end;

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const increment = numericEnd / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= numericEnd) {
                setCount(numericEnd);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, numericEnd, duration]);

    return <div ref={ref}>{count}{suffix}</div>;
};

const Home = () => {
    return (
        <>
            {/* Premium Hero Section - Matching Mockup */}
            <section className="relative py-12 flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-primary/80 overflow-hidden">
                {/* Background Glow Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white">
                                Precision CNC<br />
                                Machining <span className="text-primary">Excellence</span><br />
                                Since 2014
                            </h1>

                            <p className="text-lg text-white/70 mb-6 max-w-lg leading-relaxed">
                                Naptech Precision Engineering delivers high-quality, tight-tolerance components using advanced multi axis CNC technology for a global clientele. We turn complex designs into reality with unmatched accuracy.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-6">
                                <Link to="/contact#quote-form">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-full shadow-xl">
                                        Get a Quote
                                    </Button>
                                </Link>
                                <Link to="/products#product-range">
                                    <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-8 rounded-full">
                                        View Our Products
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right - Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="absolute -inset-6 bg-gradient-to-r from-primary/50 to-emerald-500/50 rounded-3xl blur-2xl opacity-40"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                                <img
                                    src="/hero-factory.jpg"
                                    alt="Naptech Precision Engineering Manufacturing Floor"
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partners - Clean White Background */}
            <div className="pt-20">
                <ClientCarousel title="Trusted by Leading OEMs" subtitle="Building long-term partnerships through quality and reliability" />
            </div>

            {/* Why Choose Naptech - Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-5 py-2 rounded-full text-sm mb-4">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span className="text-2xl font-bold">Why Choose Naptech?</span>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: 99.8, suffix: '%', label: 'On-Time Delivery Rate', icon: '📦', color: 'text-emerald-600' },
                            { value: 100, suffix: 'K+', label: 'Annual Production Capacity', icon: '🏭', color: 'text-blue-600' },
                            { value: STATS.employees, suffix: '+', label: 'Skilled Engineers & Technicians', icon: '👷', color: 'text-purple-600' },
                            { value: 30, suffix: '%', label: 'Cost Reduction For Clients', icon: '💰', color: 'text-orange-600' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 text-center group hover:-translate-y-2">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Process - Timeline */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Our Streamlined Manufacturing Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">From initial drawings to final delivery, our structured workflow ensures precision and quality at every stage</p>
                    </div>

                    {/* Desktop Process Cards */}
                    <div className="relative">
                        <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full z-0 transform -translate-y-1/2"></div>
                        <div className="hidden md:grid grid-cols-6 gap-4 mb-12 relative z-10">
                            {PROCESS_CHAIN.map((step, i) => (
                                <div key={i} className="group text-center">
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform relative border-4 border-slate-50">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-base text-slate-800 mb-1">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-4">
                        {PROCESS_CHAIN.map((step, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-white flex items-center justify-center text-lg shadow-lg">
                                        {step.icon}
                                    </div>
                                    {i < PROCESS_CHAIN.length - 1 && <div className="w-0.5 h-12 bg-primary/30"></div>}
                                </div>
                                <div className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                                    <div className="text-xs text-primary font-bold">Step {step.step}</div>
                                    <h3 className="font-bold text-slate-800">{step.title}</h3>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quality Commitment Banner */}
                    <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-3xl p-10 text-white text-center mt-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Committed to Zero-Defect Manufacturing</h3>
                            <p className="text-white/80 max-w-2xl mx-auto text-lg">
                                Our PDCA-based quality management system ensures that every component meets the highest standards of precision and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Serving Diverse Industries</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Delivering precision-engineered components across automotive, industrial, and commercial sectors</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {INDUSTRIES.map((industry, i) => (
                            <div key={i} className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <img src={industry.image} alt={`${industry.name} Industry - Precision Components by Naptech`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="font-bold text-xl text-white mb-1">{industry.name}</h3>
                                    <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">Precision components tailored for {industry.name.toLowerCase()} applications</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guiding Principles - The 4C Philosophy */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Our Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">The 4C Philosophy</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Core principles that guide every decision and drive our commitment to manufacturing excellence</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {CORE_VALUES.map((value, i) => (
                            <div key={i} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center text-4xl text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                                    {value.icon}
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-slate-800">{value.title}</h3>
                                <p className="text-slate-500">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-20 w-64 h-64 bg-primary rounded-full blur-[80px]"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                    <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">Let's discuss how our precision engineering capabilities can meet your manufacturing requirements</p>
                    <Link to="/contact#quote-form">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg">
                            Request a Quote →
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
