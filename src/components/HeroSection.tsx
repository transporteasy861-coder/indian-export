'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<'tracking' | 'ship'>('tracking');
    const [trackingNumber, setTrackingNumber] = useState('');

    // Animated counters
    const [clients, setClients] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [countries, setCountries] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const clientIncrement = 2000 / steps;
        const deliveryIncrement = 99.98 / steps;
        const countryIncrement = 150 / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            setClients(Math.min(Math.floor(clientIncrement * currentStep), 2000));
            setDelivery(Math.min(parseFloat((deliveryIncrement * currentStep).toFixed(2)), 99.98));
            setCountries(Math.min(Math.floor(countryIncrement * currentStep), 150));

            if (currentStep >= steps) clearInterval(timer);
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/80 z-10" />
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"1920\" height=\"1080\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect fill=\"%231a1a1a\" width=\"1920\" height=\"1080\"/%3E%3C/svg%3E')" }} />
            </div>

            <div className="container-custom relative z-20 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            WE KEEP YOUR SUPPLY CHAIN MOVING
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            From local to global shipments, our seamless logistics solutions ensure on-time,
                            secure, and hassle-free delivery.
                        </p>
                        <button className="btn-primary text-lg">
                            Learn More Now
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </motion.div>

                    {/* Right - Tracking Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
                    >
                        {/* Tabs */}
                        <div className="flex gap-2 mb-6 bg-light rounded-lg p-1">
                            <button
                                onClick={() => setActiveTab('tracking')}
                                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${activeTab === 'tracking'
                                        ? 'bg-white text-primary shadow-md'
                                        : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                Tracking Order
                            </button>
                            <button
                                onClick={() => setActiveTab('ship')}
                                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${activeTab === 'ship'
                                        ? 'bg-white text-primary shadow-md'
                                        : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                Ship Order
                            </button>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">
                                    {activeTab === 'tracking' ? 'Enter Tracking Number' : 'Shipment Details'}
                                </label>
                                <input
                                    type="text"
                                    value={trackingNumber}
                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                    placeholder={activeTab === 'tracking' ? 'e.g., IEIS123456789' : 'Enter shipment info'}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                            <button className="btn-primary w-full justify-center text-lg">
                                {activeTab === 'tracking' ? 'Track Package' : 'Get Quote'}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            {/* App Download */}
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-3 font-medium">Download Our Mobile App</p>
                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[10px] leading-none">Download on the</div>
                                            <div className="text-xs font-semibold">App Store</div>
                                        </div>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[10px] leading-none">GET IT ON</div>
                                            <div className="text-xs font-semibold">Google Play</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">{clients.toLocaleString()}+</div>
                        <div className="text-gray-300 font-medium">Satisfied Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">{delivery.toFixed(2)}%</div>
                        <div className="text-gray-300 font-medium">On-Time Delivery Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">{countries}+</div>
                        <div className="text-gray-300 font-medium">Countries Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                        <div className="text-gray-300 font-medium">Customer Support</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
