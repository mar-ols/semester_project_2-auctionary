import { createListing } from "../../../api/calls/listings/create.js";

export function getNewListingData() {
  try {
    const getCreateForm = document.querySelector("#createListing");

    if (getCreateForm) {
      getCreateForm.addEventListener("submit", (event) => {
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

        const newListing = {
          title: title,
          description: description,
          media: media,
          endsAt: date,
        };

        createListing(newListing);

        form.title.value = "";
        form.description.value = "";
        form.endDate.value = "";
        form.listingImgURL.value = "";
        form.listingImgAlt.value = "";
      });
    }
  } catch (error) {
    console.error(error);
  }
}
