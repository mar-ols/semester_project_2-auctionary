export const API_KEY = "983d72fa-459e-47e8-8329-c182b05feb76";
export const API_BASE = "https://v2.api.noroff.dev";
export const API_REGISTER = "/auth/register";
export const API_LOGIN = "/auth/login";
export const API_LISTINGS = "/auction/listings";
export const API_BIDS = "/bids";
export const API_SEARCH = "/search?q=";
export const API_PROFILES = "/auction/profiles/";
export const API_SELLER = "_seller=true";
export const API_QUERY_BIDS = "_bids=true";
export const API_ACTIVE = "_active=true";
export const API_SORT = "sort=endsAt";
export const API_BID_LISTING = "_listings=true";
export const API_SORT_ORDER = "sortOrder=asc";

export const listingsIndex = `${API_BASE}${API_LISTINGS}?${API_SELLER}&${API_QUERY_BIDS}&${API_ACTIVE}&${API_SORT}&${API_SORT_ORDER}`;

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

export const id = params.get("id");

export const seller = params.get("seller");

export const title = params.get("title");

export const locationURL = window.location.href;
export const listingPage = locationURL.includes("listings");
export const profilePage = locationURL.includes("profile");
export const singleListing = locationURL.includes("single");
export const updateListing = locationURL.includes("update");
export const newListing = locationURL.includes("new");
