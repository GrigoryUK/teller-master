export default function header() {
  const headerLogo = document.querySelector(".header__logo");

  if (headerLogo) {
    const headerList = document.querySelector(".nav__list-header");
    const navCont = document.querySelector(".nav__cont");
    const navMenuHeader = document.querySelector(".nav__menu");
    const navMenuList = document.querySelector(".nav__menu-header");
    const navMenuListburger = document.querySelector(".nav__list-burger");
    let headerLogoHeight = headerLogo.offsetHeight;
    window.addEventListener("scroll", (el) => {
      let scrollDistance = window.scrollY;

      if (scrollDistance >= headerLogoHeight) {
        headerList.classList.add("hidden");
        navCont.classList.add("visible");
        navMenuList.classList.add("active");
        navMenuListburger.classList.add("active");
      } else {
        headerList.classList.remove("hidden");
        navCont.classList.remove("visible");
        navMenuList.classList.remove("active");
        navMenuListburger.classList.remove("active");
        window.removeEventListener("scroll", el);
      }
    });
  }
}
