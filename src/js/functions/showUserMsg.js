export function showMsg(text) {
  const dialog = document.querySelector("dialog");
  const dialogText = document.querySelector(".dialogText");
  const closeBtn = document.querySelector(".closeDialogBtn");
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
