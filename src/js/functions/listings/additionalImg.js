export function additionalImg() {
  const addImageButton = document.querySelector("#addImageBtn");
  const additionalImagesContainer = document.querySelector("#additionalImages");

  if (addImageButton) {
    let imageCounter = 0;

    addImageButton.addEventListener("click", () => {
      if (imageCounter < 4) {
        imageCounter++;

        // Container for additional image and alt inputs
        const additionalImages = document.createElement("div");
        additionalImages.classList.add("additional-image-input", "mb-2");

        // Additional image label and input
        const additionalImgLabel = document.createElement("label");
        additionalImgLabel.setAttribute(
          "for",
          `additionalImgURL${imageCounter}`
        );
        additionalImgLabel.innerText = "Extra image URL:";

        const additionalImgInput = document.createElement("input");
        additionalImgInput.setAttribute("type", "text");
        additionalImgInput.setAttribute(
          "id",
          `additionalImgURL${imageCounter}`
        );
        additionalImgInput.setAttribute(
          "name",
          `additionalImgURL${imageCounter}`
        );
        additionalImgInput.classList.add(
          "mb-2",
          "form-control",
          "image-url-input"
        );

        // Additional image alt label and input
        const additionalImgAltLabel = document.createElement("label");
        additionalImgAltLabel.setAttribute(
          "for",
          `additionalImgAlt${imageCounter}`
        );
        additionalImgAltLabel.innerText = "Extra image alt:";

        const additionalImgAltInput = document.createElement("input");
        additionalImgAltInput.setAttribute("type", "text");
        additionalImgAltInput.setAttribute("max-length", "120");
        additionalImgAltInput.setAttribute(
          "id",
          `additionalImgAlt${imageCounter}`
        );
        additionalImgAltInput.setAttribute(
          "name",
          `additionalImgAlt${imageCounter}`
        );
        additionalImgAltInput.classList.add(
          "mb-2",
          "form-control",
          "image-alt-input"
        );

        additionalImages.append(
          additionalImgLabel,
          additionalImgInput,
          additionalImgAltLabel,
          additionalImgAltInput
        );

        additionalImagesContainer.appendChild(additionalImages);
      } else {
        addImageButton.style.display = "none";
      }
    });
  }
}
