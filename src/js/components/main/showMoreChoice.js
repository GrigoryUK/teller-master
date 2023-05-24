export default function showMoreChoice() {
  const showMoreChoice = document.querySelector(".btn__choice");

  if (showMoreChoice) {
    const productsLengthChoice =
      document.querySelectorAll(".choice__show").length;
    const loadingChoice = document.querySelector(".loading");
    const showMoreSpunChoice = document.querySelector(".show-more-span");
    let items = 12;
    showMoreChoice.addEventListener("click", (el) => {
      showMoreSpunChoice.style.display = "none";
      loadingChoice.classList.add("donat");
      setTimeout(() => {
        items += 3;
        const array = Array.from(
          document.querySelector(".choice__cont-grid").children
        );
        const visItems = array.slice(0, items);
        visItems.forEach((el) => {
          el.classList.add("is-visible");
          let isVisible = document.querySelectorAll("is-visible");
          setTimeout((isVisible) => {
            el.classList.add("is-active");
          }, 100);
        });
        loadingChoice.classList.remove("donat");
        showMoreSpunChoice.style.display = "block";

        if (visItems.length === productsLengthChoice) {
          showMoreChoice.style.display = "none";
          showMoreChoice.removeEventListener("click", el);
        }
      }, 200);
    });
  }
}
