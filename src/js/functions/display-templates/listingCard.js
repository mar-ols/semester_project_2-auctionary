import { countDown } from "../counter.js";
import { loadStorage } from "../storage/localStorage.js";

export function listingCard(data) {
  const ongoing = document.querySelector(".ongoing");
  const userListings = document.querySelector(".userListings");

  const profile = loadStorage("profile");

  // Listing card
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "m-2",
    "border",
    "border-secondary",
    "rounded",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "listingCard",
    "mx-auto"
  );

  if (data.media) {
    // Listing image link
    const imageLink = document.createElement("a");
    if (ongoing) {
      imageLink.href = `./html/listings/single-listing/index.html?id=${data.id}&title=${data.title}`;
    } else {
      imageLink.href = `single-listing/index.html?id=${data.id}&title=${data.title}`;
    }

    if (profile && userListings) {
      imageLink.href = `../listings/single-listing/index.html?id=${data.id}&title=${data.title}`;
    }

    // Listing image
    const listingImage = document.createElement("img");
    listingImage.src = `${data.media[0].url}`;
    listingImage.setAttribute("alt", `${data.media[0].alt}`);
    if (data.media[0].alt.length === 0) {
      listingImage.setAttribute("alt", `No alt provided`);
    }
    listingImage.classList.add(
      "img-fluid",
      "col-12",
      "rounded-top",
      "listingImg",
      "border-bottom",
      "border-secondary"
    );
    imageLink.appendChild(listingImage);
    cardContainer.append(imageLink);
  }

  // Listing title link
  const titleLink = document.createElement("a");
  if (data.listing) {
    titleLink.href = `../listings/single-listing/index.html?id=${data.listing.id}&title=${data.listing.title}`;
  } else {
    if (ongoing) {
      titleLink.href = `./html/listings/single-listing/index.html?id=${data.id}&title=${data.title}`;
    } else {
      titleLink.href = `single-listing/index.html?id=${data.id}&title=${data.title}`;
    }
    if (profile && userListings) {
      titleLink.href = `../listings/single-listing/index.html?id=${data.id}&title=${data.title}`;
    }
  }

  titleLink.classList.add("text-secondary");

  // Listing title text
  const listingTitleContainer = document.createElement("h5");
  listingTitleContainer.classList.add("px-2", "pt-2");
  if (data.listing) {
    listingTitleContainer.innerText = `${data.listing.title}`;
  } else {
    listingTitleContainer.innerText = `${data.title}`;
  }
  titleLink.appendChild(listingTitleContainer);
  cardContainer.append(titleLink);

  if (data.listing) {
    const bidsContainer = document.createElement("p");
    bidsContainer.classList.add("px-2", "fw-bold");
    bidsContainer.innerText = `Your bid: ${data.amount}`;
    cardContainer.append(bidsContainer);
  }

  if (data.seller) {
    // Seller
    const listingSeller = document.createElement("p");
    listingSeller.classList.add("px-2");
    listingSeller.innerText = `Seller: ${data.seller.name}`;
    cardContainer.append(listingSeller);
  }

  if (data.bids) {
    // Current bid
    const currentBid = data.bids[data.bids.length - 1];
    let amount = 0;
    if (currentBid !== undefined) {
      amount = currentBid.amount;
    }
    const bidsContainer = document.createElement("p");
    bidsContainer.classList.add("px-2", "fw-bold");
    bidsContainer.innerText = `Current bid: ${amount}`;

    cardContainer.append(bidsContainer);
  }

  // Time left
  const counterContainer = document.createElement("p");
  counterContainer.classList.add("fw-bold", "px-2");
  if (data.listing) {
    countDown(`${data.listing.endsAt}`, counterContainer);
  } else {
    countDown(`${data.endsAt}`, counterContainer);
  }

  // Bid button link
  const bidLink = document.createElement("a");

  if (data.listing) {
    bidLink.href = `../listings/single-listing/index.html?id=${data.listing.id}&title=${data.listing.title}`;
  } else {
    if (ongoing) {
      bidLink.href = `./html/listings/single-listing/index.html?id=${data.id}&title=${data.title}`;
    } else {
      bidLink.href = `single-listing/index.html?id=${data.id}&title=${data.title}`;
    }
    if (profile && userListings) {
      bidLink.href = `../listings/single-listing/index.html?id=${data.id}&title=${data.title}`;
    }
  }

  // Bid button
  const bidBtn = document.createElement("button");
  bidBtn.classList.add("btn", "btn-info", "col-12");
  bidBtn.innerText = "Bid";
  bidLink.appendChild(bidBtn);

  if (data.seller && profile) {
    if (profile.userName === data.seller.name) {
      bidBtn.disabled = true;
    }
  }

  cardContainer.append(counterContainer, bidLink);

  return cardContainer;
}
