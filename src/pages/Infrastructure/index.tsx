import { INFRA_HIGHLIGHTS, MACHINES, OPERATION_MANAGEMENT } from '../../assets/companyData';
import { INFRA_IMAGES } from '../../assets/images';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button';

const Infrastructure = () => {
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
                        🏭 Our Infrastructure
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        World-Class <span className="text-primary">Facilities</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        A robust manufacturing ecosystem built for precision, scale, and consistency
                    </p>

                    {/* Quick Stats Badges Removed */}
                </div>
            </section>

            {/* Facility Highlights */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Facility</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Manufacturing Excellence</h2>
                        <p className="text-slate-600">State-of-the-art infrastructure supporting precision manufacturing</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {INFRA_HIGHLIGHTS.map((section, i) => (
                            <div key={i} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2">
                                <div className="h-60 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                                    <img
                                        // @ts-ignore
                                        src={INFRA_IMAGES[section.imageKey]}
                                        alt={section.title}
                                        className={`w-full h-full transition-transform duration-500 ${section.imageKey === 'fixtures'
                                            ? 'object-contain scale-90 group-hover:scale-100'
                                            : 'object-cover group-hover:scale-110'
                                            }`}
                                    />
                                </div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 mb-3">{section.title}</h2>
                                    <p className="text-slate-500 mb-6 leading-relaxed">{section.desc}</p>
                                    <ul className="space-y-3">
                                        {section.highlights.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                                                <span className="w-2 h-2 bg-gradient-to-br from-primary to-emerald-600 rounded-full mr-3"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Machine List */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Equipment</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Machine List</h2>
                        <p className="text-slate-600">Our fleet of precision CNC machines</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* VMC */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                                    <span className="text-2xl">🖥️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">VMC Setup</h3>
                            </div>
                            <ul className="space-y-4">
                                {MACHINES.vmc.map((m, i) => (
                                    <li key={i} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                                        <span className="font-semibold text-slate-700">{m.make}</span>
                                        <span className="bg-gradient-to-r from-primary to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow">{m.quantity} Units</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CNC Turning */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                                    <span className="text-2xl">⚙️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">CNC Turning</h3>
                            </div>
                            <ul className="space-y-4">
                                {MACHINES.cnc.map((m, i) => (
                                    <li key={i} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                                        <span className="font-semibold text-slate-700">{m.make}</span>
                                        <span className="bg-gradient-to-r from-primary to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow">{m.quantity} Units</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SPM & Others */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                                    <span className="text-2xl">🔧</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">SPM & Others</h3>
                            </div>
                            <ul className="space-y-3">
                                {MACHINES.spm.map((m, i) => (
                                    <li key={i} className="flex items-center text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                                        <span className="w-3 h-3 bg-gradient-to-br from-primary to-emerald-600 rounded-full mr-3"></span>
                                        <span className="font-medium">{m.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operation Management */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Operation Management</h2>
                        <p className="text-slate-600">Systematic processes ensuring quality and traceability</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {OPERATION_MANAGEMENT.map((item, i) => (
                            <div key={i} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-18 h-18 mx-auto mb-5 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center text-4xl text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all p-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Our Facility</h2>
                    <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                        Schedule a visit to see our world-class manufacturing capabilities in action.
                    </p>
                    <Link to="/contact#quote-form">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Schedule a Visit →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Infrastructure;

