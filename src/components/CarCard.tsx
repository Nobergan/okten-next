import { FC } from "react";
import ICar from "@/models/ICar";

type CarProps = { car: ICar };

export const Car: FC<CarProps> = ({ car }) => {
  return (
    <article
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5
                 shadow-lg transition hover:-translate-y-1 hover:bg-white/10 hover:border-emerald-400/40"
    >
      <h3 className="text-xl font-semibold tracking-tight text-white">
        {car.brand}
      </h3>

      <div className="mt-3 space-y-2 text-sm">
        <div className="flex items-center justify-between text-slate-300">
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 10h18l-1 8H4l-1-8Z" />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
            Price
          </span>
          <span className="font-medium text-white">
            ${Number(car.price).toLocaleString("en-US")}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-300">
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h10" />
            </svg>
            Year
          </span>
          <span className="font-medium text-white">{car.year}</span>
        </div>
      </div>

      <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition group-hover:opacity-100" />
    </article>
  );
};
