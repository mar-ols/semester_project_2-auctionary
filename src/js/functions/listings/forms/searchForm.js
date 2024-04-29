import { search } from "../search.js";

export function searchInput() {
  const getSearchInput = document.querySelector("#search");
  const getSearchForm = document.querySelector("#searchForm");
  const viewMore = document.querySelector(".viewMore");
  const backBtn = document.querySelector(".goBack");

  if (getSearchForm) {
    getSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchValue = getSearchInput.value.trim().toLowerCase();
      if (searchValue.length === 0) {
        location.reload();
      }
      search(searchValue);
      viewMore.style.display = "none";
      backBtn.classList.remove("d-none");
      getSearchInput.value = "";

      backBtn.addEventListener("click", () => {
        location.reload();
      });
    });
  }
}
