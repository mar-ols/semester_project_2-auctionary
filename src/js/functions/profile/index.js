import { getLoginData } from "../profile/forms/loginForm.js";
import { getRegisterData } from "../profile/forms/registerForm.js";
import { displayUsername } from "./displayUsername.js";
import { displayProfile } from "./displayProfile.js";
import { displayChangeAvatar } from "./displayEditAvatar.js";
import { getAvatarData } from "./forms/changeAvatarForm.js";
import { displayUserBids } from "./displayUserBids.js";
import { displayUserListings } from "./displayUserListings.js";
import { logout } from "./logout.js";

getLoginData();
getRegisterData();
displayUsername();
displayProfile();
displayChangeAvatar();
getAvatarData();
displayUserBids();
displayUserListings();
logout();
