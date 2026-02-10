const machines = [
    { type: 'Vertical Machining Centers (VMC)', brand: 'Doosan / Ace', specs: '10 Units', note: 'Various bed sizes available' },
    { type: 'CNC Turning Centers', brand: 'Mazak / Ace', specs: '15 Units', note: '' },
    { type: 'Sand Blasting Machine', brand: 'Custom', specs: '2 Units', note: '' },
    { type: 'Special Purpose Machines (SPM)', brand: '-', specs: '5 Units', note: '' },
    { type: 'Conventional Machines', brand: '-', specs: 'Drills, Tapping', note: 'Broaching, Engraving' },
];

export const MachineList = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-secondary mb-4">Equipment Inventory</h2>
                    <p className="text-xl text-gray-600">Comprehensive inventory of our advanced equipment</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg run-ring-1 ring-black/5 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Machine Type</th>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Make / Brand</th>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Quantity & Specs</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {machines.map((machine, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">{machine.type}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">{machine.brand}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {machine.specs}
                                            </span>
                                            {machine.note && <div className="text-xs text-gray-400 mt-1">{machine.note}</div>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
