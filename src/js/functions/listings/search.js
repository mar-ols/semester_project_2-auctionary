import { API_BASE, API_LISTINGS, API_SEARCH } from "../../api/constants.js";
import { getListings } from "../../api/calls/listings/read.js";
import { listingCard } from "../display-templates/listingCard.js";

export async function search(value) {
  const searchListingsURL = `${API_BASE}${API_LISTINGS}${API_SEARCH}${value}`;
  const searchResults = await getListings(searchListingsURL);

  const listingContainer = document.querySelector(".listings");
  listingContainer.innerText = "";

  searchResults.data.forEach((listing) => {
    if (listing.description) {
      if (listing.media[0]) {
        listingContainer.append(listingCard(listing));
      }
    }
  });
}
