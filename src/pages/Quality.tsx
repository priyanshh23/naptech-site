import { ClientCarousel } from '../components/UI/ClientCarousel';
import { QUALITY_POLICY, QUALITY_OBJECTIVES, QUALITY_INSTRUMENTS, CERTIFICATIONS } from '../assets/companyData';

const Quality = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Premium Hero Section with Image */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/80 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="text-center lg:text-left">
                            <span className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-5 py-2 rounded-full text-sm mb-6 border border-white/20">
                                ✓ Quality Assurance
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Commitment to <span className="text-primary">Excellence</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10">
                                Rigorous quality systems and advanced instrumentation ensuring zero-defect manufacturing
                            </p>

                            {/* Quick Stats Badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white font-medium border border-white/20 text-sm">
                                    📜 ISO 9001:2015 Certified
                                </span>
                                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white font-medium border border-white/20 text-sm">
                                    🏭 MACE Approved
                                </span>
                                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white font-medium border border-white/20 text-sm">
                                    🎯 Zero PPM Target
                                </span>
                            </div>
                        </div>

                        {/* Right Side - Quality Room Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <img
                                    src="/quality-room.jpg"
                                    alt="Quality Control Room - Naptech Precision Engineering"
                                    className="w-full h-[300px] md:h-[350px] object-cover"
                                    style={{ filter: 'brightness(1.15) contrast(1.1) saturate(1.1)' }}
                                />
                                {/* Overlay Label */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                                    <span className="text-white font-semibold text-lg flex items-center gap-2">
                                        🔬 Our Quality Control Room
                                    </span>
                                    <p className="text-white/70 text-sm mt-1">State-of-the-art inspection facility</p>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Policy */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full"></div>
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">Our Promise</span>
                                <h2 className="text-3xl md:text-4xl font-bold">Quality Policy</h2>
                            </div>
                            <p className="text-center text-white/90 text-lg md:text-xl leading-relaxed">
                                {QUALITY_POLICY}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Objectives */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Our Goals</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Quality Objectives</h2>
                        <p className="text-slate-600">Measurable targets driving continuous improvement</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {QUALITY_OBJECTIVES.map((obj, i) => (
                            <div key={i} className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <p className="font-semibold text-slate-700 text-lg">{obj}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDCA Cycle */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Methodology</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">PDCA Cycle</h2>
                        <p className="text-slate-600">Continuous improvement framework driving operational excellence</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { letter: 'P', title: 'Plan', desc: 'Define objectives & processes', color: 'from-blue-500 to-blue-600' },
                            { letter: 'D', title: 'Do', desc: 'Implement the planned process', color: 'from-primary to-emerald-600' },
                            { letter: 'C', title: 'Check', desc: 'Measure & analyze results', color: 'from-amber-500 to-orange-500' },
                            { letter: 'A', title: 'Act', desc: 'Take corrective actions', color: 'from-red-500 to-pink-500' },
                        ].map((item, i) => (
                            <div key={i} className="group text-center">
                                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                                    <span className="text-white text-4xl font-bold">{item.letter}</span>
                                </div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Instrumentation */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Equipment</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Quality Instrumentation</h2>
                        <p className="text-slate-600">Advanced measuring equipment ensuring precision verification</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {QUALITY_INSTRUMENTS.map((inst, i) => (
                            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 text-center hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="h-64 overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
                                    <img
                                        src={inst.image}
                                        alt={inst.name}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-800 text-base">{inst.name}</h3>
                                    <p className="text-slate-500 text-xs mt-1">{inst.fullName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section id="certifications" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Accreditations</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Certifications & Approvals</h2>
                        <p className="text-slate-600">Industry-recognized standards we comply with</p>
                    </div>

                    <div className="flex justify-center gap-8 flex-wrap">
                        {/* MACE Approved Box */}
                        <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-primary rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center min-w-[300px]">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <span className="text-4xl">{CERTIFICATIONS[0].icon}</span>
                            </div>
                            <span className="font-bold text-primary text-2xl mb-2">{CERTIFICATIONS[0].name}</span>
                            <p className="text-slate-600 font-medium text-center">{CERTIFICATIONS[0].desc}</p>
                        </div>

                        {/* ISO Certificate */}
                        <a
                            href="/iso-certificate.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-br from-white to-slate-50 border-2 border-primary rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-w-[300px] cursor-pointer group"
                        >
                            <div className="relative">
                                <img
                                    src="/iso-certificate.jpg"
                                    alt="ISO 9001:2015 Certificate"
                                    className="h-36 w-auto object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm transition-opacity">View Certificate</span>
                                </div>
                            </div>
                            <div className="ml-6 text-left">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                                    <span className="text-2xl">📜</span>
                                </div>
                                <span className="font-bold text-primary text-xl block">ISO 9001:2015</span>
                                <p className="text-slate-600 text-sm">Quality Management System</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Clients Carousel */}
            <ClientCarousel title="Trusted By" />
        </div>
    );
};

export default Quality;

