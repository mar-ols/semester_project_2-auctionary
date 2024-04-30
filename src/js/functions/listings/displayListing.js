import { getListing } from "../../api/calls/listings/read.js";
import { id } from "../../api/constants.js";
import { countDown } from "../counter.js";
import { loadStorage } from "../storage/localStorage.js";
import { removeListing } from "../../api/calls/listings/delete.js";
import { showMsg } from "../showUserMsg.js";

export async function displayListing() {
  const listing = await getListing(id);

  const loggedIn = loadStorage("profile");

  if (listing) {
    const getLoader = document.querySelector(".loader");
    if (getLoader) {
      getLoader.classList.remove("loader");
    }
    const listingH1 = document.querySelector(".listingH1");
    listingH1.innerText = listing.data.title;

    const listingImg = document.querySelector(".listingImage");
    listingImg.src = listing.data.media[0].url;
    listingImg.setAttribute("alt", `${listing.data.media[0].alt}`);

    const listingSeller = document.querySelector(".listingSeller");
    listingSeller.innerText = `Seller: ${listing.data.seller.name}`;

    const counter = document.querySelector(".countDown");
    countDown(`${listing.data.endsAt}`, counter);

    const currentBid = listing.data.bids[listing.data.bids.length - 1];
    let amount = 0;
    if (currentBid !== undefined) {
      amount = currentBid.amount;
    }

    const currentBidContainer = document.querySelector(".currentBid");
    currentBidContainer.innerText = `Current bid: ${amount}`;

    const viewAllBids = document.querySelector(".viewAllBids");
    const allBidsContainer = document.querySelector(".allBidsContainer");

    const bidBtn = document.querySelector(".bidBtn");

    if (!loggedIn) {
      viewAllBids.remove();
      bidBtn.disabled = true;
    }

    if (loggedIn) {
      if (loggedIn.userName === listing.data.seller.name) {
        bidBtn.disabled = true;
      }
    }

    listing.data.bids.forEach((bid) => {
      const bidderContainer = document.createElement("p");
      bidderContainer.classList.add(
        "ps-2",
        "pt-2",
        "border-top",
        "border-secondary",
        "fw-bold"
      );

      bidderContainer.innerText = `${bid.bidder.name}: ${bid.amount}`;

      allBidsContainer.append(bidderContainer);
    });

    const visuallyHidden = document.querySelector(".visually-hidden");
    viewAllBids.addEventListener("click", () => {
      visuallyHidden.classList.toggle("visually-hidden");
    });

    const listingDescription = document.querySelector(".listingDescription");
    listingDescription.innerText = listing.data.description;

    const updateDeleteContainer = document.createElement("div");
    updateDeleteContainer.classList.add("d-flex", "justify-content-between");

    const updateListingBtn = document.createElement("button");
    updateListingBtn.classList.add(
      "btn",
      "btn-info",
      "border",
      "border-secondary"
    );
    updateListingBtn.innerText = "Update listing";

    const deleteListingBtn = document.createElement("button");
    deleteListingBtn.setAttribute("id", "deleteListing");
    deleteListingBtn.classList.add(
      "btn",
      "btn-danger",
      "border",
      "border-secondary"
    );
    deleteListingBtn.innerText = "Delete listing";

    updateDeleteContainer.append(updateListingBtn, deleteListingBtn);

    if (loggedIn) {
      if (loggedIn.userName === listing.data.seller.name) {
        const profileContainer = document.querySelector(".profileContainer");
        profileContainer.append(updateDeleteContainer);
      }
    }

    deleteListingBtn.addEventListener("click", () => {
      showMsg("Are you sure you want to delete?", id);
      // removeListing(id);
      // window.history.back();
    });
  }
}

const backBtn = document.querySelector(".goBack");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}
