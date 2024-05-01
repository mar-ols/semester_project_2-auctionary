import { changeAvatar } from "../../../api/calls/profile/changeAvatar.js";
import * as storage from "../../storage/localStorage.js";
import { showMsg } from "../../showUserMsg.js";

export function getAvatarData() {
  try {
    const localStorageProfile = storage.loadStorage("profile");
    const changeAvatarForm = document.querySelector("#changeAvatarForm");

    if (changeAvatarForm) {
      changeAvatarForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const newAvatar = form.avatar.value;
        const alt = form.avatarAlt.value;

        const avatarData = {
          avatar: {
            url: newAvatar,
            alt: alt,
          },
        };
        changeAvatar(avatarData);

        storage.saveStorage("profile", {
          userName: localStorageProfile.userName,
          userEmail: localStorageProfile.userEmail,
          userAvatar: avatar,
        });

        form.avatar.value = "";
        form.avatarAlt.value = "";
        changeAvatarForm.remove();
      });
    }
  } catch (error) {
    showMsg(`An error has occured. Please try again later.`);
  }
}
