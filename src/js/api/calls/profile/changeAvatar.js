import { loadStorage } from "../../../functions/storage/localStorage.js";
import { API_BASE, API_PROFILES, API_KEY } from "../../constants.js";
import { showMsg } from "../../../functions/showUserMsg.js";

export async function changeAvatar(avatarData) {
  const getUser = loadStorage("profile");
  const token = loadStorage("token");

  const changeAvatarAPI = `${API_BASE}${API_PROFILES}${getUser.userName}`;

  try {
    const postAvatar = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(avatarData),
    };
    const response = await fetch(changeAvatarAPI, postAvatar);
    const result = await response.json();

    if (response.ok) {
      location.reload();
    }

    if (response.status === 500) {
      showMsg("There is a problem on our end. Please try again later.");
    }

    if (response.status === 400) {
      showMsg(
        "An error has occurred. Please make sure image url is working and publicly accessible."
      );
    }
  } catch (error) {
    console.error(error);
  }
}
