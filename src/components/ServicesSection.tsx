'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesSection() {
    return (
        <section className="section-padding bg-secondary text-white overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Best Services</h2>
                    <p className="text-xl text-gray-400">Delivering Excellence Across Every Mile</p>
                </motion.div>

                {/* Main Service Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="p-8 md:p-12">
                            <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                                FEATURED SERVICE
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                GLOBAL REACH, LOCAL TOUCH.
                            </h3>
                            <h4 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                E-COMMERCE SHIPPING SOLUTIONS
                            </h4>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                Streamline your e-commerce operations with our specialized shipping solutions.
                                We handle everything from order fulfillment to last-mile delivery, ensuring your
                                customers receive their packages on time, every time. Our technology-driven approach
                                integrates seamlessly with popular platforms.
                            </p>
                            <button className="btn-primary text-lg">
                                GET STARTED
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>

                        <div className="relative h-[400px] lg:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800 lg:to-gray-900 z-10" />
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <svg className="w-48 h-48 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Services Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        {
                            icon: '✈️',
                            title: 'Air Freight',
                            description: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.'
                        },
                        {
                            icon: '🚢',
                            title: 'Sea Freight',
                            description: 'Cost-effective ocean shipping for large volumes and heavy cargo.'
                        },
                        {
                            icon: '🚛',
                            title: 'Land Transport',
                            description: 'Efficient overland logistics for domestic and cross-border deliveries.'
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 group"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
