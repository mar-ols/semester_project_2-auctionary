import { register } from "../../../api/calls/profile/register.js";

export function getRegisterData() {
  const getRegisterForm = document.querySelector("#registerForm");

  if (getRegisterForm) {
    getRegisterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const name = form.name.value;
      const email = form.email.value;
      const password = form.createPassword.value;

      const user = {
        name,
        email,
        password,
      };

      register(user);
    });
  }
}
