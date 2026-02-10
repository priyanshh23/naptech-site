import { useEffect, useRef, useState } from 'react';
import { CLIENTS } from '../../assets/companyData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClientCarouselProps {
    title?: string;
    subtitle?: string;
    showTitleBox?: boolean;
}

export const ClientCarousel = ({ title = "Trusted By Industry Leaders", subtitle, showTitleBox = false }: ClientCarouselProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollSpeed = 0.5; // Pixels per frame
    const manualScrollAmount = 300; // Pixels to scroll on button click

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        const animate = () => {
            if (!isPaused && scrollContainer) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    // Reset to start seamlessly when reaching halfway (since content is duplicated)
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += scrollSpeed;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -manualScrollAmount, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (scrollRef.current) {
            if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2 - manualScrollAmount) {
                // If near end, reset first to allow seamless next
                scrollRef.current.scrollLeft = 0;
            }
            scrollRef.current.scrollBy({ left: manualScrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 bg-white overflow-hidden relative group">
            <div className="container mx-auto px-4 mb-8">
                {showTitleBox ? (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 max-w-md mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                        {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
                    </div>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                        {subtitle && <p className="text-gray-500">{subtitle}</p>}
                    </div>
                )}
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Track - CSS Animation */}
                <div
                    className="flex w-max animate-marquee hover:animate-marquee-pause"
                    // Add touch listeners to pause on mobile touch
                    onTouchStart={(e) => e.currentTarget.classList.add('animate-marquee-pause')}
                    onTouchEnd={(e) => e.currentTarget.classList.remove('animate-marquee-pause')}
                >
                    {/* Double the content to ensure seamless loop */}
                    {[...CLIENTS, ...CLIENTS].map((client, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 mx-8 flex items-center justify-center p-4 w-[150px]"
                        >
                            {/* @ts-ignore */}
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-24 w-auto object-contain hover:scale-110 transition-all duration-300"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = client.short;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
