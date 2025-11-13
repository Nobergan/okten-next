"use server";
import { redirect } from "next/navigation";
import { createCar } from "@/services/cars.api";
import ICar from "@/models/ICar";
// import { revalidatePath } from "next/cache";

export async function createCarAction(data: ICar) {
  await createCar(data);
  // revalidatePath('/cars');
  redirect("/cars");
}
