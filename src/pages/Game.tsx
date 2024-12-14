import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { Coin } from '../components/Coin';
import { PlayerCounter } from '../components/PlayerCounter';
import { GameStatus } from '../components/GameStatus';
import { ReadyButton } from '../components/ReadyButton';
import { determineWinner, startFlip } from '../utils/gameLogic';

export const Game: React.FC = () => {
  const navigate = useNavigate();
  const { players, addPlayer, setPlayerReady, resetGame } = useGameStore();
  const [playerId] = useState(() => Math.random().toString(36).substr(2, 9));
  const [isFlipping, setIsFlipping] = useState(false);
  const [gameResult, setGameResult] = useState<string | null>(null);

  useEffect(() => {
    addPlayer(playerId);
    return () => resetGame();
  }, [addPlayer, playerId, resetGame]);

  const handleReady = () => {
    setPlayerReady(playerId);
  };

  const allPlayersReady = players.length === 2 && players.every((p) => p.ready);
  const currentPlayer = players.find(p => p.id === playerId);
  const showReadyButton = currentPlayer && !currentPlayer.ready;

  useEffect(() => {
    if (allPlayersReady && !isFlipping) {
      startFlip(setIsFlipping);
    }
  }, [allPlayersReady, isFlipping]);

  const handleFlipEnd = (result: 'BTC' | 'ETH') => {
    const winResult = determineWinner(result, playerId, players);
    setGameResult(winResult);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-8">
        <PlayerCounter currentPlayers={players.length} maxPlayers={2} />

        <div className="flex flex-col items-center space-y-8">
          <Coin onFlipEnd={handleFlipEnd} />
          
          <GameStatus 
            allPlayersReady={allPlayersReady}
            playerCount={players.length}
            gameResult={gameResult}
          />

          <ReadyButton 
            onClick={handleReady}
            isVisible={showReadyButton}
          />
        </div>

        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};