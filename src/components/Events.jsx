import { motion } from "framer-motion";

const events = [
  {
    title: "Neon Rebellion Launch Party",
    date: "Oct 28, 2025",
    location: "Global (Online)",
  },
  {
    title: "FNCS Invitational - Regional Qualifiers",
    date: "Nov 12, 2025",
    location: "Dubai Arena",
  },
  {
    title: "Creators Showdown",
    date: "Dec 03, 2025",
    location: "Los Angeles",
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Events</h2>
          <a href="#" className="text-sm text-orange-300 hover:text-orange-200">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{e.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{e.date} • {e.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
