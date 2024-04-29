import { getLoginData } from "./functions/profile/forms/loginForm.js";
import { displayUsername } from "./functions/profile/displayUsername.js";
import { getRegisterData } from "./functions/profile/forms/registerForm.js";
import { frontPageListings } from "./functions/listings/frontPageListings.js";
import { logout } from "./functions/profile/logout.js";

getLoginData();
displayUsername();
getRegisterData();
frontPageListings();
logout();
