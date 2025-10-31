"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/img/team02.jpg",
    title: "Youths Entrepreneurs Empowerment",
    description:
      "Supporting community youth to build sustainable businesses and create economic independence through accessible microfinance solutions.",
  },
  {
    image: "/img/slide02.jpg",
    title: "Agricultural Development Loans",
    description:
      "Empowering young farmers with capital and training to modernize agriculture and increase food security across community farms.",
  },
  {
    image: "/img/smallbusiness02.jpg",
    title: "Small And Medium Enterprise Growth Funding",
    description:
      "Investing in the next generation of community youth entrepreneurs to drive small and medium enterprise transformation and economic growth.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    // <div className="relative h-[85vh] md:h-screen overflow-hidden">
    //   {slides.map((slide, index) => (
    //     <div
    //       key={index}
    //       className={`absolute inset-0 transition-opacity duration-1000 ${
    //         index === currentSlide ? "opacity-100" : "opacity-0"
    //       }`}
    //     >
    //       <div
    //         className="w-full h-full bg-cover bg-center"
    //         style={{ backgroundImage: `url(${slide.image})` }}
    //       >
    //         {/* Gradient Overlay */}
    //         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-black/70 to-green-900/60" />

    //         {/* Content */}
    //         <div className="relative z-10 h-full flex items-center">
    //           <div className="container mx-auto px-6">
    //             <div className="max-w-2xl text-left">
    //               <span className="bg-gradient-to-r from-yellow-300/100 via-yellow-500/100 to-green-600/100 bg-clip-text text-transparent text-2xl font-bold">
    //                 YOUTHS INITIATIVE COOPERATIVE CREDIT UNION LTD
    //               </span>
    //               <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
    //                 {slide.title}
    //               </h1>
    //               <p className="text-lg md:text-2xl text-gray-100 mb-8 leading-relaxed">
    //                 {slide.description}
    //               </p>
    //               <div className="flex gap-4">
    //                 <button className="bg-gradient-to-r from-green-900/70 via-black/50 to-transparent bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md shadow">
    //                   Create An Account
    //                 </button>
    //                 <button className="border border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-green-700 transition">
    //                   Learn More
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}

    //   {/* Navigation buttons */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
    //   >
    //     <ChevronLeft size={28} />
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
    //   >
    //     <ChevronRight size={28} />
    //   </button>

    //   {/* Slide indicators */}
    //   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
    //     {slides.map((_, index) => (
    //       <button
    //         key={index}
    //         onClick={() => setCurrentSlide(index)}
    //         className={`w-3 h-3 rounded-full transition-all ${
    //           index === currentSlide
    //             ? "bg-yellow-400 scale-125"
    //             : "bg-white/60 hover:bg-white"
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="relative h-[85vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-black/70 to-green-900/60" />

            {/* Glass Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 shadow-xl max-w-2xl"
                >
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-green-600 bg-clip-text text-transparent text-2xl font-bold tracking-wide">
                    YOUTHS INITIATIVE COOPERATIVE CREDIT UNION LTD
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-8">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <Link href="https://youthccul.balaanz.com/login">
                      <button className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 hover:brightness-110 text-white font-semibold py-3 px-8 rounded-md shadow-md transition cursor-pointer">
                        Login to Online Banking
                      </button>
                    </Link>
                    
                    <button className="border border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-green-800 transition">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-yellow-400 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
