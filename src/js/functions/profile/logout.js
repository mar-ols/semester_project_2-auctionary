import { removeStorage } from "../storage/localStorage.js";
import {
  locationURL,
  listingPage,
  profilePage,
  singleListing,
} from "../../api/constants.js";

export function logout() {
  const getLogoutBtn = document.querySelector("#signedInUser");
  getLogoutBtn.addEventListener("click", () => {
    removeStorage("token");
    removeStorage("profile");
    location.reload();
    console.log(locationURL);

    if (profilePage || listingPage) {
      window.location.href = "../../";
    }

    if (singleListing) {
      window.location.href = "../../../../";
    }
  });
}
