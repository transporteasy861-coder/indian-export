'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Rajesh Kumar',
        role: 'CEO',
        company: 'TechWare India',
        content: 'Indian Export Import Services has been instrumental in scaling our international operations. Their real-time tracking and reliable delivery have made them an invaluable partner for our business.',
        rating: 5
    },
    {
        name: 'Priya Sharma',
        role: 'Operations Manager',
        company: 'Fashion Forward Ltd',
        content: 'The level of professionalism and attention to detail is outstanding. Our shipments always arrive on time, and their customer support team is incredibly responsive.',
        rating: 5
    },
    {
        name: 'Mohammed Ali',
        role: 'Logistics Director',
        company: 'Global Trade Co',
        content: 'We\'ve worked with many logistics companies, but IEIS stands out for their competitive pricing and transparent processes. They\'ve helped us reduce shipping costs by 30%.',
        rating: 5
    },
    {
        name: 'Anita Desai',
        role: 'Supply Chain Head',
        company: 'Manufacturing Plus',
        content: 'Exceptional service from start to finish. The team goes above and beyond to ensure our cargo reaches its destination safely and on schedule.',
        rating: 5
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        YOUR TRUST, OUR JOURNEY
                    </h2>
                    <p className="text-xl text-gray-600">Delivering Excellence Worldwide</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial Cards */}
                    <div className="relative h-[400px] md:h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <div className="bg-light rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between shadow-lg">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 text-primary fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <blockquote className="text-lg md:text-xl text-gray-700 mb-8 flex-grow italic leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl text-secondary">{testimonials[currentIndex].name}</div>
                                            <div className="text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full bg-secondary text-white hover:bg-primary transition-colors flex items-center justify-center shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full bg-secondary text-white hover:bg-primary transition-colors flex items-center justify-center shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
