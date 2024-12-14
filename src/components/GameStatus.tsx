import React from 'react';

interface GameStatusProps {
  allPlayersReady: boolean;
  playerCount: number;
  gameResult: string | null;
}

export const GameStatus: React.FC<GameStatusProps> = ({ 
  allPlayersReady, 
  playerCount, 
  gameResult 
}) => {
  if (gameResult) {
    return <div className="text-2xl font-bold">{gameResult}</div>;
  }

  if (!allPlayersReady && playerCount < 2) {
    return <p className="text-lg">Waiting for players...</p>;
  }

  if (!allPlayersReady && playerCount === 2) {
    return <p className="text-lg">Waiting for all players to be ready...</p>;
  }

  return null;
};