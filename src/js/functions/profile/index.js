import { getLoginData } from "../profile/forms/loginForm.js";
import { getRegisterData } from "../profile/forms/registerForm.js";
import { displayUsername } from "./displayUsername.js";
import { displayProfile } from "./displayProfile.js";
import { logout } from "./logout.js";

getLoginData();
getRegisterData();
displayUsername();
displayProfile();
logout();
