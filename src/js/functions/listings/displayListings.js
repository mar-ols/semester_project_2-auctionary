import { getListings } from "../../api/calls/listings/read.js";
import { listingsIndex } from "../../api/constants.js";
import { listingCard } from "../display-templates/listingCard.js";
import { loadStorage } from "../storage/localStorage.js";
import { errorMsg } from "../error.js";
import { loader } from "../loader.js";

const viewMore = document.querySelector(".viewMore");
let listingCount = 10;

export async function displayListings() {
  loader();
  try {
    const fetchListings = await getListings(listingsIndex);
    const profile = loadStorage("profile");
    const createNewListing = document.querySelector(".newListingH2");

    if (profile) {
      createNewListing.classList.remove("d-none");
    }

    const listingContainer = document.querySelector(".listings");
    listingContainer.innerText = "";

    fetchListings.data.slice(0, listingCount).forEach((listing) => {
      if (listing.media[0]) {
        const getLoader = document.querySelector(".loader");
        if (getLoader) {
          getLoader.classList.remove("loader");
        }
        listingContainer.append(listingCard(listing));
      }
    });

    if (listingCount === 60) {
      viewMore.style.display = "none";
    }
  } catch {
    errorMsg();
  }
}
if (viewMore) {
  viewMore.addEventListener("click", () => {
    listingCount += 10;
    displayListings();
  });
}
