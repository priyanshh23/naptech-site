import { COMPANY, STATS, CORE_VALUES, CERTIFICATIONS } from '../assets/companyData';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';

const About = () => {
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
                        🌟 About Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Excellence in <span className="text-primary">Engineering</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        {COMPANY.tagline}
                    </p>

                    {/* Quick Stats Badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
                            📅 Est. {COMPANY.established}
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
                            🏭 {STATS.floorSpace} {STATS.floorSpaceUnit}
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
                            👥 {STATS.employees}+ Team
                        </span>
                    </div>
                </div>
            </section>

            {/* Our Story & Quick Facts Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Story Card */}
                        <div className="bg-slate-50 rounded-4xl p-10 border border-slate-100 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all group-hover:scale-110 duration-700"></div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6 relative">Our Story</h2>
                            <div className="space-y-6 text-slate-600 relative leading-relaxed text-lg">
                                <p>
                                    Established in <span className="font-semibold text-primary">January {COMPANY.established}</span>, Naptech Precision Engineering has grown from a humble beginning to become a trusted name in high-end precision machining solutions.
                                </p>
                                <p>
                                    What started as a vision to deliver uncompromised quality has now evolved into a state-of-the-art manufacturing hub. We assist our customers from the <span className="font-semibold text-slate-800">development stage</span> all the way to <span className="font-semibold text-slate-800">mass production</span>, ensuring transparency and reliability at every step.
                                </p>
                                <p>
                                    Our tagline, <span className="italic font-medium text-emerald-600">"{COMPANY.tagline}"</span>, is not just a slogan—it is the foundation of our work culture.
                                </p>
                            </div>
                        </div>

                        {/* Quick Facts Card */}
                        <div className="bg-slate-900 rounded-4xl p-10 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-tr-full blur-2xl group-hover:bg-emerald-500/30 transition-all duration-700"></div>
                            <h2 className="text-3xl font-bold mb-8 relative">At a Glance</h2>
                            <div className="space-y-6 relative">
                                {[
                                    { label: 'Location', value: 'Gurgaon, Haryana, India', icon: '📍' },
                                    { label: 'Core Expertise', value: 'Precision Machining & Assembly', icon: '⚙️' },
                                    { label: 'Total Investment', value: STATS.investment, icon: '💰' },
                                    { label: 'Annual Sales', value: STATS.annualSales, icon: '📈' },
                                    { label: 'Machine Fleet', value: `${STATS.cncMachines} CNC Machines`, icon: '🤖' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 text-xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm font-medium">{item.label}</p>
                                            <p className="font-bold text-lg">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values (4C) - Premium Cards */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Our DNA</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Our Core Values</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">The "4C" philosophy that drives our everyday operations</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CORE_VALUES.map((value, i) => (
                            <div key={i} className="group bg-white rounded-3xl p-8 hover:bg-primary transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-transparent">
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors duration-500">{value.title}</h3>
                                <p className="text-slate-500 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Philosophy Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Quality Philosophy</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: '🛡️', text: 'Zero Defect Policy' },
                            { icon: '🚚', text: 'On-Time Delivery' },
                            { icon: '⚙️', text: 'Consistency & Precision' },
                            { icon: '📊', text: 'Continuous Improvement' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center text-5xl mb-6 shadow-lg group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-700">{item.text}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications - Modernized */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12">Certifications & Approvals</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {CERTIFICATIONS.map((cert, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl px-10 py-6 shadow-md hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
                                <span className="text-4xl">{cert.icon}</span>
                                <div className="text-left">
                                    <h3 className="font-bold text-slate-800 text-lg">{cert.name}</h3>
                                    <p className="text-sm text-slate-500">{cert.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consistent CTA Footer */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work with us?</h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Experience precision engineering that drives performance. Let's discuss your next project.
                    </p>
                    <Link to="/contact#quote-form">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Get a Quote →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
