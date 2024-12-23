import { getListing } from "../../api/calls/listings/read.js";
import { id, title } from "../../api/constants.js";
import { countDown } from "../counter.js";
import { loadStorage } from "../storage/localStorage.js";
import { showMsg } from "../showUserMsg.js";

export async function displayListing() {
  const listing = await getListing(id);

  const titleContainer = document.querySelector("#title");
  const loggedIn = loadStorage("profile");

  if (listing) {
    const getLoader = document.querySelector(".loader");
    if (getLoader) {
      getLoader.classList.remove("loader");
    }

    titleContainer.innerText = `Auctionary - ${listing.data.title}`;

    // Listing H1
    const listingH1 = document.querySelector(".listingH1");
    listingH1.innerText = listing.data.title;

    // Media gallery

    // Main image
    const listingImg = document.querySelector(".listingImage");
    listingImg.src = listing.data.media[0].url;
    listingImg.setAttribute("alt", `${listing.data.media[0].alt}`);

    // Setting extra images
    const extraImages = document.querySelector(".extraImages");

    if (listing.data.media.length > 1) {
      for (let i = 1; i < listing.data.media.length; i++) {
        const imageURL = listing.data.media[i].url;
        const imageALT = listing.data.media[i].alt;

        const imageContainer = document.createElement("img");
        imageContainer.classList.add(
          "listingImg",
          "col-3",
          "image-modal-content",
          "border",
          "border-secondary"
        );
        imageContainer.setAttribute("alt", imageALT);
        imageContainer.src = imageURL;

        extraImages.append(imageContainer);
      }
    }

    // Modal for extra images
    const modalPopup = document.querySelector(".image-modal-popup");
    const listingThumbnails = document.querySelectorAll(".extraImages img");
    const imageElement = document.querySelector(".image-modal-popup img");

    listingThumbnails.forEach((image) => {
      image.addEventListener("click", (event) => {
        event.stopPropagation();
        modalPopup.style.display = "block";
        imageElement.src = image.src;
        imageElement.setAttribute("alt", image.alt);
      });
    });

    document.addEventListener("click", () => {
      modalPopup.style.display = "none";
    });

    // Seller
    const listingSeller = document.querySelector(".listingSeller");
    listingSeller.innerText = `Seller: ${listing.data.seller.name}`;

    // Countdown
    const counter = document.querySelector(".countDown");
    countDown(`${listing.data.endsAt}`, counter);

    // Current bid
    const currentBid = listing.data.bids[listing.data.bids.length - 1];
    let amount = 0;
    if (currentBid !== undefined) {
      amount = currentBid.amount;
    }

    const currentBidContainer = document.querySelector(".currentBid");
    currentBidContainer.innerText = `Current bid: ${amount}`;

    const getBidInput = document.querySelector("#bid");
    if (getBidInput) {
      const minValue = amount + 1;
      getBidInput.min = minValue.toString();
      getBidInput.value = minValue.toString();
    }

    // If auction is over
    const getBidForm = document.querySelector("#enterBid");

    const listingEndDate = new Date(listing.data.endsAt);
    const todaysDate = new Date();

    const convertedEndDate = listingEndDate.getTime();
    const convertedTodaysDate = todaysDate.getTime();

    if (convertedTodaysDate > convertedEndDate) {
      getBidForm.remove();
    }

    // View all bids
    const viewAllBids = document.querySelector(".viewAllBids");
    const allBidsContainer = document.querySelector(".allBidsContainer");

    const bidBtn = document.querySelector(".bidBtn");

    if (!loggedIn) {
      viewAllBids.remove();
      bidBtn.disabled = true;
    }

    if (loggedIn && bidBtn) {
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

    // Listing description
    const listingDescription = document.querySelector(".listingDescription");
    listingDescription.innerText = listing.data.description;

    // Update or delete if logged in
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
    });

    updateListingBtn.addEventListener("click", () => {
      window.location.href = `../update-listing/index.html?id=${listing.data.id}&title=${listing.data.title}`;
    });
  }
}

const backBtn = document.querySelector(".goBack");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}
