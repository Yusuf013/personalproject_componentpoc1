"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    image: "/images/PPplaceholder1.png",
  },
  {
    id: 2,
    name: "Rekenen",
    color: "bg-[#E07A5F]",
    image: "/images/PPplaceholder2.png",
  },
  {
    id: 3,
    name: "Wereldoriëntatie",
    color: "bg-[#B7C4CF]",
    image: "/images/PPplaceholder1.png",
  },
  {
    id: 4,
    name: "Handvaardigheid",
    color: "bg-[#BEE9F1]",
    image: "/images/PPplaceholder2.png",
  },
  {
    id: 5,
    name: "Beeldende vorming",
    color: "bg-[#3D2B3D]",
    image: "/images/PPplaceholder1.png",
  },
];

export default function SubjectPreview() {
  const [activeSubject, setActiveSubject] = useState<number>(1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl text-black font-bold text-center mb-8">Populaire vakken</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Linkerkant - Vakken knoppen */}
        <div className="space-y-4">
          {subjects.map((subject) => (
            <motion.button
              key={subject.id}
              className={`w-full py-4 px-6 rounded-full text-xl font-bold text-center transition-colors 
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
