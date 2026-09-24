"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/ibonji/flyer01.jpg", title: "Image 1" },
  { src: "/ibonji/flyer02.jpg", title: "Image 2" },
  { src: "/ibonji/flyer03.jpg", title: "Image 3" },
  { src: "/ibonji/flyer04.jpg", title: "Image 4" },
  { src: "/ibonji/flyer05.jpg", title: "Image 5" },
  { src: "/ibonji/flyer06.jpg", title: "Image 2" },
  { src: "/ibonji/football01.jpg", title: "Image 7" },
  { src: "/ibonji/football02.jpg", title: "Image 8" },
  { src: "/ibonji/football03.jpg", title: "Image 9" },
  { src: "/ibonji/office01.jpg", title: "Image 10" },
  // { src: "/ibonji/ereception.jpg", title: "Image 10" },
  // { src: "/ibonji/attendingtwo.jpg", title: "Image 9" },
];

export default function GalleryTwo() {
  const [selected, setSelected] = useState<null | (typeof images)[0]>(null);

  return (
    <div className="w-full min-h-screen px-6 py-12 text-white">

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelected(img)}
          >
            <div className="relative w-full h-64">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* title */}
            <div className="absolute bottom-3 left-3 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
              {img.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[90%] md:w-[70%] h-[70%]"
            >
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}