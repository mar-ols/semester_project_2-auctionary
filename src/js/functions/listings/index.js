import { getLoginData } from "../profile/forms/loginForm.js";
import { getRegisterData } from "../profile/forms/registerForm.js";
import { displayUsername } from "../profile/displayUsername.js";
import { displayListings } from "./displayListings.js";
import { displayListing } from "./displayListing.js";
import { searchInput } from "./forms/searchForm.js";
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
