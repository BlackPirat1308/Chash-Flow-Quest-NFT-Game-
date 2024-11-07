import React from 'react';

export function GamePreview() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Game Preview</h2>
        <p className="text-xl text-teal-100 max-w-2xl mx-auto">
          Experience the future of financial education through our immersive gameplay
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <img 
          src="/game-preview.jpg" 
          alt="CashFlow Quest Characters" 
          className="rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-400/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent rounded-2xl"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Diverse Characters</h3>
          <p className="text-teal-100">Choose from a variety of unique characters, each with their own financial expertise and strategies.</p>
        </div>
        <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Dynamic Markets</h3>
          <p className="text-teal-100">Experience realistic market simulations and learn to navigate various financial scenarios.</p>
        </div>
        <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Real Rewards</h3>
          <p className="text-teal-100">Earn NFTs and digital assets while mastering essential financial concepts.</p>
        </div>
      </div>
    </section>
  );
}