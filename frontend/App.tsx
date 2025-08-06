import React, { useState, useEffect } from 'react';
import { ExplainScoreCard } from './components/ExplainScoreCard';
import { DeckSelector } from './components/DeckSelector';
import { XPStatusBar } from './components/XPStatusBar';
import { GhostMatch } from './components/GhostMatch';

export default function App() {
  const [selectedDeck, setSelectedDeck] = useState('');
  const [xp, setXp] = useState({ level: 1, points: 0, badge: 'Rookie' });

  useEffect(() => {
    const savedXp = localStorage.getItem('corealpha_xp');
    const savedDeck = localStorage.getItem('corealpha_deck');
    if (savedXp) setXp(JSON.parse(savedXp));
    if (savedDeck) setSelectedDeck(savedDeck);
  }, []);

  useEffect(() => {
    localStorage.setItem('corealpha_xp', JSON.stringify(xp));
  }, [xp]);

  const handleDeckSelect = (deck: string) => {
    setSelectedDeck(deck);
    localStorage.setItem('corealpha_deck', deck);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold">CoreAlpha: AI Trading Coach</h1>
      <XPStatusBar xp={xp} />
      <DeckSelector onSelect={handleDeckSelect} selectedDeck={selectedDeck} />
      <ExplainScoreCard selectedDeck={selectedDeck} />
      <GhostMatch selectedDeck={selectedDeck} setXp={setXp} />
    </div>
  );
}
