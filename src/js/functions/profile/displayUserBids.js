import { listingCard } from "../display-templates/listingCard.js";
import { errorMsg } from "../error.js";
import { getUserBids } from "../../api/calls/profile/userBids.js";

export async function displayUserBids() {
  try {
    const listings = await getUserBids();
    const uniqueListing = new Set();

    const userBids = document.querySelector(".userBids");

    listings.data.forEach((listing) => {
      const listingData = listing.listing;

      const listingContent = `${listingData.title}`;
      if (!uniqueListing.has(listingContent)) {
        uniqueListing.add(listingContent);

        userBids.append(listingCard(listing));
        const listingCardClass = document.querySelector(".listingCard");
        listingCardClass.classList.add(
          "col-10",
          "col-sm-9",
          "col-md-8",
          "col-lg-6"
        );
        listingCardClass.classList.remove("listingCard");
      }
    });
  } catch {
    errorMsg();
  }
}
