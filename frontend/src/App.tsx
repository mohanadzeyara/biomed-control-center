import { useEffect, useState } from 'react';
import { Languages, Moon, Sun } from 'lucide-react';
import DeviceExplorer from './components/DeviceExplorer';
import type { Lang } from './data/devices';

export default function App() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'en');
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <main className="app-shell">
      <header className="site-header">
        <a href="#/" className="brand">
          <span>MedTech</span>
          <strong>Device Explorer</strong>
        </a>
        <div className="top-actions">
          <button onClick={() => setLang(lang === 'en' ? 'de' : 'en')} title="Change language">
            <Languages size={18} />
            {lang === 'en' ? 'DE' : 'EN'}
          </button>
          <button onClick={() => setDark(!dark)} title="Toggle dark mode">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <DeviceExplorer lang={lang} />
    </main>
  );
}
