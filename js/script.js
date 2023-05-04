function menu() {
  //let bg_menu = document.querySelector('.menu_mobile_total');
  document.querySelector(".menu_mobile_open").addEventListener('click', () => {

    let menu_mobile = document.querySelector('.menu_mobile');
    menu_mobile.style.display = "flex";
    menu_mobile.style.right = "0px";
    menu_mobile.style.animation = "move ease-in 400ms";
   

    setTimeout(() => {
      document.querySelector('.menu_mobile_open').style.display = "none";
      document.querySelector('.menu_mobile_close').style.display = "flex";
      //bg_menu.style.display = "flex";
    }, 200);
  });
  let menu_close = document.querySelector('.menu_mobile');
  document.querySelector(".menu_mobile_close").addEventListener('click', () => {
    menu_close.style.right = "-100%";
    menu_close.style.animation = "move ease-out 400ms";
   
    setTimeout(() => {
      if (document.querySelector('.menu_mobile').style.right = "-100%") {
        document.querySelector('.menu_mobile').style.display = "none";
        //bg_menu.style.display = "none";
      }
    }, 600);

    setTimeout(() => {
      document.querySelector('.menu_mobile_open').style.display = "flex";
      document.querySelector('.menu_mobile_close').style.display = "none";
      //bg_menu.style.display = "none";
    }, 100);
  });
  let close_link = document.querySelectorAll('nav ul a');

  close_link.forEach((element) => {
    element.addEventListener('click', () => {
      menu_close.style.right = "-100%";
      menu_close.style.animation = "move ease-out 400ms";
      
      setTimeout(() => {
        if (document.querySelector('.menu_mobile').style.right = "-100%") {
          document.querySelector('.menu_mobile').style.display = "none";
          //bg_menu.style.display = "none";
        }
      }, 600);

      setTimeout(() => {
        document.querySelector('.menu_mobile_open').style.display = "flex";
        document.querySelector('.menu_mobile_close').style.display = "none";
        //bg_menu.style.display = "none";
      }, 100);
    });
  });

}
menu();