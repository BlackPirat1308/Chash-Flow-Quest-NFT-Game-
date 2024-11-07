import React from 'react';
import { Wallet2, TrendingUp, Trophy } from 'lucide-react';

export function Features() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-4 rounded-xl w-fit mb-6">
            <Wallet2 className="h-8 w-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Learn Financial Basics</h3>
          <p className="text-teal-100">
            Master budgeting, saving, and investing through interactive gameplay and real-world scenarios.
          </p>
        </div>

        <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-4 rounded-xl w-fit mb-6">
            <TrendingUp className="h-8 w-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Earn While Learning</h3>
          <p className="text-teal-100">
            Complete challenges, earn NFT rewards, and build your virtual portfolio with real-world applications.
          </p>
        </div>

        <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-4 rounded-xl w-fit mb-6">
            <Trophy className="h-8 w-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Compete & Grow</h3>
          <p className="text-teal-100">
            Challenge other players, climb the leaderboards, and showcase your financial expertise.
          </p>
        </div>
      </div>
    </section>
  );
}