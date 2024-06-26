import { getLoginData } from "../../profile/forms/loginForm.js";
import { getRegisterData } from "../../profile/forms/registerForm.js";
import { displayUsername } from "../../profile/displayUsername.js";
import { getUpdatedListingData } from "../forms/updateListingForm.js";
import { additionalImg } from "../additionalImg.js";
import { disablePastDates } from "../disablePastDates.js";
import { logout } from "../../profile/logout.js";

getLoginData();
getRegisterData();
displayUsername();
additionalImg();
getUpdatedListingData();
disablePastDates();
logout();
