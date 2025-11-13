import ICar from "@/models/ICar";

const BASE_URL =
  process.env.CARS_API_BASE ?? process.env.NEXT_PUBLIC_CARS_API_BASE;

const getJSON = <T>(url: string, init?: RequestInit): Promise<T> =>
  fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init?.headers || {}),
    },
  }).then((res) => res.json());

export const getCars = () => getJSON<ICar[]>(`${BASE_URL}/cars`);

export const createCar = (car: ICar) =>
  getJSON<ICar>(`${BASE_URL}/cars`, {
    method: "POST",
    body: JSON.stringify(car),
  });
