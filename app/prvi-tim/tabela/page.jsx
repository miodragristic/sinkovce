'use client';

import React from 'react';
import Image from 'next/image';   // ← OVO JE BILO NEDOSTAJALO!

const tabelaData = [
  { poz: 1, simbol: '', domacin: 'NAVALIN', odigrane: 12, pobede: 9, nerešeno: 2, porazi: 1, golovi: '35:7', diff: '+28', forma: ['W','W','W','D','D'], poeni: 29 },

  { poz: 2, simbol: '', domacin: 'MLADOST (DL)', odigrane: 12, pobede: 9, nerešeno: 2, porazi: 1, golovi: '29:5', diff: '+24', forma: ['L','W','W','W','D'], poeni: 29 },

  { poz: 3, simbol: '', domacin: 'MLADOST (K)', odigrane: 12, pobede: 7, nerešeno: 2, porazi: 3, golovi: '31:15', diff: '+16', forma: ['W','W','W','D','D'], poeni: 23 },

  { poz: 4, simbol: '', domacin: 'RADNIK 2013', odigrane: 12, pobede: 7, nerešeno: 1, porazi: 4, golovi: '20:10', diff: '+10', forma: ['W','W','L','L','W'], poeni: 22 },

  { poz: 5, simbol: '', domacin: 'FSU MORAVAC 1947', odigrane: 12, pobede: 6, nerešeno: 0, porazi: 6, golovi: '14:27', diff: '-13', forma: ['W','L','L','W','W'], poeni: 18 },

  { poz: 6, simbol: '', domacin: 'GORNJE SINKOVCE', odigrane: 12, pobede: 4, nerešeno: 1, porazi: 7, golovi: '18:28', diff: '-10', forma: ['L','L','W','L','D'], poeni: 13 },

  { poz: 7, simbol: '', domacin: 'NAPREDAK 1986', odigrane: 12, pobede: 1, nerešeno: 0, porazi: 11, golovi: '8:33', diff: '-25', forma: ['L','L','L','L','L'], poeni: 0 },

  { poz: 8, simbol: '', domacin: 'TODOROVCE', odigrane: 12, pobede: 1, nerešeno: 0, porazi: 11, golovi: '3:33', diff: '-30', forma: ['L','L','L','W','L'], poeni: 0 },


];

const TabelaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Header - isti stil kao Prvi Tim */}
      <div className="relative h-[420px] flex items-center justify-center overflow-hidden mb-12">
        <Image
          src="https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
          alt="Tabela"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        
        <div className="relative z-10 text-center">
          <div className="uppercase tracking-[4px] text-sm text-zinc-400 mb-3">FK GORNJE SINKOVCE</div>
          <h1 className="text-6xl md:text-7xl font-black tracking-[-2px] mb-4">TABELA</h1>
          <p className="text-xl text-zinc-300">Gradska Liga Leskovac • Sezona 2025/26</p>
        </div>
      </div>

      {/* Glavni sadržaj */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        <div className="overflow-x-auto  border border-zinc-800 bg-zinc-950">
          <table className="w-full min-w-[900px] text-sm md:text-base">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-700 text-[#00A3FF] uppercase text-xs tracking-widest">
                <th className="py-5 px-6 text-left font-medium">#</th>
                <th className="py-5 px-4 text-center font-medium">▲▼</th>
                <th className="py-5 px-8 text-left font-medium">TIM</th>
                <th className="py-5 px-4 text-center font-medium">O</th>
                <th className="py-5 px-4 text-center font-medium">P</th>
                <th className="py-5 px-4 text-center font-medium">N</th>
                <th className="py-5 px-4 text-center font-medium">I</th>
                <th className="py-5 px-8 text-center font-medium">GOLOVI</th>
                <th className="py-5 px-6 text-center font-medium">DIFF</th>
                <th className="py-5 px-12 text-center font-medium">FORMA</th>
                <th className="py-5 px-8 text-center font-bold text-white">POENI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {tabelaData.map((row, index) => (
                <tr 
                  key={index}
                  className="hover:bg-zinc-900/70 transition-colors"
                >
                  <td className="py-5 px-6 font-bold text-center text-lg text-white">{row.poz}</td>
                  <td className="py-5 px-4 text-center text-sm text-zinc-400">{row.simbol}</td>
                  <td className="py-5 px-8 font-bold text-white tracking-wider">{row.domacin}</td>

                  <td className="py-5 px-4 text-center text-zinc-300">{row.odigrane}</td>
                  <td className="py-5 px-4 text-center text-emerald-400">{row.pobede}</td>
                  <td className="py-5 px-4 text-center text-amber-400">{row.nerešeno}</td>
                  <td className="py-5 px-4 text-center text-red-400">{row.porazi}</td>
                  <td className="py-5 px-8 text-center font-mono text-zinc-300">{row.golovi}</td>
                  <td className={`py-5 px-6 text-center font-medium ${row.diff.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {row.diff}
                  </td>

                  {/* Forma - kockice */}
                  <td className="py-5 px-12">
                    <div className="flex gap-1.5 justify-center">
                      {row.forma.map((f, i) => (
                        <span 
                          key={i}
                          className={`inline-flex items-center justify-center w-7 h-7 text-xs font-bold border border-zinc-700 ${
                            f === 'W' ? 'bg-emerald-500 text-black' :
                            f === 'D' ? 'bg-amber-500 text-black' :
                            'bg-red-500 text-white'
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="py-5 px-8 text-center font-bold text-xl text-white">
                    {row.poeni}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default TabelaPage;