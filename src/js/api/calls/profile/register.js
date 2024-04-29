import { API_BASE, API_REGISTER } from "../../constants.js";
import { login } from "./login.js";
import { showMsg } from "../../../functions/showUserMsg.js";

export async function register(user) {
  const registerURL = API_BASE + API_REGISTER;
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(registerURL, postData);
    const result = await response.json();
    const status = result.statusCode;

    if (response.ok) {
      login(user);
    } else if (status === 400) {
      showMsg(`Looks like this user already exists.`);
    }
  } catch (error) {
    console.error(error);
  }
}
