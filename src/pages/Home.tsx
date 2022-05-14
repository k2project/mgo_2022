import About from 'components/About';
import Career from 'components/Career';
import Contact from 'components/Contact';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Testimonials from 'components/Testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <Career />
            <About />
            <Testimonials />
            <Contact />
        </>
    );
}
