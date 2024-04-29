import { API_BASE, API_LOGIN } from "../../constants.js";
import { saveStorage } from "../../../functions/storage/localStorage.js";
import { showMsg } from "../../../functions/showUserMsg.js";

export async function login(user) {
  const loginURL = API_BASE + API_LOGIN;
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(loginURL, postData);
    const result = await response.json();

    if (response.ok) {
      const userActions = document.querySelector("#userAction");
      const signedIn = document.querySelector("#signedInUser");
      const userName = document.querySelector("#userName");
      userActions.remove();
      signedIn.classList.remove("d-none");
      userName.innerText = result.data.name;

      saveStorage("token", result.data.accessToken);
      saveStorage("profile", {
        userName: result.data.name,
        userEmail: result.data.email,
        userAvatar: result.data.avatar,
      });
      location.reload();
    } else {
      const status = result.statusCode;
      if (status === 401) {
        showMsg(`Invalid email or password`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
