import { create } from 'zustand';

interface Player {
  id: string;
  ready: boolean;
  choice?: 'BTC' | 'ETH';
}

interface GameStore {
  players: Player[];
  onlinePlayers: number;
  addPlayer: (id: string) => void;
  removePlayer: (id: string) => void;
  setPlayerReady: (id: string) => void;
  resetGame: () => void;
  setOnlinePlayers: (count: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  players: [],
  onlinePlayers: 0,
  addPlayer: (id) =>
    set((state) => ({
      players: state.players.length < 2 ? [...state.players, { id, ready: false }] : state.players,
    })),
  removePlayer: (id) =>
    set((state) => ({
      players: state.players.filter((player) => player.id !== id),
    })),
  setPlayerReady: (id) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, ready: true } : player
      ),
    })),
  resetGame: () => set({ players: [] }),
  setOnlinePlayers: (count) => set({ onlinePlayers: count }),
}));