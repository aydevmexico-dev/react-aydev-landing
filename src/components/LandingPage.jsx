import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import Showcase from './Showcase.jsx';
import Philosophy from './Philosophy.jsx';
import Footer from './Footer.jsx';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-deep text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
