import { API_BASE, API_LISTINGS, API_KEY } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { id } from "../../constants.js";

export async function updateListing(updatedListing) {
  const token = loadStorage("token");
  if (!id) {
    throw new Error("Update requires a listing ID.");
  }
  const updateListingAPI = `${API_BASE}${API_LISTINGS}/${id}`;
  try {
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(updatedListing),
    };
    const response = await fetch(updateListingAPI, postData);
    const result = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
