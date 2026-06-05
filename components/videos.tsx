"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "YOUTHCCul in the Field to understand the problems of its members",
    url: "https://www.youtube.com/embed/S_U3YiZR0Rs",
  },
  {
    title: "The Story of our customer's pain point matter",
    url: "https://www.youtube.com/embed/Z9usSRYqqdM",
  },
];

export default function VideoSection() {
  return (
    <section className="w-full text-white py-16 px-6">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured Stories
        </h2>
        <p className="text-gray-400 mt-2">
          Watch inspiring real-life moments
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden bg-black/40 shadow-lg border border-white/10"
          >
            {/* Video */}
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-400">
                Click play to watch the full story
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}