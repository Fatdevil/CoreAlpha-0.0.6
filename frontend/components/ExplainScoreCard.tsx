import React, { useEffect, useState } from 'react';

export function ExplainScoreCard({ selectedDeck }: { selectedDeck: string }) {
  const [explanation, setExplanation] = useState('');

  useEffect(() => {
    if (!selectedDeck) return;
    fetch(`${import.meta.env.VITE_BACKEND_URL}/explain?deck=${encodeURIComponent(selectedDeck)}`)
      .then(res => res.json())
      .then(data => setExplanation(data.message))
      .catch(err => console.error(err));
  }, [selectedDeck]);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">AI ExplainScore</h2>
      <p className="text-gray-300">{explanation || 'Välj en strategi för att få AI-feedback.'}</p>
    </div>
  );
}
