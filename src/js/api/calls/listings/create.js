import { loadStorage } from "../../../functions/storage/localStorage.js";
import { API_BASE, API_LISTINGS, API_KEY } from "../../constants.js";

export async function createListing(newListing) {
  const createListingAPI = API_BASE + API_LISTINGS;
  const token = loadStorage("token");
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(newListing),
    };
    const response = await fetch(createListingAPI, postData);
    const result = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
