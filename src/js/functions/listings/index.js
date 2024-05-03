import { getLoginData } from "../profile/forms/loginForm.js";
import { getRegisterData } from "../profile/forms/registerForm.js";
import { displayUsername } from "../profile/displayUsername.js";
import { displayListings } from "./displayListings.js";
import { displayListing } from "./displayListing.js";
import { searchInput } from "./forms/searchForm.js";
import { bidForm } from "./forms/bidForm.js";
import { getNewListingData } from "./forms/createListingForm.js";
import { additionalImg } from "./additionalImg.js";
import { disablePastDates } from "./disablePastDates.js";
import { logout } from "../profile/logout.js";

getLoginData();
getRegisterData();
displayUsername();
logout();

// listings/index.html

displayListings();
searchInput();

// single-listing/index.html

displayListing();
bidForm();

// new-listing/index.html

getNewListingData();
additionalImg();
disablePastDates();
