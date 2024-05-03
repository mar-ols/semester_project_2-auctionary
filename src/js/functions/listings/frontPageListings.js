import { getListings } from "../../api/calls/listings/read.js";
import { listingCard } from "../display-templates/listingCard.js";
import { listingsIndex } from "../../api/constants.js";
import { errorMsg } from "../error.js";
import { loader } from "../loader.js";

export async function frontPageListings() {
  loader();
  try {
    const listings = await getListings(listingsIndex);

    const uniqueListing = new Set();
    const maxListings = 6;
    let listingsDisplayed = 0;

    listings.data.forEach((listing) => {
      if (
        listingsDisplayed < maxListings &&
        listing.description &&
        listing.media[0]
      ) {
        const listingContent = `${listing.title}${listing.media[0].url}`;
        if (!uniqueListing.has(listingContent)) {
          uniqueListing.add(listingContent);
          const getLoader = document.querySelector(".loader");
          if (getLoader) {
            getLoader.classList.remove("loader");
          }
          const ongoingContainer = document.querySelector(".ongoing");
          ongoingContainer.append(listingCard(listing));

          listingsDisplayed++;
        }
      }
    });
  } catch {
    errorMsg();
  }
}
