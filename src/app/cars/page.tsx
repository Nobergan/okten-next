import Link from "next/link";
import { getCars } from "@/services/cars.api";
import { Car } from "@/components/CarCard";

const CarsPage = async () => {
  const cars = await getCars();

  return (
    <section className="min-h-screen px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="max-w-6xl mx-auto pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Cars
          </span>
        </h1>
        <p className="mt-3 text-slate-300">
          Browse the list or add a new car to the collection.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-block rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition"
          >
            ← Home
          </Link>
          <Link
            href="/cars/new"
            className="inline-block rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:bg-emerald-500 transition"
          >
            + Add Car
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pb-16">
        {cars.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center text-slate-200">
            <p className="text-lg">No cars yet.</p>
            <p className="mt-2 text-slate-400">Be the first to add one!</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-block rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition"
              >
                ← Home
              </Link>
              <Link
                href="/cars/new"
                className="inline-block rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:bg-emerald-500 transition"
              >
                Add Car
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Car key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarsPage;
