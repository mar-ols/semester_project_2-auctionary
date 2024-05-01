export function displayChangeAvatar() {
  const editProfilePic = document.querySelector("#editProfilePic");

  const hiddenDiv = document.querySelector(".visually-hidden");
  editProfilePic.addEventListener("click", () => {
    hiddenDiv.classList.toggle("visually-hidden");
  });
}
