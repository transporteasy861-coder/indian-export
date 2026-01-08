'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-secondary hidden md:block">
                            Services
                        </span>
                        <span className="text-xl font-bold text-secondary md:hidden">
                            IEIS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="#home" className="text-secondary hover:text-primary font-medium transition-colors">
                            HOME
                        </Link>
                        <div className="relative group">
                            <button className="text-secondary hover:text-primary font-medium transition-colors flex items-center gap-1">
                                SHIPPING
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                <Link href="#air-freight" className="block px-4 py-2 hover:bg-light transition-colors">Air Freight</Link>
                                <Link href="#sea-freight" className="block px-4 py-2 hover:bg-light transition-colors">Sea Freight</Link>
                                <Link href="#land-transport" className="block px-4 py-2 hover:bg-light transition-colors">Land Transport</Link>
                                <Link href="#express-delivery" className="block px-4 py-2 hover:bg-light transition-colors">Express Delivery</Link>
                            </div>
                        </div>
                        <Link href="#tracking" className="text-secondary hover:text-primary font-medium transition-colors">
                            TRACKING
                        </Link>
                        <Link href="#support" className="text-secondary hover:text-primary font-medium transition-colors">
                            SUPPORT
                        </Link>
                        <Link href="#career" className="text-secondary hover:text-primary font-medium transition-colors">
                            CAREER
                        </Link>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <a href="tel:+918001234567" className="hidden md:flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-semibold">+91 800 123 4567</span>
                        </a>
                        <button className="btn-primary hidden md:flex">
                            Get Started Now
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-secondary"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-gray-200 py-4"
                    >
                        <nav className="flex flex-col gap-4">
                            <Link href="#home" className="text-secondary hover:text-primary font-medium">HOME</Link>
                            <Link href="#shipping" className="text-secondary hover:text-primary font-medium">SHIPPING</Link>
                            <Link href="#tracking" className="text-secondary hover:text-primary font-medium">TRACKING</Link>
                            <Link href="#support" className="text-secondary hover:text-primary font-medium">SUPPORT</Link>
                            <Link href="#career" className="text-secondary hover:text-primary font-medium">CAREER</Link>
                            <a href="tel:+918001234567" className="text-primary font-semibold">+91 800 123 4567</a>
                            <button className="btn-primary w-full justify-center">
                                Get Started Now
                            </button>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
