import { getUserListings } from "../../api/calls/profile/userListings.js";
import { listingCard } from "../display-templates/listingCard.js";
import { errorMsg } from "../error.js";

export async function displayUserListings() {
  try {
    const listings = await getUserListings();

    const userListings = document.querySelector(".userListings");

    listings.data.forEach((listing) => {
      userListings.append(listingCard(listing));
    });
  } catch {
    errorMsg();
  }
}
