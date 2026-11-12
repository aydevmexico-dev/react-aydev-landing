import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import Retainer from './Retainer.jsx';
import Results from './Results.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-deep text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Retainer />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
