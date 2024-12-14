import React from 'react';
import { Users } from 'lucide-react';

interface PlayerCounterProps {
  currentPlayers: number;
  maxPlayers: number;
}

export const PlayerCounter: React.FC<PlayerCounterProps> = ({ currentPlayers, maxPlayers }) => (
  <div className="flex items-center justify-center space-x-4">
    <Users className="w-6 h-6" />
    <span>{currentPlayers}/{maxPlayers} Players</span>
  </div>
);