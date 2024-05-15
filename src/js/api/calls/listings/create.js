import { loadStorage } from "../../../functions/storage/localStorage.js";
import { API_BASE, API_LISTINGS, API_KEY } from "../../constants.js";
import { showMsg } from "../../../functions/showUserMsg.js";

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
      window.location.href = `../single-listing/index.html?id=${result.data.id}&title=${result.data.title}`;
    }

    if (response.status === 500) {
      showMsg("There is a problem on our end. Please try again later.");
    }

    if (response.status === 400) {
      showMsg(`${result.errors[0].message}`);
    }
  } catch (error) {
    console.error(error);
  }
}
