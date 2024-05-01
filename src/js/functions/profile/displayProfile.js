import { getProfile } from "../../api/calls/profile/getProfile.js";
import { loadStorage } from "../storage/localStorage.js";

export async function displayProfile() {
  try {
    const profile = await getProfile();
    const loggedIn = loadStorage("profile");
    const unRegUser = document.querySelector("#unRegUser");
    const loggedInUser = document.querySelector("#userProfile");

    if (!loggedIn) {
      const emptyProfile = document.querySelector(".emptyProfile");
      emptyProfile.innerText = "Please log in or sign up";
      const getLoader = document.querySelector(".loader");
      if (getLoader) {
        getLoader.classList.remove("loader");
      }
    }

    if (loggedIn) {
      unRegUser.remove();
      loggedInUser.classList.remove("d-none");
      const userName = document.querySelector(".userName");
      userName.innerText = `${profile.data.name}`;

      const credit = document.querySelector(".credit");
      credit.innerText = `Credit: ${profile.data.credits}`;

      const userAvatar = document.querySelector(".profileAvatar");
      userAvatar.src = `${profile.data.avatar.url}`;
      userAvatar.setAttribute("alt", `${profile.data.avatar.alt}`);
    }
  } catch (error) {
    // errorMsg();
    console.error(error);
  }
}
