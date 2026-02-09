import React from 'react';
import { ORG_STRUCTURE, STATS } from '../assets/companyData';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '' }: { end: number | string, suffix?: string }) => {
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
        const increment = numericEnd / (400 / 16);
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
    }, [isVisible, numericEnd]);

    return <div ref={ref}>{count}{suffix}</div>;
};

// What We Deliver items
const WHAT_WE_DELIVER = [
    { title: 'Hubs', desc: 'Precision hubs', icon: '⚙️' },
    { title: 'Shafts', desc: 'Machined shafts', icon: '🔩' },
    { title: 'Housings', desc: 'Complex housings', icon: '🏠' },
    { title: 'Components', desc: 'Custom parts', icon: '🔧' },
];


const Team = () => {
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
                        👥 Meet Our Team
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        The People Behind <span className="text-primary">Precision</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        A lean, agile team of 80+ skilled professionals delivering world-class CNC machining with unwavering commitment to quality.
                    </p>

                    {/* Quick Stats Badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
                            🏭 Lean Structure
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
                            ⚡ Maximum Efficiency
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
                            🎯 24/7 Operations
                        </span>
                    </div>
                </div>
            </section>

            {/* Team Strength Stats */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Our Strength</h2>
                        <p className="text-slate-600">Dedicated professionals driving manufacturing excellence</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: STATS.employees, suffix: '+', label: 'Total Workforce', icon: '👥', gradient: 'from-blue-500 to-cyan-400' },
                            { value: 50, suffix: '+', label: 'Skilled Operators', icon: '⚙️', gradient: 'from-emerald-500 to-green-400' },
                            { value: 20, suffix: '+', label: 'QC Inspectors', icon: '🔍', gradient: 'from-purple-500 to-pink-400' },
                            { value: 15, suffix: '+', label: 'Years Experience', icon: '🏆', gradient: 'from-orange-500 to-amber-400' },
                        ].map((stat, i) => (
                            <div key={i} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-2">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>
                                <div className="text-4xl mb-4">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organizational Structure */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Leadership</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Organizational Structure</h2>
                        <p className="text-slate-600">Flat hierarchy ensuring quick decisions and efficient operations</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 overflow-x-auto">
                        <div className="min-w-[800px]">
                            {/* Plant Head */}
                            <div className="flex justify-center mb-8">
                                <div className="bg-gradient-to-r from-primary to-emerald-600 text-white px-10 py-5 rounded-2xl text-center shadow-xl">
                                    <h3 className="font-bold text-xl">{ORG_STRUCTURE.head.name}</h3>
                                    <p className="text-white/80 text-sm mt-1">{ORG_STRUCTURE.head.role}</p>
                                </div>
                            </div>

                            {/* Vertical Connector */}
                            <div className="flex justify-center">
                                <div className="w-1 h-10 bg-gradient-to-b from-primary to-slate-300 rounded-full"></div>
                            </div>

                            {/* Horizontal Line */}
                            <div className="flex justify-center mb-8">
                                <div className="w-[85%] h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
                            </div>

                            {/* Department Heads */}
                            <div className="grid grid-cols-4 gap-6 mb-6">
                                {ORG_STRUCTURE.departments.map((dept, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-1 h-8 bg-slate-300 -mt-6 mb-4 rounded-full"></div>
                                        <div className="bg-slate-800 text-white px-5 py-4 rounded-2xl text-center w-full shadow-lg hover:shadow-xl hover:bg-slate-700 transition-all">
                                            <h4 className="font-bold">{dept.head.name}</h4>
                                            <p className="text-xs text-white/70 mt-1">{dept.head.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Connectors */}
                            <div className="grid grid-cols-4 gap-6">
                                {ORG_STRUCTURE.departments.map((_, i) => (
                                    <div key={i} className="flex justify-center">
                                        <div className="w-1 h-6 bg-slate-200 rounded-full"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Team Members - Level 1 */}
                            <div className="grid grid-cols-4 gap-6 mb-4">
                                {ORG_STRUCTURE.departments.map((dept, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl text-center w-full border border-slate-200 hover:border-primary hover:shadow-md transition-all">
                                            <h4 className="font-semibold text-sm">{dept.members[0].name}</h4>
                                            {dept.members[0].role && <p className="text-xs text-slate-500">{dept.members[0].role}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Connectors */}
                            <div className="grid grid-cols-4 gap-6">
                                {ORG_STRUCTURE.departments.map((_, i) => (
                                    <div key={i} className="flex justify-center">
                                        <div className="w-1 h-4 bg-slate-200 rounded-full"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Team Members - Level 2 */}
                            <div className="grid grid-cols-4 gap-6">
                                {ORG_STRUCTURE.departments.map((dept, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl text-center w-full border border-slate-200 hover:border-primary hover:shadow-md transition-all">
                                            <h4 className="font-semibold text-sm">{dept.members[1].name}</h4>
                                            {dept.members[1].role && <p className="text-xs text-slate-500">{dept.members[1].role}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories - Replaces 4C Philosophy */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">Our Products</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Precision-Engineered Products</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">High-quality machined components manufactured to exact specifications</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {WHAT_WE_DELIVER.map((item, i) => (
                            <div key={i} className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-primary hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors"></div>
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-primary text-xl mb-2">{item.title}</h4>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us CTA */}
            <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner With Experts</h2>
                    <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                        Our experienced team is ready to bring precision and reliability to your next project.
                    </p>
                    <Link to="/contact#quote-form">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Start a Conversation →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Team;

