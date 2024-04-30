import { sendBid } from "../../../api/calls/listings/bid.js";

export function bidForm() {
  const bidForm = document.querySelector("#enterBid");

  if (bidForm) {
    bidForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;

      const bid = parseFloat(form.bid.value);

      const bidObject = {
        amount: bid,
      };

      sendBid(bidObject);
      form.bid.value = "";
    });
  }
}
