import { Header } from './components/Header';
import ConfessionSection from './components/confession/ConfessionSection';
import MeetingSection from './components/MeetingSection';
import { ThemeProvider } from './components/theme/ThemeProvider';

const App: React.FC = () => (
  <ThemeProvider defaultTheme="light" storageKey="church-site-theme">
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <ConfessionSection />
      <MeetingSection />
    </main>
  </ThemeProvider>
);

export default App;
