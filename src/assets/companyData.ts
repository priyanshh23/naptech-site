/**
 * Naptech Precision Engineering - Company Data
 * Centralized data for all company information
 */

export const COMPANY = {
    name: 'Naptech Precision Engineering',
    tagline: 'Quality You Can Trust',
    established: 2014,
    type: 'Precision Machining Company',
    location: 'Basai Industrial Area, Gurgaon, Haryana, India',
};

export const STATS = {
    floorSpace: '10,000',
    floorSpaceUnit: 'sq. ft.',
    employees: 70,
    investment: '₹25 Mn',
    annualSales: '₹25 Mn',
    cncMachines: '25+',
    yearsExperience: new Date().getFullYear() - 2014,
};

export const CONTACT = {
    address: {
        plot: 'Plot No. 17/1',
        area: 'Basai Industrial Area',
        city: 'Basai, Gurgaon – 122001',
        state: 'Haryana, India',
    },
    phones: ['+91 7840042620', '+91 7840052620'],
    email: 'naptechprecision@gmail.com',
    mapLink: 'https://maps.app.goo.gl/eNPXtnBbrHjryjP99',
    social: {
        linkedin: 'https://www.linkedin.com/in/naptech-precision-b1aba43ab',
    },
};

export const INDUSTRIES = [
    { name: 'Automotive', icon: '🚗', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400' },
    { name: 'Industrial', icon: '🏭', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' },
    { name: 'Off-Highway', icon: '🚜', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400' },
    { name: 'Two-Wheeler', icon: '🏍️', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400' },
];

export const CORE_VALUES = [
    { title: 'Customer First', icon: '👥', desc: 'Prioritizing customer needs in everything we do' },
    { title: 'Commitment', icon: '🎯', desc: 'Dedicated to delivering excellence consistently' },
    { title: 'Communication', icon: '💬', desc: 'Transparent and open collaboration' },
    { title: 'Challenge Yourself', icon: '🚀', desc: 'Continuous improvement and growth' },
];

export const CAPABILITIES = [
    { name: 'Precision Machining', desc: 'Intricate and high-precision machining solutions', icon: '⚙️' },
    { name: 'Small Assemblies', desc: 'Small and light assembly operations', icon: '🔧' },
    { name: 'Finishing Processes', desc: 'Surface finishing and secondary operations', icon: '✨' },
    { name: 'Quality Assurance', desc: 'Comprehensive QA at every stage', icon: '✅' },
];

export const PROCESS_CHAIN = [
    { step: 1, title: 'Drawings', desc: 'Review supplied drawings', icon: '📄' },
    { step: 2, title: 'Processing', desc: 'Process order as per specs', icon: '📋' },
    { step: 3, title: 'Machining', desc: 'Precision machining', icon: '⚙️' },
    { step: 4, title: 'QA', desc: 'In-process quality assurance', icon: '🔍' },
    { step: 5, title: 'Inspection', desc: 'Final inspection', icon: '✅' },
    { step: 6, title: 'Shipment', desc: 'Finished goods shipment', icon: '📦' },
];

export const MATERIALS = [
    'Carbon Alloy Steel',
    'Stainless Steel',
    'Aluminum',
    'Copper',
    'Cast Iron',
    'Special Grades',
    'Aluminium Casting',
    'Aluminium Forging',
];

export const PRODUCTS = [
    {
        name: 'CNC Machined Billet Hub',
        desc: 'Precision-machined aluminum hub with complex geometry and lightening pockets, featuring tight tolerance bearing bores.',
        image: '/products/precision-hub.png'
    },
    {
        name: 'Turned Steel Hub Flange',
        desc: 'Heavy-duty turned and machined steel component with threaded mounting holes and precision datum surfaces.',
        image: '/products/industrial-hub-side.png'
    },
    {
        name: 'Precision Slotted Steel Disc',
        desc: 'Flat steel disc component with precision-milled windows and chamfered edges, manufacturing to exact flatness specs.',
        image: '/products/industrial-hub.png'
    },
    {
        name: 'Anodized Aluminum Extrusion',
        desc: 'Extruded aluminum profile with integral cooling fins and black anodized surface finish for thermal applications.',
        image: '/products/motor-housing.png'
    },
    {
        name: 'Machined Motor End Shield',
        desc: 'Precision-machined brass end shield with ventilation slots and bearing bore, used in high-performance electric motors.',
        image: '/products/precision-disc.png'
    },
    {
        name: 'Stamped Motor Fan Cover',
        desc: 'Heavy-gauge stamped steel fan cover plate with laser-cut ventilation pattern for electric motor cooling systems.',
        image: '/products/steel-bracket.png'
    },
    {
        name: 'Cast Iron Flange Housing',
        desc: 'Grey cast iron component featuring a 2-bolt flange design and internal flow cavities.',
        image: '/products/extra-product-1.png'
    },
    {
        name: 'Intricate Cast Iron Body',
        desc: 'Complex casting with multiple machined ports and internal passages, pressure-tested for integrity.',
        image: '/products/extra-product-2.png'
    },
    {
        name: 'Precision Ground Spool',
        desc: 'Stainless steel turned part with multiple lands and grooves, cylindrically ground to micron-level straightness.',
        image: '/products/extra-product-3.png'
    },
    {
        name: 'Stamped Steel Lever Arm',
        desc: 'Metal stamping component formed from heavy-gauge steel sheet with zinc plating for corrosion protection.',
        image: '/products/extra-product-4.png'
    },
    {
        name: 'Turned Armature Tube',
        desc: 'Precision-turned stainless steel tube assembly with brazed components and high surface finish requirements.',
        image: '/products/extra-product-5.png'
    },
    {
        name: 'Cast Iron Mounting Bracket',
        desc: 'Robust iron casting with machined mounting faces and bolt holes for structural support applications.',
        image: '/products/extra-product-6.png'
    },
    {
        name: 'Aluminum Rotor Assembly',
        desc: 'Die-cast aluminum component with insert-molded elements and precision-balanced rotational mass.',
        image: '/products/extra-product-7.png'
    },
    {
        name: 'Hardened Steel Plunger',
        desc: 'Heat-treated and ground steel pin featuring stepped diameters and a polished surface finish.',
        image: '/products/extra-product-8.png'
    },
    {
        name: 'Cast Iron V-Belt Pulley',
        desc: 'Cast and machined pulley wheel with precision V-groove profile and keyed bore.',
        image: '/products/extra-product-9.png'
    },
    {
        name: 'Bonded Rubber-Metal Mount',
        desc: 'Vibration isolation component consisting of a machined metal core bonded to a rubber damping element.',
        image: '/products/extra-product-10.png'
    },
    {
        name: 'Anodized Aluminum Piston',
        desc: 'Hard-anodized aluminum turned part with sealing grooves and a wear-resistant surface finish.',
        image: '/products/extra-product-11.png'
    },
];

export const QUALITY_INSTRUMENTS = [
    { name: 'CMM', fullName: 'Coordinate Measuring Machine', icon: '📐', image: '/instruments/Gemini_Generated_Image_p46hk1p46hk1p46h.png' },
    { name: 'Surface Roughness Tester', fullName: 'Surface Roughness Measurement', icon: '📊', image: '/instruments/Gemini_Generated_Image_rmx966rmx966rmx9.png' },
    { name: 'Contour Tracer', fullName: 'Contour Profile Measurement', icon: '📈', image: '/instruments/Gemini_Generated_Image_1e55jc1e55jc1e55.png' },
    { name: 'Profile Projector', fullName: 'Optical Profile Projection', icon: '🔬', image: '/instruments/Gemini_Generated_Image_je8vh1je8vh1je8v.png' },
    { name: 'Hardness Tester', fullName: 'Material Hardness Testing', icon: '💎', image: '/instruments/Gemini_Generated_Image_z9cgwcz9cgwcz9cg.png' },
];

export const CERTIFICATIONS = [
    { name: 'MACE Approved', desc: 'Green Category - First Attempt', icon: '🏆' },
    { name: 'ISO 9001:2015', desc: 'Quality Management System', icon: '📜' },
];

export const QUALITY_POLICY = `Manufacturing and supplying defect-free products through continual improvement in our quality systems, meeting or exceeding customer requirements, and ensuring timely delivery.`;

export const QUALITY_OBJECTIVES = [
    'Reduction of rework and rejection',
    'Enhancing customer satisfaction',
    'Ensuring on-time delivery',
];

export const CLIENTS = [
    { name: 'Maruti Suzuki', short: 'Maruti Suzuki', logo: '/clients/maruti-suzuki.png' },
    { name: 'Toyota', short: 'Toyota', logo: '/clients/toyota.png' },
    { name: 'Anand Group', short: 'Anand Group', logo: '/clients/anand.png' },
    { name: 'JBM Group', short: 'JBM Group', logo: '/clients/jbm.jpg' },
    { name: 'Minda Nabtesco', short: 'Minda Nabtesco', logo: '/clients/minda-nabtesco.jpg' },
    { name: 'Sandhar', short: 'Sandhar', logo: '/clients/sandhar.png' },
    { name: 'Sanoh', short: 'Sanoh', logo: '/clients/sanoh.jpg' },
    { name: 'Munjal Kiriu', short: 'Munjal Kiriu', logo: '/clients/munjal-kiriu.jpg' },
    { name: 'Hero Cycles', short: 'Hero Cycles', logo: '/clients/hero-cycles.png' },
    { name: 'HYM Drive', short: 'HYM', logo: '/clients/hym.png' },
    { name: 'Hero MotoCorp', short: 'Hero MotoCorp', logo: '/clients/hero-motocorp.png' },
    { name: 'Roop Automotives', short: 'Roop', logo: '/clients/roop-automotives.png' },
];

export const MACHINES = {
    vmc: [
        { make: 'ACE', quantity: 4 },
        { make: 'Jyoti', quantity: 1 },
        { make: 'Cosmos', quantity: 1 },
        { make: 'Lokesh', quantity: 3 },
    ],
    cnc: [
        { make: 'ACE', quantity: 4 },
        { make: 'MacPower', quantity: 2 },
        { make: 'PMT', quantity: 2 },
        { make: 'Mori Seiki', quantity: 1 },
        { make: 'Jaeoo', quantity: 4 },
        { make: 'LMW', quantity: 1 },
        { make: 'DMTG', quantity: 1 },
        { make: 'Concept', quantity: 2 },
        { make: 'Lokesh', quantity: 8 },
    ],
    spm: [
        { name: 'Sand Blasting Machine' },
        { name: 'Special Purpose Machines' },
        { name: 'Drill Machines' },
        { name: 'Tapping Machines' },
        { name: 'Broaching Machine' },
        { name: 'Engraving Machine' },
    ],
};

export const ORG_STRUCTURE = {
    head: { name: 'Nitin Mittal', role: 'Plant Head' },
    departments: [
        {
            head: { name: 'Surendra Kumar', role: 'NPD' },
            members: [
                { name: 'Marketing', role: '' },
                { name: 'Sarvesh Kumar', role: 'Accounts' },
            ]
        },
        {
            head: { name: 'Ajeet Chobey', role: 'Production' },
            members: [
                { name: 'Shift Supervisor', role: '' },
                { name: '50 Operators', role: '' },
            ]
        },
        {
            head: { name: 'Avid Khan', role: 'Quality System, Customer Support, NPD' },
            members: [
                { name: 'Anil Kumar', role: 'In process, Std. Room, Final Inspection' },
                { name: '6 Inspectors & 14 Visual Inspector', role: '' },
            ]
        },
        {
            head: { name: 'Ram Nath', role: 'Maintenance' },
            members: [
                { name: 'Gaurav', role: 'Store' },
                { name: 'Purchase', role: '' },
            ]
        },
    ]
};


export const INFRA_HIGHLIGHTS = [
    {
        title: 'Shop Floor',
        desc: 'Well-organized shop floor with streamlined material flow, ensuring efficiency, safety, and consistent quality output.',
        highlights: ['10,000 sq. ft. facility', 'Defined work zones', 'Lean layout'],
        imageKey: 'shopFloor'
    },
    {
        title: 'CNC Machine Shop',
        desc: 'Advanced CNC Turning Centers and Vertical Machining Centers for high-precision and repeatable machining.',
        highlights: ['Turning + Milling capability', 'High accuracy & consistency', 'Batch & mass production'],
        imageKey: 'cncShop'
    },
    {
        title: 'Fixtures & Tooling',
        desc: 'Part-specific machining fixtures designed for accuracy, repeatability, and reduced cycle time.',
        highlights: ['Custom-designed fixtures', 'Improves precision', 'Supports complex components'],
        imageKey: 'fixtures'
    },
];

export const OPERATION_MANAGEMENT = [
    { title: 'Identification Tags', icon: '🏷️' },
    { title: 'Bins with Partitions', icon: '📦' },
    { title: 'Traceability', icon: '🔄' },
    { title: 'Online Inspection', icon: '👀' },
    { title: 'Standard Room', icon: '📏' },
];
