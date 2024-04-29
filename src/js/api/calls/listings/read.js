import {
  API_BASE,
  API_LISTINGS,
  API_SELLER,
  API_QUERY_BIDS,
} from "../../constants.js";
import { loader } from "../../../functions/loader.js";

export async function getListings(url) {
  loader();
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const listings = await response.json();

    if (response.ok) {
      const getLoader = document.querySelector(".loader");
      if (getLoader) {
        getLoader.classList.remove("loader");
      }
      return listings;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getListing(id) {
  loader();
  const getListingAPI = `${API_BASE}${API_LISTINGS}/${id}?${API_SELLER}&${API_QUERY_BIDS}`;
  try {
    if (id) {
      let response = await fetch(getListingAPI, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const listing = await response.json();
      if (response.ok) {
        const getLoader = document.querySelector(".loader");
        if (getLoader) {
          getLoader.classList.remove("loader");
        }
        return listing;
      }
    }
  } catch (error) {
    console.error(error);
  }
}
