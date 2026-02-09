import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

export const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

const metadata = {
  name: 'Cashflow Quest',
  description: 'Master Your Finances Through Play',
  url: 'https://cashflowquest.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    walletConnect({
      projectId,
      metadata,
      showQrModal: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
