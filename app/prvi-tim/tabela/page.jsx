'use client';

import React from 'react';
import Image from 'next/image';

const tabelaData = [
  {
    poz: 1,
    simbol: '▲',
    domacin: 'NAVALIN',
    odigrane: 13,
    pobede: 10,
    nerešeno: 2,
    porazi: 1,
    golovi: '39:8',
    diff: '+31',
    forma: ['W', 'W', 'W', 'D', 'W'],
    poeni: 32
  },
  {
    poz: 2,
    simbol: '▼',
    domacin: 'MLADOST (DL)',
    odigrane: 13,
    pobede: 10,
    nerešeno: 2,
    porazi: 1,
    golovi: '32:5',
    diff: '+27',
    forma: ['W', 'W', 'W', 'D', 'W'],
    poeni: 32
  },
  {
    poz: 3,
    simbol: '',
    domacin: 'MLADOST (K)',
    odigrane: 13,
    pobede: 8,
    nerešeno: 2,
    porazi: 3,
    golovi: '34:15',
    diff: '+19',
    forma: ['W', 'W', 'D', 'D', 'W'],
    poeni: 26
  },
  {
    poz: 4,
    simbol: '',
    domacin: 'RADNIK 2013',
    odigrane: 13,
    pobede: 8,
    nerešeno: 1,
    porazi: 4,
    golovi: '27:11',
    diff: '+16',
    forma: ['W', 'W', 'L', 'W', 'W'],
    poeni: 25
  },
  {
    poz: 5,
    simbol: '',
    domacin: 'FSU MORAVAC 1947',
    odigrane: 13,
    pobede: 6,
    nerešeno: 0,
    porazi: 7,
    golovi: '15:34',
    diff: '-19',
    forma: ['L', 'L', 'W', 'W', 'L'],
    poeni: 18
  },
  {
    poz: 6,
    simbol: '',
    domacin: 'GORNJE SINKOVCE',
    odigrane: 13,
    pobede: 4,
    nerešeno: 1,
    porazi: 8,
    golovi: '19:32',
    diff: '-13',
    forma: ['L', 'W', 'L', 'D', 'L'],
    poeni: 13
  },
  {
    poz: 7,
    simbol: '',
    domacin: 'TODOROVCE',
    odigrane: 13,
    pobede: 1,
    nerešeno: 0,
    porazi: 12,
    golovi: '3:36',
    diff: '-33',
    forma: ['L', 'L', 'L', 'L', 'L'],
    poeni: 3
  },
  {
    poz: 8,
    simbol: '',
    domacin: 'NAPREDAK 1986 (-1)',
    odigrane: 13,
    pobede: 1,
    nerešeno: 0,
    porazi: 12,
    golovi: '8:36',
    diff: '-28',
    forma: ['L', 'L', 'L', 'L', 'L'],
    poeni: 2
  },
];

const TabelaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pb-16">
      
      {/* Hero Header */}
      <div className="relative h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
          alt="Tabela"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        
        <div className="relative z-10 text-center px-4">
          <div className="uppercase tracking-[4px] text-sm text-zinc-400 mb-3">FK GORNJE SINKOVCE</div>
          <h1 className="text-6xl md:text-7xl font-black tracking-[-2px] mb-4">TABELA</h1>
          <p className="text-xl text-zinc-300">Gradska Liga Leskovac • Sezona 2025/26</p>
        </div>
      </div>

      {/* Tabela */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          <table className="w-full min-w-[950px] text-sm md:text-base">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-700 text-[#00A3FF] uppercase text-xs tracking-widest">
                <th className="py-5 px-6 text-left font-medium">#</th>
                <th className="py-5 px-4 text-center font-medium"></th>
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
                  className="hover:bg-zinc-900/80 transition-all duration-200"
                >
                  <td className="py-5 px-6 font-bold text-center text-lg text-white">{row.poz}</td>
                  
                  <td className="py-5 px-4 text-center text-base">
                    {row.simbol === '▲' && <span className="text-emerald-400">▲</span>}
                    {row.simbol === '▼' && <span className="text-red-400">▼</span>}
                    {row.simbol === '' && <span className="text-zinc-600">▬</span>}
                  </td>

                  <td className="py-5 px-8 font-bold text-white tracking-wider">{row.domacin}</td>

                  <td className="py-5 px-4 text-center text-zinc-300">{row.odigrane}</td>
                  <td className="py-5 px-4 text-center text-emerald-400 font-medium">{row.pobede}</td>
                  <td className="py-5 px-4 text-center text-amber-400 font-medium">{row.nerešeno}</td>
                  <td className="py-5 px-4 text-center text-red-400 font-medium">{row.porazi}</td>
                  <td className="py-5 px-8 text-center font-mono text-zinc-300">{row.golovi}</td>
                  
                  <td className={`py-5 px-6 text-center font-medium ${row.diff.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {row.diff}
                  </td>

                  {/* Forma - W = 1 (pobeda), D = X (neriješeno), L = 2 (poraz) */}
                  <td className="py-5 px-12">
                    <div className="flex gap-1.5 justify-center">
                      {row.forma.map((f, i) => (
                        <span 
                          key={i}
                          className={`inline-flex items-center justify-center w-7 h-7 text-xs font-bold rounded border ${
                            f === 'W' ? 'bg-emerald-500 text-black border-emerald-500' :
                            f === 'D' ? 'bg-amber-500 text-black border-amber-500' :
                            'bg-red-500 text-white border-red-500'
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="py-5 px-8 text-center font-bold text-2xl text-white">
                    {row.poeni}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-zinc-500 text-xs mt-6">
          Poslednje ažuriranje: 5. april 2026. • Gradska liga Leskovac
        </p>
      </div>
    </div>
  );
};

export default TabelaPage;