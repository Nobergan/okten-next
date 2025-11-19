export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Cars Demo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            (OWU CarsAPI)
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-300">
          Minimal example: a list of cars and creating a new one.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/cars"
            className="rounded-2xl px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-600/25 transition"
          >
            View Cars
          </a>
          <a
            href="/cars/new"
            className="rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur font-medium transition"
          >
            Add Car
          </a>
        </div>
      </div>
    </section>
  );
}
