import HeaderNav from './components/HeaderNav';
import HeroOnboarding from './components/HeroOnboarding';
import SearchPanel from './components/SearchPanel';
import DynamicHighlights from './components/DynamicHighlights';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderNav />
      <main>
        <HeroOnboarding />
        <SearchPanel />
        <DynamicHighlights />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
