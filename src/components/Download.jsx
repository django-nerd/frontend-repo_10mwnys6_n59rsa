export default function Download() {
  return (
    <section id="download" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {["Windows", "Android", "iOS"].map((p) => (
            <div key={p} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold text-lg">{p}</h3>
              <p className="text-slate-300 text-sm mt-2">Optimized build with the latest performance updates.</p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
