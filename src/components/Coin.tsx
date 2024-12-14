import React, { useState, useEffect } from 'react';
import { BitcoinIcon, EthereumIcon } from './Icons';

interface CoinProps {
  onFlipEnd: (result: 'BTC' | 'ETH') => void;
}

export const Coin: React.FC<CoinProps> = ({ onFlipEnd }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<'BTC' | 'ETH'>('BTC');

  useEffect(() => {
    if (isFlipping) {
      const flipDuration = 3000;
      const result = Math.random() < 0.5 ? 'BTC' : 'ETH';
      
      setTimeout(() => {
        setResult(result);
        setIsFlipping(false);
        onFlipEnd(result);
      }, flipDuration);
    }
  }, [isFlipping, onFlipEnd]);

  return (
    <div className="relative w-32 h-32">
      <div
        className={`absolute w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center transform transition-transform duration-1000
          ${isFlipping ? 'animate-flip' : ''}`}
      >
        {result === 'BTC' ? (
          <BitcoinIcon className="w-16 h-16 text-white" />
        ) : (
          <EthereumIcon className="w-16 h-16 text-white" />
        )}
      </div>
    </div>
  );
};