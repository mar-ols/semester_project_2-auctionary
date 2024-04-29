import { getListings } from "../../api/calls/listings/read.js";
import { listingsIndex } from "../../api/constants.js";
import { listingCard } from "../display-templates/listingCard.js";
import { errorMsg } from "../error.js";

const viewMore = document.querySelector(".viewMore");
let listingCount = 10;

export async function displayListings() {
  try {
    const fetchListings = await getListings(listingsIndex);

    const listingContainer = document.querySelector(".listings");
    listingContainer.innerText = "";

    fetchListings.data.slice(0, listingCount).forEach((listing) => {
      if (listing.media[0]) {
        listingContainer.append(listingCard(listing));
      }
    });

    if (listingCount === 30) {
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
