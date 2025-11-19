import { motion } from "framer-motion";

const media = [
  {
    title: "Season 9 Trailer",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Behind the Scenes",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Media() {
  return (
    <section id="media" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Media</h2>
          <a href="#" className="text-sm text-orange-300 hover:text-orange-200">View all</a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {media.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/60"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={m.url}
                  title={m.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{m.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
