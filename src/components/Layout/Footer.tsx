import { Link } from 'react-router-dom';
import { CONTACT, COMPANY } from '../../assets/companyData';

export const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Naptech</h3>
                    <p className="text-gray-400 mb-6">Precision Engineering Excellence since {COMPANY.established}.</p>
                    <div className="flex gap-4">
                        <a
                            href={CONTACT.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                            onClick={(e) => {
                                if (CONTACT.social.linkedin === '#') e.preventDefault();
                            }}
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
                        <li><Link to="/infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link></li>
                        <li><Link to="/quality" className="hover:text-primary transition-colors">Quality</Link></li>
                        <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">{CONTACT.email}</a></li>
                        <li><a href={`tel:${CONTACT.phones[0]}`} className="hover:text-primary transition-colors">{CONTACT.phones[0]}</a></li>
                        <li><Link to="/contact#quote-form" className="hover:text-primary transition-colors">Get a Quote →</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Certifications</h4>
                    <div className="flex gap-2">
                        <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">ISO 9001:2015</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Naptech Precision Engineering. All rights reserved.
            </div>
        </footer>
    );
};
