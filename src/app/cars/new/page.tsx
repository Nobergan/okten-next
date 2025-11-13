"use client";
import { createCarAction } from "./actions";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import ICar from "@/models/ICar";
import { carValidators } from "@/utils/car-validators";

const NewCarPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ICar>({ mode: "all", resolver: joiResolver(carValidators) });

  const baseInput =
    "block w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 " +
    "text-white placeholder:text-slate-400 outline-none transition " +
    "focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-400 " +
    "hover:border-emerald-400 hover:bg-white/15";
  const errorInput =
    "border-red-400 focus:border-red-400 focus:ring-red-500/30";

  const labelCls = "mb-1.5 block text-sm font-medium text-slate-200";
  const helpErrCls = "mt-1 text-sm text-red-300";

  const cardCls =
    "rounded-2xl border border-white/10 bg-white/10 backdrop-blur " +
    "p-6 shadow-xl";

  const btnBase =
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl " +
    "px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/25 " +
    "transition focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed " +
    "bg-emerald-600 hover:bg-emerald-500";

  const onSubmit = async (data: ICar) => {
    await createCarAction(data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Car
          </span>
        </h1>
        <p className="mt-3 text-slate-300">
          Fill the fields below to add a new car.
        </p>

        <div className={`mt-8 text-left ${cardCls}`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="brand" className={labelCls}>
                Brand
              </label>
              <input
                id="brand"
                type="text"
                placeholder="e.g., Toyota"
                {...register("brand")}
                className={`${baseInput} ${errors.brand ? errorInput : ""}`}
                aria-invalid={!!errors.brand}
                aria-describedby="brand-error"
              />
              {errors.brand && (
                <p id="brand-error" className={helpErrCls}>
                  {String(errors.brand.message)}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="price" className={labelCls}>
                Price, $
              </label>
              <div className="relative">
                <input
                  id="price"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g., 15000"
                  {...register("price", { valueAsNumber: true })}
                  className={`${baseInput} pr-10 ${errors.price ? errorInput : ""}`}
                  aria-invalid={!!errors.price}
                  aria-describedby="price-error"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                  $
                </span>
              </div>
              {errors.price && (
                <p id="price-error" className={helpErrCls}>
                  {String(errors.price.message)}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="year" className={labelCls}>
                Year
              </label>
              <input
                id="year"
                type="number"
                placeholder="e.g., 2018"
                {...register("year", { valueAsNumber: true })}
                className={`${baseInput} ${errors.year ? errorInput : ""}`}
                aria-invalid={!!errors.year}
                aria-describedby="year-error"
              />
              {errors.year && (
                <p id="year-error" className={helpErrCls}>
                  {String(errors.year.message)}
                </p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting} className={btnBase}>
              {isSubmitting && (
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    opacity="0.2"
                  />
                  <path
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              )}
              {isSubmitting ? "Saving…" : "Create Car"}
            </button>

            {isSubmitSuccessful && (
              <p className="text-center text-sm text-emerald-400">
                Car successfully added!
              </p>
            )}
          </form>
        </div>

        {/* Кнопки навігації */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/"
            className="inline-block rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition"
          >
            ← Home
          </a>
          <a
            href="/cars"
            className="inline-block rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition"
          >
            ← Back to list
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewCarPage;
