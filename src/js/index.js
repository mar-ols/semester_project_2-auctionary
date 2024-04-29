import { getLoginData } from "./functions/profile/forms/loginForm.js";
import { displayUsername } from "./functions/profile/displayUsername.js";
import { getRegisterData } from "./functions/profile/forms/registerForm.js";
import { logout } from "./functions/profile/logout.js";

getLoginData();
displayUsername();
getRegisterData();
logout();
