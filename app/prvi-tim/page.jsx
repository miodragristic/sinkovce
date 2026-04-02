'use client';

import Image from 'next/image';

const squad = {
  coach: {
    name: "Ivan Stanković",
    role: "Glavni trener",
    image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
  },

  players: [
    { number: 1,  name: "Saša",      surname: "Savić",          position: "Golman",   image: null },
    { number: 12, name: "Stefan",    surname: "Stevanović",     position: "Golman",   image: null },
    
    { number: 2,  name: "Marko",     surname: "Milenković",     position: "Odbrana",  image: null },
    { number: 3,  name: "Stefan",    surname: "Denić",          position: "Odbrana",  image: "https://fkgornjesinkovce.vercel.app/static/media/pusa.c85916bce24135a92050.png" },
    { number: 4,  name: "Stefan",    surname: "Pavlović",       position: "Odbrana",  image: null },
    { number: 5,  name: "Ranko",     surname: "Veličković",     position: "Odbrana",  image: "https://fkgornjesinkovce.vercel.app/static/media/ranko.d971d2c7d8593e9d7fbc.png" },
    { number: 6,  name: "Ivan",      surname: "Dimitrijević",   position: "Odbrana",  image: "https://fkgornjesinkovce.vercel.app/static/media/duki.306b362c979b2b57a2e3.png" },
    { number: 8,  name: "Vladan",    surname: "Stanojković",    position: "Odbrana",  image: null },
    { number: 14, name: "Đorđe",     surname: "Filipović",      position: "Odbrana",  image: null },
    { number: 15, name: "Milan",     surname: "Mihajlović",     position: "Odbrana",  image: null },
    { number: 20, name: "Stefan",    surname: "Stajić",         position: "Odbrana",  image: null },

    { number: 6,  name: "Miloš",     surname: "Veličković",     position: "Sredina",  image: null },
    { number: 11, name: "Đorđe",     surname: "Milošević",      position: "Sredina",  image: null },
    { number: 17, name: "Milan",     surname: "Denić",          position: "Sredina",  image: null },
    { number: 18, name: "Aleksa",    surname: "Petrović",       position: "Sredina",  image: null },
    { number: 21, name: "Danijel",   surname: "Kostić",         position: "Sredina",  image: "https://fkgornjesinkovce.vercel.app/static/media/daka.70b40aced36511db2e0b.png" },

    { number: 7,  name: "Lazar",     surname: "Petrović",       position: "Napad",    image: null },
    { number: 9,  name: "Aleksa",    surname: "Ljubić",         position: "Napad",    image: null },
    { number: 10, name: "Stefan",    surname: "Đorđević",       position: "Napad",    image: null },
    { number: 19, name: "Mihailo",   surname: "Milenković",     position: "Napad",    image: null },
  ]
};

const defaultBgImage = "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg";

export default function PrviTimPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <div className="relative h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={defaultBgImage}
          alt="Prvi tim"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black tracking-wider mb-4">PRVI TIM</h1>
          <p className="text-xl text-gray-300">FK Gornje Sinkovce • Sezona 2025/26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <PositionSection title="GOLMANI" players={squad.players.filter(p => p.position === "Golman")} bgImage={defaultBgImage} />
        <PositionSection title="ODBRANA" players={squad.players.filter(p => p.position === "Odbrana")} bgImage={defaultBgImage} />
        <PositionSection title="SREDINA" players={squad.players.filter(p => p.position === "Sredina")} bgImage={defaultBgImage} />
        <PositionSection title="NAPAD"   players={squad.players.filter(p => p.position === "Napad")} bgImage={defaultBgImage} />

        {/* Trener */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[#00A3FF] mb-8 border-b border-zinc-800 pb-4">TRENER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-zinc-900 border border-zinc-800 hover:border-[#00A3FF] transition-all duration-300 overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={squad.coach.image}
                  alt={squad.coach.name}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{squad.coach.name}</h3>
                  <p className="text-[#00A3FF] text-sm mt-1">{squad.coach.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
function PositionSection({ title, players, bgImage }) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-[#00A3FF] mb-8 border-b border-zinc-800 pb-4">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => {
          const hasPlayerImage = player.image && player.image.length > 5; // provera da li postoji slika

          return (
            <div 
              key={player.number}
              className="group bg-zinc-900 border border-zinc-800 hover:border-[#00A3FF] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-[500px]">
                {/* Pozadinska slika */}
                <Image
                  src={bgImage}
                  alt="Pozadina"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                />

              {/* Individualna slika igrača */}
{hasPlayerImage && (
  <div className="absolute inset-0 z-10 flex items-end justify-center pb-20">
    <Image
      src={player.image}
      alt={`${player.name} ${player.surname}`}
      width={1300}
      height={1300}
      className="object-contain 
                 w-[260px] sm:w-[500px] md:w-[540px] lg:w-[580px] xl:w-[520px]
                 drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] 
                 group-hover:scale-110 
                 transition-all duration-700 ease-out"
    />
  </div>
)}

                {/* Broj dresa */}
                <div className="absolute top-6 left-6 text-[85px] font-black text-white/90 leading-none tracking-tighter z-20">
                  {player.number}
                </div>

                {/* Ime i prezime + pozicija */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 z-20">
                  <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                  <p className="text-2xl font-bold text-white -mt-1">{player.surname}</p>
                  <p className="text-[#00A3FF] text-sm mt-2 tracking-wide">{player.position.toUpperCase()}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}