import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
}

const OtherHeader: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-6">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg mb-6">
                {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {description}
            </p>
            </div>
        </div>
    </section>

  )
}

export default OtherHeader