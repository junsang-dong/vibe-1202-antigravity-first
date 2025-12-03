import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import { quotes } from './data/quotes';
import { Sparkles } from 'lucide-react';

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [theme, setTheme] = useState('neon-night');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>
          <Sparkles className="logo-icon" /> Vibe Quotes
        </h1>
      </header>
      <main>
        <QuoteCard quote={currentQuote} onNewQuote={getRandomQuote} />
      </main>
      <footer>
        <p>Stay in the flow.</p>
      </footer>
    </div>
  );
}

export default App;
