import React from 'react';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900">
      <Header />
      <main className="container mx-auto px-4">
        {/* Game preview and other sections will go here */}
      </main>
    </div>
  );
}

export default App;