"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type ICar from "@/models/ICar";
import { createCar } from "@/services/cars.api";

export async function createCarAction(formData: FormData) {
  const payload: ICar = {
    brand: String(formData.get("brand") ?? "").trim(),
    price: Number(formData.get("price")),
    year: Number(formData.get("year")),
  };

  await createCar(payload);
  // revalidatePath("/cars");
  redirect("/cars");
}
