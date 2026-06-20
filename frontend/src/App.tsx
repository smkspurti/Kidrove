import { Hero } from './sections/Hero';
import { StatsStrip } from './sections/Stats';
import { Features } from './sections/Features';
import { Outcomes } from './sections/Outcomes';
import { Journey } from './sections/Journey';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Registration } from './sections/Registration';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-primary/20 selection:text-brand-dark">
      {/* Navigation could go here */}
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <Outcomes />
        <Journey />
        <Testimonials />
        <FAQ />
        <Registration />
      </main>
      
      <footer className="bg-brand-dark border-t border-white/10 py-12 text-center">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Kidrove. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
