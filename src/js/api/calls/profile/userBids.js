import {
  API_BASE,
  API_PROFILES,
  API_KEY,
  API_BIDS,
  API_BID_LISTING,
} from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

export async function getUserBids() {
  const token = loadStorage("token");
  const profile = loadStorage("profile");
  const userBidsAPI = `${API_BASE}${API_PROFILES}${profile.userName}${API_BIDS}?${API_BID_LISTING}`;
  try {
    const response = await fetch(userBidsAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });
    const user = await response.json();
    if (response.ok) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}
