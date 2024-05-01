import { loadStorage } from "../../../functions/storage/localStorage.js";
import { API_BASE, API_LISTINGS, API_KEY } from "../../constants.js";

export async function removeListing(id) {
  const token = loadStorage("token");
  try {
    if (!id) {
      throw new Error("Delete requires a listing ID.");
    }
    const removeListingAPI = `${API_BASE}${API_LISTINGS}/${id}`;
    const response = await fetch(removeListingAPI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    if (response.status === 204) {
      window.location.href = "../";
    }
  } catch (error) {
    console.error(error);
  }
}
