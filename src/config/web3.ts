import { http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { createAppKit } from '@reown/appkit/react';

export const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

const metadata = {
  name: 'Cashflow Quest',
  description: 'Master Your Finances Through Play',
  url: 'https://cashflowquest.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, sepolia] as const;

export const wagmiAdapter = new WagmiAdapter({
  networks: chains,
  projectId,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const config = wagmiAdapter.wagmiConfig;

createAppKit({
  adapters: [wagmiAdapter],
  networks: chains,
  projectId,
  metadata,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#22c55e',
    '--w3m-border-radius-master': '0.75rem',
  },
});
