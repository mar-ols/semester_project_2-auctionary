import { loadStorage } from "../../../functions/storage/localStorage.js";
import {
  API_KEY,
  API_BASE,
  API_LISTINGS,
  id,
  API_BIDS,
} from "../../constants.js";
import { showMsg } from "../../../functions/showUserMsg.js";

export async function sendBid(bidObject) {
  const token = loadStorage("token");
  if (!id) {
    throw new Error("Update requires a post ID.");
  }

  const bidURL = `${API_BASE}${API_LISTINGS}/${id}${API_BIDS}`;
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(bidObject),
    };
    const response = await fetch(bidURL, postData);
    const result = await response.json();

    if (response.ok) {
      const successBid = document.querySelector(".successBid");
      successBid.classList.remove("d-none");
      setTimeout(function () {
        location.reload();
      }, 1000);
      return result;
    }
    if (result.statusCode === 400) {
      showMsg("Bid must be higher than current bid");
    }
  } catch (error) {
    console.error(error);
  }
}
