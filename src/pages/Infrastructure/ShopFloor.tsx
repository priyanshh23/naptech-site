import { Card } from '../../components/UI/Card';

export const ShopFloor = () => {
    return (
        <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-secondary mb-4">Shop Floor Highlights</h2>
                    <p className="text-xl text-gray-600">A facility designed for World-Class Manufacturing</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <Card className="p-8 border-l-4 border-l-primary">
                            <h3 className="text-2xl font-bold text-primary mb-6">Optimized for Efficiency</h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our <strong>10,000 sq. ft.</strong> facility is designed for seamless material flow and optimal
                                production efficiency. From raw material intake to final inspection, every zone is strategically
                                laid out to minimize handling time.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '5S compliant workspace organization',
                                    'Dedicated zones for Raw Material, WIP & FG',
                                    'Climate-controlled inspection areas',
                                    'Integrated safety protocols at every station'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <span className="text-primary font-bold">✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                    <div className="h-full">
                        <Card className="h-96 flex items-center justify-center bg-gray-100 border-dashed border-2 border-gray-300">
                            <div className="text-center opacity-50">
                                <span className="text-6xl block mb-4">🏢</span>
                                <p className="text-xl font-medium">Shop Floor Layout View</p>
                                <p className="text-sm">(Interactive Map Coming Soon)</p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-primary to-green-700 rounded-2xl p-12 text-center text-white shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">Safety First Culture</h3>
                    <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                        At Naptech, safety is paramount. Our shop floor is equipped with modern fire suppression systems,
                        emergency stops, and proper ventilation to ensure a safe working environment for our skilled
                        technicians.
                    </p>
                </div>
            </div>
        </div>
    );
};
