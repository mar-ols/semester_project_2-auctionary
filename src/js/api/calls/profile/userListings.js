import {
  API_BASE,
  API_PROFILES,
  API_KEY,
  API_SELLER,
  API_QUERY_BIDS,
} from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

export async function getUserListings() {
  const token = loadStorage("token");
  const profile = loadStorage("profile");
  const userListingsAPI = `${API_BASE}${API_PROFILES}${profile.userName}/listings?${API_QUERY_BIDS}&${API_SELLER}`;
  try {
    const response = await fetch(userListingsAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });
    const result = await response.json();

    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
