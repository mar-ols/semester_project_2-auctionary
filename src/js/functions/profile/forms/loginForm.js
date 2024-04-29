import { login } from "../../../api/calls/profile/login.js";

export function getLoginData() {
  const getLoginForm = document.querySelector("#loginForm");

  if (getLoginForm) {
    getLoginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const email = form.email.value;
      const password = form.password.value;

      const user = {
        email,
        password,
      };

      login(user);
    });
  }
}
