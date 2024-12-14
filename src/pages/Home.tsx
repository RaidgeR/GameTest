import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { onlinePlayers, setOnlinePlayers } = useGameStore();

  useEffect(() => {
    // Simulate random online players (1-10)
    setOnlinePlayers(Math.floor(Math.random() * 10) + 1);
  }, [setOnlinePlayers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center">
          <Coins className="w-16 h-16 text-yellow-400" />
        </div>
        <h1 className="text-4xl font-bold">Crypto Coin Flip</h1>
        <div className="text-lg">
          <p>Online Players: <span className="text-yellow-400">{onlinePlayers}</span></p>
        </div>
        <button
          onClick={() => navigate('/game')}
          className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold text-xl transition-colors"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};