import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.25),transparent_60%)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Drop In. Gear Up. Dominate.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300 max-w-xl"
            >
              Welcome to FireStrikeX Officials — your portal to the ultimate battle royale experience. Squad up, climb the ranks, and unlock exclusive rewards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#download"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-orange-500/30 transition"
              >
                Play Free
              </a>
              <a
                href="#trailer"
                className="px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5"
              >
                Watch Trailer
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[url('https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-orange-500/40 to-pink-500/40 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
