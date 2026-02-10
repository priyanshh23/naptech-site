import { Card } from '../../components/UI/Card';

export const Fixtures = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-secondary mb-4">Fixtures & Tooling</h2>
                    <p className="text-xl text-gray-600">Precision holding solutions for consistent quality</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-6">
                        <Card className="p-8 bg-secondary text-white hover:scale-[1.02] transition-transform">
                            <div className="text-4xl mb-4">📏</div>
                            <h3 className="text-2xl font-bold mb-4">Jigs & Fixtures</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We design and fabricate robust jigs for drilling, tapping, and welding operations to maintain
                                consistency across thousands of parts. Our in-house design team uses advanced CAD/CAM software.
                            </p>
                        </Card>
                        <Card className="p-8 bg-gray-100 hover:bg-white hover:scale-[1.02] transition-all">
                            <div className="text-4xl mb-4">🔩</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Cutting Tools</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Optimization of cutting parameters and selection of right tool grades (Carbide, PCD, CBN) for
                                maximizing tool life and part finish.
                            </p>
                        </Card>
                    </div>

                    <div className="h-full">
                        <Card className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white border border-gray-200 shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                            <div className="text-center z-10 transition-transform duration-500 group-hover:scale-110">
                                <span className="text-7xl block mb-6">📐</span>
                                <h4 className="text-2xl font-bold text-primary">CAD Engineering</h4>
                                <p className="text-gray-500 mt-2">3D Modeling & Stress Analysis</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
