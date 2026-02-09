import { useState } from 'react';
import { useAccount, useDisconnect, useConnect } from 'wagmi';
import { Wallet } from 'lucide-react';

export function CryptoPayment() {
  const [showConnectors, setShowConnectors] = useState(false);
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors, isPending } = useConnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-yellow-500/30 border border-yellow-400/30"
      >
        <Wallet className="h-5 w-5" />
        <span>
          {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Disconnect'}
        </span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowConnectors(!showConnectors)}
        disabled={isPending}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-yellow-500/30 border border-yellow-400/30 disabled:opacity-50"
      >
        <Wallet className="h-5 w-5" />
        <span>{isPending ? 'Connecting...' : 'Connect Wallet'}</span>
      </button>

      {showConnectors && (
        <div className="absolute right-0 mt-2 py-2 w-56 bg-emerald-800/95 backdrop-blur-sm rounded-xl border border-cyan-400/20 shadow-xl z-50">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setShowConnectors(false);
              }}
              className="w-full px-4 py-3 text-left text-teal-100 hover:bg-cyan-400/20 transition-colors duration-200"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
