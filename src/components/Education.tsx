import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/50 to-transparent pointer-events-none"></div>
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Educational Journey</h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Progress through carefully designed levels that teach real financial concepts while having fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-3 rounded-xl">
                <BookOpen className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Basic Financial Literacy</h4>
                <p className="text-teal-100">Learn budgeting, saving, and essential money management skills.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-3 rounded-xl">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Advanced Investment</h4>
                <p className="text-teal-100">Master stock markets, real estate, and cryptocurrency investments.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-800/30 rounded-xl p-8 backdrop-blur-sm border border-cyan-400/20">
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Your Learning Path</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold">1</div>
                <div className="flex-1 bg-emerald-800/30 rounded-lg p-4 border border-cyan-400/20">
                  <p className="font-semibold text-teal-100">Complete Basic Training</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-800/50 flex items-center justify-center text-teal-100">2</div>
                <div className="flex-1 bg-emerald-800/30 rounded-lg p-4 border border-cyan-400/20">
                  <p className="font-semibold text-teal-100">Earn Your First NFT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-800/50 flex items-center justify-center text-teal-100">3</div>
                <div className="flex-1 bg-emerald-800/30 rounded-lg p-4 border border-cyan-400/20">
                  <p className="font-semibold text-teal-100">Join Competitive Leagues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}