var btn_showServ = document.querySelector(".pageNav__link-serv"),
    list_serv = document.querySelector(".pageNav__popupList-serv"),
    btn_showMarket = document.querySelector(".pageNav__link-markets"),
    list_mark = document.querySelector(".pageNav__popupList-markets"),
    btn_showWork = document.querySelector(".pageNav__link-work"),
    list_work = document.querySelector(".pageNav__popupList-work"),
    btn_showMenu = document.querySelector(".pageNav__item-mob"),
    list_menu = document.querySelector(".pageNav__list"),
    header_elem = document.querySelector(".pageHeader"),
    page_elem = document.querySelector(".page__wrapper"),
    btn_talk = document.querySelector(".pageHeader__btn");

page_elem.style.paddingTop = getComputedStyle(header_elem).height;

window.addEventListener("resize", function() {
    page_elem.style.paddingTop = getComputedStyle(header_elem).height;
});

btn_showMenu.addEventListener("click", function(event) {
    event.preventDefault();
    list_menu.classList.toggle("pageNav__popupList-show");
    btn_talk.classList.toggle("pageHeader__btn-show");
});

btn_showServ.addEventListener("click", function(event) {
    event.preventDefault();
    list_serv.classList.toggle("pageNav__popupList-show");
});

btn_showMarket.addEventListener("click", function(event) {
    event.preventDefault();
    list_mark.classList.toggle("pageNav__popupList-show");
});

btn_showWork.addEventListener("click", function(event) {
    event.preventDefault();
    list_work.classList.toggle("pageNav__popupList-show");
});