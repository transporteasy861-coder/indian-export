'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
    number: number;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: 1,
        title: 'Request a Quote',
        description: 'Share your shipping requirements and get an instant, transparent quote tailored to your needs.'
    },
    {
        number: 2,
        title: 'We Collect & Prepare Your Shipment',
        description: 'Our team picks up your cargo, handles all documentation, and prepares it for safe transit.'
    },
    {
        number: 3,
        title: 'Real-Time Tracking & Updates',
        description: 'Monitor your shipment\'s journey with live GPS tracking and receive notifications at every milestone.'
    },
    {
        number: 4,
        title: 'Safe & Timely Delivery',
        description: 'Your cargo reaches its destination securely and on schedule, with proof of delivery confirmation.'
    }
];

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(1);

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
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">How We Work</h2>
                    <p className="text-xl text-gray-600">Simple, Efficient, Reliable</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Step Numbers */}
                    <div className="space-y-4">
                        {steps.map((step) => (
                            <motion.button
                                key={step.number}
                                onClick={() => setActiveStep(step.number)}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: step.number * 0.1 }}
                                className={`w-full text-left p-6 rounded-xl transition-all ${activeStep === step.number
                                        ? 'bg-secondary text-white shadow-xl scale-105'
                                        : 'bg-white hover:bg-gray-50 shadow-md'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold
                    ${activeStep === step.number ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}
                  `}
                                    >
                                        {step.number}
                                    </div>
                                    <div className="flex-1">
                                        <div className={`font-bold text-lg mb-1 ${activeStep === step.number ? 'text-white' : 'text-secondary'}`}>
                                            {step.title}
                                        </div>
                                        {activeStep === step.number && (
                                            <div className="text-gray-300 text-sm">
                                                {step.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right - Visual Representation */}
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl p-8 shadow-xl"
                    >
                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex flex-col items-center justify-center p-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                                <span className="text-4xl font-bold text-white">{activeStep}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary text-center mb-4">
                                {steps[activeStep - 1].title}
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {steps[activeStep - 1].description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
