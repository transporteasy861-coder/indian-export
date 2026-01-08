'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
    const [showDetails, setShowDetails] = useState<'tracking' | 'pricing' | null>(null);

    const trackingFeatures = [
        'Fulfillment', 'Same-Day Dispatch', 'Real-Time Updates',
        'GPS Tracking', 'Live Notifications', 'Multi-Carrier Support'
    ];

    const pricingFeatures = [
        'No Hidden Fees', 'Volume Discounts', 'Flexible Payment',
        'Transparent Quotes', 'Best Market Rates', 'Custom Solutions'
    ];

    return (
        <section className="section-padding bg-light">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        INDIAN EXPORT IMPORT SERVICES IS MORE THAN
                        <br />
                        <span className="text-primary">JUST A LOGISTICS COMPANY...</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Real-Time Tracking */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">Real-Time Tracking</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {trackingFeatures.map((feature, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/20"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowDetails(showDetails === 'tracking' ? null : 'tracking')}
                            className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
                        >
                            {showDetails === 'tracking' ? 'Hide Details -' : 'Show Details +'}
                        </button>

                        {showDetails === 'tracking' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4 pt-4 border-t border-gray-200"
                            >
                                <p className="text-gray-600">
                                    Track your shipments in real-time with our advanced GPS technology.
                                    Get instant notifications at every stage of delivery, ensuring complete
                                    transparency and peace of mind.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Competitive Pricing */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">Competitive Pricing</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {pricingFeatures.map((feature, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/20"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowDetails(showDetails === 'pricing' ? null : 'pricing')}
                            className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
                        >
                            {showDetails === 'pricing' ? 'Hide Details -' : 'Show Details +'}
                        </button>

                        {showDetails === 'pricing' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4 pt-4 border-t border-gray-200"
                            >
                                <p className="text-gray-600">
                                    Enjoy competitive rates without compromising on quality. We offer transparent
                                    pricing, volume discounts, and customized solutions tailored to your business needs.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
