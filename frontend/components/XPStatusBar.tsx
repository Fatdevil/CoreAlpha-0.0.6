import React from 'react';

export function XPStatusBar({ xp }: { xp: { level: number; points: number; badge: string } }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center">
      <span className="text-lg">Nivå: {xp.level}</span>
      <span className="text-lg">XP: {xp.points}</span>
      <span className="text-lg">Badge: {xp.badge}</span>
    </div>
  );
}
