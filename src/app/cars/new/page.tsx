import { createCarAction } from "@/server-actions/actions";
import Form from "next/form";
import { FC } from "react";

type Props = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

const NewCarPage: FC<Props> = async ({ searchParams }) => {
  const sp = await searchParams;
  const getFromSp = (k: string) => {
    const value = sp[k];
    return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
  };

  const errBrand = getFromSp("err_brand");
  const errPrice = getFromSp("err_price");
  const errYear = getFromSp("err_year");

  const valBrand = getFromSp("val_brand");
  const valPrice = getFromSp("val_price");
  const valYear = getFromSp("val_year");

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
    "rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-6 shadow-xl";
  const btnBase =
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 " +
    "font-semibold text-white shadow-lg shadow-emerald-600/25 transition " +
    "focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed " +
    "bg-emerald-600 hover:bg-emerald-500";

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-4xl sm-:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Car
          </span>
        </h1>
        <p className="mt-3 text-slate-300">
          Fill the fields below to add a new car.
        </p>

        <div className={`mt-8 text-left ${cardCls}`}>
          <Form action={createCarAction} className="space-y-5" noValidate>
            {/* BRAND */}
            <div>
              <label htmlFor="brand" className={labelCls}>
                Brand
              </label>
              <input
                id="brand"
                name="brand"
                type="text"
                placeholder="e.g., Toyota"
                defaultValue={valBrand}
                className={`${baseInput} ${errBrand ? errorInput : ""}`}
                aria-invalid={!!errBrand}
                aria-describedby="brand-error"
                pattern="^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$"
              />
              {errBrand && (
                <p id="brand-error" className={helpErrCls}>
                  {errBrand}
                </p>
              )}
            </div>

            {/* PRICE */}
            <div>
              <label htmlFor="price" className={labelCls}>
                Price, $
              </label>
              <div className="relative">
                <input
                  id="price"
                  name="price"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g., 15000"
                  defaultValue={valPrice}
                  className={`${baseInput} pr-10 ${errPrice ? errorInput : ""}`}
                  aria-invalid={!!errPrice}
                  aria-describedby="price-error"
                  min={0}
                  max={1000000}
                  step="any"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                  $
                </span>
              </div>
              {errPrice && (
                <p id="price-error" className={helpErrCls}>
                  {errPrice}
                </p>
              )}
            </div>

            {/* YEAR */}
            <div>
              <label htmlFor="year" className={labelCls}>
                Year
              </label>
              <input
                id="year"
                name="year"
                type="number"
                placeholder="e.g., 2018"
                defaultValue={valYear}
                className={`${baseInput} ${errYear ? errorInput : ""}`}
                aria-invalid={!!errYear}
                aria-describedby="year-error"
                min={1990}
                max={2025}
              />
              {errYear && (
                <p id="year-error" className={helpErrCls}>
                  {errYear}
                </p>
              )}
            </div>

            <button type="submit" className={btnBase}>
              Create Car
            </button>
          </Form>
        </div>

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
