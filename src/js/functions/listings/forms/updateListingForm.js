import { getListing } from "../../../api/calls/listings/read.js";
import { id } from "../../../api/constants.js";
import { updateListing } from "../../../api/calls/listings/update.js";

export async function getUpdatedListingData() {
  try {
    const getUpdateListing = await getListing(id);

    const getUpdateForm = document.querySelector("#updateListing");
    const additionalImagesContainer =
      document.querySelector("#additionalImages");

    const setTitle = (document.querySelector(
      "#listingTitle"
    ).value = `${getUpdateListing.data.title}`);

    // Converting date to fit format of date input
    const date = new Date(getUpdateListing.data.endsAt);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;

    let convertedDate = `${year}-${month}-${day}`;

    const setEndDate = (document.querySelector(
      "#endDate"
    ).value = `${convertedDate}`);

    const setMainImg = (document.querySelector(
      "#listingImgURL"
    ).value = `${getUpdateListing.data.media[0].url}`);

    const setMainImgAlt = (document.querySelector(
      "#listingImgAlt"
    ).value = `${getUpdateListing.data.media[0].alt}`);

    const setDescription = (document.querySelector(
      "#listingBody"
    ).value = `${getUpdateListing.data.description}`);

    let imageCounter = 0;

    if (getUpdateListing.data.media.length > 1) {
      for (let i = 1; i < getUpdateListing.data.media.length; i++) {
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
        additionalImgInput.value = `${getUpdateListing.data.media[i].url}`;

        // Additional image alt label and input
        const additionalImgAltLabel = document.createElement("label");
        additionalImgAltLabel.setAttribute(
          "for",
          `additionalImgAlt${imageCounter}`
        );
        additionalImgAltLabel.innerText = "Extra image alt:";

        const additionalImgAltInput = document.createElement("input");
        additionalImgAltInput.setAttribute("type", "text");
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
        additionalImgAltInput.value = `${getUpdateListing.data.media[i].alt}`;

        additionalImages.append(
          additionalImgLabel,
          additionalImgInput,
          additionalImgAltLabel,
          additionalImgAltInput
        );
        additionalImagesContainer.appendChild(additionalImages);
      }
    }

    if (getUpdateForm) {
      getUpdateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const date = form.endDate.value;

        const media = [];

        const mainImageUrl = form.listingImgURL.value;
        const mainImageAlt = form.listingImgAlt.value;
        media.push({ url: mainImageUrl, alt: mainImageAlt });

        const additionalImagesInputs = document.querySelectorAll(
          ".additional-image-input"
        );

        additionalImagesInputs.forEach((input) => {
          const url = input.querySelector(".image-url-input").value;
          const alt = input.querySelector(".image-alt-input").value;

          if (url.length !== 0) {
            media.push({ url, alt });
          }
        });

        const updatedListing = {
          title: title,
          description: description,
          media: media,
          endsAt: date,
        };

        updateListing(updatedListing);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
