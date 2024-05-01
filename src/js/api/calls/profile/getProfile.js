import { API_BASE, API_PROFILES, API_KEY } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { loader } from "../../../functions/loader.js";

export async function getProfile() {
  loader();
  const token = loadStorage("token");
  const profile = loadStorage("profile");
  if (profile) {
    const getProfileAPI = `${API_BASE}${API_PROFILES}${profile.userName}`;

    try {
      const response = await fetch(getProfileAPI, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": API_KEY,
        },
      });
      const user = await response.json();
      if (response.ok) {
        const getLoader = document.querySelector(".loader");
        if (getLoader) {
          getLoader.classList.remove("loader");
        }
        console.log(user);
        return user;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
