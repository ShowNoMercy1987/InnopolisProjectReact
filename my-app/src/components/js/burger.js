"use strict";
const menuBtn = document.getElementById("burger-button");
const menu = document.getElementById("burger-menu");
const body = document.body;


//--------------------------бургер-------------------------------//
if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("burger-active");
    menuBtn.classList.toggle("burgerBtn-active");
    body.classList.toggle("lock");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("burger-active");
      menuBtn.classList.remove("burgerBtn-active");
      body.classList.remove("lock");
    });
  });
}

//-----------скрывание по модалок по клику-----------------//
document.addEventListener('click', (e) => {
  const click1 = e.composedPath().includes(menuBtn);
  const click2 = e.composedPath().includes(menu);
  if (!click1 && !click2) {
    menu.classList.remove("burger-active");
    menuBtn.classList.remove("burgerBtn-active");
    body.classList.remove("lock");
  }
    
})
//---------------------------------------------------------//

