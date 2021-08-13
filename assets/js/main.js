function showMenu(toggle, menu){
    const toggleMenu = document.getElementById(toggle);
    const sideMenu = document.getElementById(menu);
   
    

     if(toggleMenu && sideMenu){
         toggleMenu.addEventListener("click", function(){
            sideMenu.classList.toggle('active-menu');
        })
    } 
}
showMenu("header-toggle", "header-menu");



const swiper = new Swiper(".mainscreen_container", {
    loop: true,
    effect: "cube",
    grabCursor: true,
    direction: "horizontal",
    keyboard:{
        enable: true,
    },
    autoplay:{
        delay: 12500,
        disableOnInteraction: false,
    },
    cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.8,
    },
      
    navigation:{
        prevEl: ".arrow-left",
        nextEl: ".arrow-right"
    },

})



