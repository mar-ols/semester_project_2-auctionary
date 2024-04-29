import {
  API_BASE,
  API_LISTINGS,
  API_QUERY_BIDS,
  API_SEARCH,
  API_SELLER,
  API_SORT,
} from "../../api/constants.js";
import { getListings } from "../../api/calls/listings/read.js";
import { listingCard } from "../display-templates/listingCard.js";

export async function search(value) {
  const searchListingsURL = `${API_BASE}${API_LISTINGS}?${API_SEARCH}title&${API_SELLER}&${API_QUERY_BIDS}&${API_SORT}`;
  const searchResults = await getListings(searchListingsURL);

  const listingContainer = document.querySelector(".listings");
  const feedback = document.querySelector(".feedback");
  listingContainer.innerText = "";

  searchResults.data.forEach((listing) => {
    if (listing.title.includes(value) || listing.description.includes(value)) {
      if (listing.description && listing.media[0]) {
        listingContainer.append(listingCard(listing));
      }
    }
  });
}
