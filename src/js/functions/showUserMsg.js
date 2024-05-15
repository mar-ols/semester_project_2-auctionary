import { removeListing } from "../api/calls/listings/delete.js";

export function showMsg(text, id) {
  const dialog = document.querySelector("dialog");
  const dialogText = document.querySelector(".dialogText");
  const closeBtn = document.querySelector(".closeDialogBtn");
  const deleteBtn = document.querySelector("#deleteListing");

  if (deleteBtn) {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("d-flex", "justify-content-around");

    const yesBtn = document.createElement("button");
    yesBtn.classList.add(
      "yesBtn",
      "btn",
      "btn-danger",
      "border",
      "border-secondary"
    );
    yesBtn.innerText = "Yes, delete";

    const noBtn = document.createElement("button");
    noBtn.classList.add(
      "noBtn",
      "btn",
      "btn-info",
      "border",
      "border-secondary"
    );
    noBtn.innerText = "No, thanks";

    const getYesBtn = document.querySelector(".yesBtn");

    if (!getYesBtn) {
      btnContainer.append(yesBtn, noBtn);
    }

    yesBtn.addEventListener("click", () => {
      removeListing(id);
    });

    noBtn.addEventListener("click", () => {
      dialog.close();
    });

    dialog.append(btnContainer);
  }

  dialogText.innerText = `${text}`;

  dialog.showModal();

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  window.onclick = function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  };
}
