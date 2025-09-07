import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/",
});

export async function fetchData<T>(url: string) {
  try {
    const response = await instance.get<T>(url);
    return response.data;
  } catch (error: unknown) {
    if (error && typeof error === "object" && "message" in error) {
      throw new Error(
        (error as { message?: string }).message || "Failed to fetch"
      );
    }
    throw new Error("Failed to fetch");
  }
}
