import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { CONTACT } from '../assets/companyData';

const Contact = () => {
    const { hash } = useLocation();

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        attachments: [] as { filename: string, content: string }[]
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [fileNames, setFileNames] = useState<string[]>([]);

    // Vercel Serverless Function Limit (4.5MB Payload)
    // Base64 encoding adds ~33% overhead. 3MB file -> ~4MB payload + JSON data -> Safe.
    const MAX_TOTAL_SIZE = 3 * 1024 * 1024; // 3MB

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);

            // Check Total Size
            const totalSize = files.reduce((acc, file) => acc + file.size, 0);
            if (totalSize > MAX_TOTAL_SIZE) {
                setErrorMessage(`Total file size exceeds 3MB. Your files are ${(totalSize / (1024 * 1024)).toFixed(2)}MB. Please compress specific files or send fewer files.`);
                setStatus('error');
                // Clear the input
                e.target.value = '';
                return;
            }

            // Clear previous errors if size is okay
            if (status === 'error') {
                setStatus('idle');
                setErrorMessage('');
            }

            const names = files.map(f => f.name);
            setFileNames(names);

            const filePromises = files.map(file => {
                return new Promise<{ filename: string, content: string }>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const content = reader.result as string;
                        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
                        // Resend expects the buffer or base64 string content
                        const base64Content = content.split(',')[1];
                        resolve({
                            filename: file.name,
                            content: base64Content
                        });
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            try {
                const attachments = await Promise.all(filePromises);
                setFormData(prev => ({ ...prev, attachments }));
            } catch (error) {
                console.error("Error reading files:", error);
                setErrorMessage("Failed to process files. Please try again.");
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            let data;
            const responseText = await response.text();

            try {
                data = JSON.parse(responseText);
            } catch (e) {
                // If parsing fails, it's likely a Vercel runtime error (text)
                throw new Error(`Server Error: ${responseText.slice(0, 100)}...`);
            }

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send email');
            }

            setStatus('success');
            setFormData({ name: '', company: '', email: '', phone: '', message: '', attachments: [] });
            setFileNames([]);
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        }
    };

    const fullAddress = `${CONTACT.address.plot}, ${CONTACT.address.area}, ${CONTACT.address.city}, ${CONTACT.address.state}`;

    return (
        <div className="bg-white min-h-screen">
            {/* Premium Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-5 py-2 rounded-full text-sm mb-6 border border-white/20">
                        🤝 Start Your Partnership
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let's Build Something <span className="text-primary">Precise</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        From prototype to production, our engineering team is ready to deliver precision components that exceed your specifications.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">24hrs</div>
                            <div className="text-white/60 text-sm">Response Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                            <div className="text-white/60 text-sm">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
                            <div className="text-white/60 text-sm">OEM Partners</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section id="quote-form" className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                        {/* Left Column - Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-lg">📝</span>
                                    <h2 className="text-2xl font-bold text-slate-800">Request a Quote</h2>
                                </div>
                                <p className="text-slate-500 mb-8 ml-13">Share your requirements and we'll respond within 24 hours with a detailed proposal.</p>

                                {status === 'success' ? (
                                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🎉</div>
                                        <h3 className="text-2xl font-bold text-emerald-800 mb-2">Request Received!</h3>
                                        <p className="text-emerald-700 mb-6">Thank you for contacting us. Our team will review your requirements and get back to you shortly.</p>
                                        <Button onClick={() => setStatus('idle')} variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-100">
                                            Send Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                    placeholder="Your Company Ltd."
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                    placeholder="you@company.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Project Requirements</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                                                placeholder="Describe your component specifications, material requirements, tolerances, and expected quantities..."
                                            ></textarea>
                                        </div>

                                        {/* File Upload (Visual Only for now) */}
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Upload Technical Drawings</label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    id="file-upload"
                                                    className="hidden"
                                                    accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpeg,.jpg,.png"
                                                    multiple
                                                    onChange={handleFileChange}
                                                />
                                                <label
                                                    htmlFor="file-upload"
                                                    className="flex flex-col items-center justify-center w-full p-8 bg-gradient-to-br from-slate-50 to-white border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-primary hover:from-primary/5 hover:to-white transition-all group"
                                                >
                                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                                                        <span className="text-3xl">📁</span>
                                                    </div>
                                                    {fileNames.length > 0 ? (
                                                        <div className="text-center">
                                                            <span className="text-primary font-bold text-lg">{fileNames.length} file(s) selected</span>
                                                            <p className="text-sm text-slate-500 mt-1">{fileNames.slice(0, 2).join(', ')}{fileNames.length > 2 ? '...' : ''}</p>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <span className="font-bold text-slate-700 text-lg">Drop files here or click to upload</span>
                                                            <span className="text-sm text-slate-400 mt-2">PDF, DWG, STEP, IGES, Images (Multiple files allowed)</span>
                                                        </>
                                                    )}
                                                </label>
                                            </div>
                                            {fileNames.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {fileNames.map((name, i) => (
                                                        <span key={i} className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                                                            📎 {name.length > 25 ? name.slice(0, 25) + '...' : name}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {status === 'error' && (
                                            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-100">
                                                {errorMessage}
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full py-5 text-lg flex justify-center items-center gap-2"
                                            size="lg"
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <span className="animate-spin text-xl">⚪</span> Sending...
                                                </>
                                            ) : (
                                                'Submit Quote Request →'
                                            )}
                                        </Button>

                                        <p className="text-center text-sm text-slate-400">
                                            We respect your privacy. Your information is secure and never shared.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Info */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Quick Contact Box */}
                            <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-3xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-6">Need Immediate Assistance?</h3>
                                <p className="text-white/80 mb-6">Our engineering team is available to discuss your requirements directly.</p>

                                <a href={`tel:${CONTACT.phones[0]}`} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4 hover:bg-white/20 transition-all group">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">Call Us Now</p>
                                        <p className="font-bold text-lg">{CONTACT.phones[0]}</p>
                                    </div>
                                </a>

                                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all group">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">Email Us</p>
                                        <p className="font-bold">{CONTACT.email}</p>
                                    </div>
                                </a>

                                <a
                                    href={CONTACT.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 mt-4 hover:bg-white/20 transition-all group cursor-pointer"
                                    onClick={(e) => {
                                        if (CONTACT.social.linkedin === '#') e.preventDefault();
                                    }}
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">Follow Us</p>
                                        <p className="font-bold">LinkedIn</p>
                                    </div>
                                </a>
                            </div>

                            {/* Map Card */}
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
                                <div className="h-48">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.0!3d28.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Naptech Location"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-slate-800 mb-2">📍 Visit Our Facility</h4>
                                    <p className="text-slate-600 text-sm mb-4">{fullAddress}</p>
                                    <a
                                        href={CONTACT.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-white font-semibold rounded-2xl hover:bg-slate-700 transition-all"
                                    >
                                        Get Directions →
                                    </a>
                                </div>
                            </div>

                            {/* Response Promise */}
                            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 text-center">
                                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">⚡</span>
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2">Fast Response Guaranteed</h4>
                                <p className="text-slate-500 text-sm">We respond to all inquiries within 24 hours with a detailed assessment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
