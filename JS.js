
window.onload = function() {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.menu-items');
    const emit_title = document.querySelector('.Emit-Music');

  
   


    
    
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        emit_title.classList.toggle('is-active');
    }); 
    
    new Swiper("#swiper-1",{
        effect: "fade",

        pagination: {
            el: "#swiper-1 .swiper-pagination",
            clickable: true,
        }
    })


   




}




function myFunction() {
    var expand = document.getElementById("expand");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");


  
    if (expand.style.display === "none") {
      expand.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      expand.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }


  
  }

