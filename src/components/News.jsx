import { motion } from "framer-motion";

const news = [
  {
    title: "Season 9: Neon Rebellion",
    excerpt: "New map POIs, legendary skins, and a reworked ranked system are live.",
    tag: "Update",
  },
  {
    title: "Global Championship Announced",
    excerpt: "Top squads will battle for glory and a $1M prize pool this November.",
    tag: "Esports",
  },
  {
    title: "Creators Program",
    excerpt: "Apply now to earn rewards for streaming and community events.",
    tag: "Community",
  },
];

export default function News() {
  return (
    <section id="news" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Latest News</h2>
          <a href="#" className="text-sm text-orange-300 hover:text-orange-200">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900/80 transition"
            >
              <div className="text-xs inline-flex px-2 py-1 rounded bg-white/10 text-white/80 mb-3">
                {n.tag}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-white/90">{n.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{n.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
