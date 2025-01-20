"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Kalam } from 'next/font/google';

const kalam = Kalam({
  subsets: ['latin'],
  weight: '700', // Alleen Bold, pas dit aan naar jouw wens
});


interface Subject {
  id: number;
  name: string;
  color: string;
  image: string;
}

const subjects: Subject[] = [
  {
    id: 1,
    name: "Taal",
    color: "bg-[#D4A5D3]",
    image: "/images/ppp1.png",
  },
  {
    id: 2,
    name: "Rekenen",
    color: "bg-[#E07A5F]",
    image: "/images/ppp2.png",
  },
  {
    id: 3,
    name: "Wereldoriëntatie",
    color: "bg-[#B7C4CF]",
    image: "/images/ppp3.png",
  },
  {
    id: 4,
    name: "Handvaardigheid",
    color: "bg-[#BEE9F1]",
    image: "/images/ppp4.png",
  },
  {
    id: 5,
    name: "Beeldende vorming",
    color: "bg-[#3D2B3D]",
    image: "/images/ppp5.png",
  },
];

export default function SubjectPreview() {
  const [activeSubject, setActiveSubject] = useState<number>(1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col justify-center"  style={{ fontFamily: 'Kalam, sans-serif' }}>
        <h2 className="text-3xl text-black font-bold text-center mb-1">Populaire vakken</h2>
        <img 
          src="/images/image container.svg" 
          className="w-[70px] h-[20px] mx-auto" 
          alt="Image container" 
          />
        </div>


      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Linkerkant - Vakken knoppen */}
        <div className="space-y-4"   style={{
                          fontFamily: "Kalam, sans-serif",
                          fontWeight: 700, // Zorg ervoor dat het bold is
                          color: "#2E2E4F",
                        }}>
          {subjects.map((subject) => (
            <motion.button
              key={subject.id}
              className={`w-full py-4 px-6 rounded-full text-2xl font-bold text-center transition-colors 
                ${subject.color} 
                ${subject.id === 5 ? "text-white" : "text-black"} 
                hover:opacity-90`}
              whileHover={{ x: 20 }}
              onHoverStart={() => setActiveSubject(subject.id)}
            >
              {subject.name}
            </motion.button>
          ))}
        </div>

        {/* Rechterkant - Afbeelding preview */}
        <div className="relative aspect-square">
          <motion.div
            key={activeSubject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-transparent rounded-lg" />
              <img
                src={subjects[activeSubject - 1].image || "/placeholder.svg"}
                alt={subjects[activeSubject - 1].name}
                className="relative z-10 w-full h-full object-contain p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
