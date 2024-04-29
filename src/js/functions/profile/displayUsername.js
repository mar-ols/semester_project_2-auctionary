import { loadStorage } from "../storage/localStorage.js";

export function displayUsername() {
  const userAction = document.querySelector("#userAction");
  const signedIn = document.querySelector("#signedInUser");
  const userName = document.querySelector("#userName");

  const getToken = loadStorage("token");
  const getUser = loadStorage("profile");

  if (getUser) {
    userAction.remove();
  }

  if (getToken) {
    signedIn.classList.remove("d-none");
    userName.innerText = getUser.userName;
  }
}
