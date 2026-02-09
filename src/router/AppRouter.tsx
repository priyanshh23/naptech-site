import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Industries = lazy(() => import('../pages/Industries'));
const ProcessChain = lazy(() => import('../pages/ProcessChain'));
const Infrastructure = lazy(() => import('../pages/Infrastructure'));
const ShopFloor = lazy(() => import('../pages/Infrastructure/ShopFloor').then(m => ({ default: m.ShopFloor })));
const MachineList = lazy(() => import('../pages/Infrastructure/MachineList').then(m => ({ default: m.MachineList })));
const Fixtures = lazy(() => import('../pages/Infrastructure/Fixtures').then(m => ({ default: m.Fixtures })));
const Products = lazy(() => import('../pages/Products'));
const Quality = lazy(() => import('../pages/Quality'));
const Team = lazy(() => import('../pages/Team'));
const Contact = lazy(() => import('../pages/Contact'));

// Loading spinner component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
    </div>
);

// Scroll to hash/anchor component - auto scrolls to section when URL has hash
const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Scroll to top when navigating to a new page without hash
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Wait for page to load, then scroll to the hash element
        const scrollToElement = () => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        // Small delay to ensure the page is fully loaded
        const timer = setTimeout(scrollToElement, 100);
        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return null;
};

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
                <Header />
                <main className="flex-1 pt-20">
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/industries" element={<Industries />} />
                            <Route path="/process" element={<ProcessChain />} />
                            <Route path="/infrastructure" element={<Infrastructure />} />
                            <Route path="/infrastructure/shop-floor" element={<ShopFloor />} />
                            <Route path="/infrastructure/machine-list" element={<MachineList />} />
                            <Route path="/infrastructure/fixtures" element={<Fixtures />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/quality" element={<Quality />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};
