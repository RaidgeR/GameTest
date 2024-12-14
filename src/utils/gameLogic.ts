export const determineWinner = (
  result: 'BTC' | 'ETH',
  playerId: string,
  players: Array<{ id: string; ready: boolean }>
): string => {
  const playerIndex = Math.floor(Math.random() * 2);
  const currentPlayerWins = (playerIndex === 0 && result === 'BTC') || 
                          (playerIndex === 1 && result === 'ETH');
  
  if (players[playerIndex]?.id === playerId) {
    return currentPlayerWins ? 'You won!' : 'You lost!';
  }
  return currentPlayerWins ? 'You lost!' : 'You won!';
};

export const startFlip = (setCoinFlipping: (value: boolean) => void) => {
  setCoinFlipping(true);
};