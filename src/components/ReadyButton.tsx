import React from 'react';

interface ReadyButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export const ReadyButton: React.FC<ReadyButtonProps> = ({ onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold transition-colors"
    >
      Ready
    </button>
  );
};