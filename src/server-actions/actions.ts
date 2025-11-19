"use server";

import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";
import { carValidators } from "@/utils/car-validators";
import type ICar from "@/models/ICar";
import { createCar } from "@/services/cars.api";

export async function createCarAction(formData: FormData) {
  const raw = {
    brand: String(formData.get("brand") ?? ""),
    price: formData.get("price"),
    year: formData.get("year"),
  };

  const { error, value } = carValidators.validate(
    { brand: raw.brand, price: raw.price, year: raw.year },
    { abortEarly: false, convert: true },
  );

  if (error) {
    const params = new URLSearchParams();

    if (raw.brand) params.set("val_brand", raw.brand as string);
    if (typeof raw.price === "string" && raw.price !== "")
      params.set("val_price", raw.price);
    if (typeof raw.year === "string" && raw.year !== "")
      params.set("val_year", raw.year);

    for (const d of error.details) {
      const key = String(d.path[0] ?? "form");
      const errKey = `err_${key}`;

      if (!params.has(errKey)) params.set(errKey, d.message);
    }

    redirect(`/cars/new?${params.toString()}`);
  }

  await createCar(value as ICar);
  // revalidatePath("/cars");
  redirect("/cars");
}
