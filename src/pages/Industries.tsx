import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { INDUSTRIES } from '../assets/companyData';

const Industries = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Industries We Serve</h1>
                    <p className="text-lg text-slate-600">Precision machining solutions across multiple sectors</p>
                </div>

                {/* Industry Tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {INDUSTRIES.map((industry, i) => (
                        <div key={i} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-slate-800 mb-2">{industry.name}</h2>
                                <p className="text-slate-600">
                                    Precision components for the {industry.name.toLowerCase()} sector
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sector Highlights */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-10 mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">What We Deliver</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: 'Hubs', desc: 'Precision hubs' },
                            { title: 'Shafts', desc: 'Machined shafts' },
                            { title: 'Housings', desc: 'Complex housings' },
                            { title: 'Components', desc: 'Custom parts' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-slate-200 p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                                <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link to="/contact">
                        <Button size="lg">Discuss Your Requirements</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Industries;
