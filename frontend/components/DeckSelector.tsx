import React, { useState, useEffect } from 'react';

export function DeckSelector({ onSelect, selectedDeck }: { onSelect: (deck: string) => void, selectedDeck: string }) {
  const [decks, setDecks] = useState<string[]>([]);

  useEffect(() => {
fetch(`${import.meta.env.VITE_BACKEND_URL}/deck`)      .then(res => res.json())
      .then(data => setDecks(data.decks))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (value: string) => {
    onSelect(value);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Välj TradingDeck</h2>
      <select
        className="bg-gray-900 text-white p-2 rounded w-full"
        value={selectedDeck}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">-- Välj strategi --</option>
        {decks.map((deck) => (
          <option key={deck} value={deck}>{deck}</option>
        ))}
      </select>
    </div>
  );
}
