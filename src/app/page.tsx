import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </main>
    );
}
