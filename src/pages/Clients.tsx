const Clients = () => {
    const clients = [
        'Toyota', 'Maruti Suzuki', 'Hero MotoCorp', 'Munjal Kiriu',
        'Sandhar Technologies', 'Minda Industries', 'JBM Group', 'Sanoh'
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">Our Clients</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trusted by leading OEMs and Tier-1 suppliers
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {clients.map((client, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                            <span className="text-xl font-bold text-gray-700">{client}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-secondary to-gray-800 rounded-2xl p-12 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Serving Multiple Industries</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {['Automotive', 'Two-Wheeler', 'Commercial Vehicles', 'Industrial'].map((industry, i) => (
                            <span key={i} className="bg-white/10 px-6 py-2 rounded-full">
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
