import React, { useState } from 'react';

const scenarios: Record<string, string[]> = {
  "Momentum Hunter": [
    "Marknaden har brutit upp genom ett viktigt motstånd. Volymen är hög.",
    "Stark trend i tillväxtaktier de senaste 3 dagarna."
  ],
  "Contrarian Pulse": [
    "Marknaden har fallit 5 dagar i rad. RSI under 25.",
    "Negativa nyheter trycker ner kursen till 3-månaderslägsta."
  ],
  "TrendFollower X": [
    "MA50 korsar MA200 uppåt. Volatilitet ökar.",
    "Råvarupriserna stiger och tekniska indikatorer är positiva."
  ]
};

export function GhostMatch({ selectedDeck, setXp }: { selectedDeck: string, setXp: any }) {
  const [result, setResult] = useState('');

  const handleChoice = (choice: string) => {
    const gain = choice === 'Köp' ? 100 : choice === 'Avvakta' ? 50 : -50;
    setXp((prev: any) => {
      const newPoints = prev.points + gain;
      const newLevel = Math.floor(newPoints / 500) + 1;
      const newBadge = newPoints > 1500 ? 'Master' : newPoints > 1000 ? 'Strategist' : 'Rookie';
      return { level: newLevel, points: newPoints, badge: newBadge };
    });
    setResult(`Du valde: ${choice} → XP ${gain > 0 ? '+' : ''}${gain}`);
  };

  const prompt = selectedDeck && scenarios[selectedDeck]?.[0];

  if (!selectedDeck) return null;

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Ghostmatcher</h2>
      <p className="text-gray-300 mb-4">{prompt}</p>
      <div className="space-x-4">
        <button onClick={() => handleChoice('Köp')} className="bg-green-600 px-4 py-2 rounded">Köp</button>
        <button onClick={() => handleChoice('Avvakta')} className="bg-yellow-600 px-4 py-2 rounded">Avvakta</button>
        <button onClick={() => handleChoice('Sälj')} className="bg-red-600 px-4 py-2 rounded">Sälj</button>
      </div>
      {result && <p className="mt-4 text-gray-400">{result}</p>}
    </div>
  );
}
