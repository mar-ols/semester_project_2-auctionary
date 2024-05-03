export function disablePastDates() {
  const dateInput = document.querySelector("#endDate");

  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) {
      mm = `0${mm}`;
    }

    if (dd < 10) {
      dd = `0${dd}`;
    }

    const currentDate = `${yyyy}-${mm}-${dd}`;

    dateInput.setAttribute("min", currentDate);
  }
}
