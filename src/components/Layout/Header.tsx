import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';
import { LOGO } from '../../assets/images';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Quality', path: '/quality' },
    { name: 'Team', path: '/team' },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={LOGO} alt="Naptech" className="h-10 w-auto" />
                    <span className="text-xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        NAPTECH
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-gray-600 hover:text-primary text-sm font-medium transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden lg:block">
                    <Link to="/contact#quote-form">
                        <Button size="sm">Contact Us</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-600 p-2 text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-3 shadow-xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-base font-medium text-gray-800 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/contact#quote-form" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Contact Us</Button>
                    </Link>
                </div>
            )}
        </header>
    );
};
