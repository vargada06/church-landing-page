import { Header } from './components/Header';
import ConfessionSection from './components/confession/ConfessionSection';

const App: React.FC = () => (
  <main className="min-h-screen bg-background text-foreground flex flex-col">
    <Header />
    <ConfessionSection />
  </main>
);

export default App;
