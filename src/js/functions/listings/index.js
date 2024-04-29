import { getLoginData } from "../profile/forms/loginForm.js";
import { getRegisterData } from "../profile/forms/registerForm.js";
import { displayUsername } from "../profile/displayUsername.js";
import { displayListings } from "./displayListings.js";
import { searchInput } from "./forms/searchForm.js";
import { logout } from "../profile/logout.js";

getLoginData();
getRegisterData();
displayUsername();
displayListings();
searchInput();
logout();
