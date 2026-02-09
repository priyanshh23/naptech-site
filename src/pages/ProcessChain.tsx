import React from 'react';
import { PROCESS_CHAIN } from '../assets/companyData';

const ProcessChain = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Process Chain</h1>
                    <p className="text-lg text-slate-600">Our structured manufacturing process ensures quality at every step</p>
                </div>

                {/* Horizontal Timeline */}
                <div className="relative mb-16">
                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        {/* Line */}
                        <div className="absolute top-16 left-0 right-0 h-1 bg-primary rounded-full"></div>

                        <div className="grid grid-cols-6 gap-3">
                            {PROCESS_CHAIN.map((step, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    {/* Icon Circle */}
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl mb-4 shadow-lg z-10 group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                    {/* Connector dot */}
                                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow mb-4"></div>
                                    {/* Content */}
                                    <div className="text-center bg-white rounded-3xl p-5 shadow-lg border border-slate-200 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="text-xs text-primary font-bold mb-2">Step {step.step}</div>
                                        <h3 className="font-bold text-slate-800 mb-1">{step.title}</h3>
                                        <p className="text-xs text-slate-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-5">
                        {PROCESS_CHAIN.map((step, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-lg">
                                        {step.icon}
                                    </div>
                                    {i < PROCESS_CHAIN.length - 1 && <div className="w-0.5 h-12 bg-primary/30"></div>}
                                </div>
                                <div className="flex-1 bg-white rounded-3xl p-5 shadow-lg border border-slate-200">
                                    <div className="text-xs text-primary font-bold">Step {step.step}</div>
                                    <h3 className="font-bold text-slate-800">{step.title}</h3>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quality at Every Step */}
                <div className="bg-primary rounded-3xl p-10 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Quality Assured at Every Step</h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        From reviewing drawings to final shipment, our PDCA-based quality system ensures precision and consistency in every component we manufacture.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessChain;
