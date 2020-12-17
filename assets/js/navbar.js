function toggleMenu(){
    var menu = document.getElementById("sidemenu");
    var footer = document.getElementById("hero-footer");

    if(menu.style.visibility==="visible"){
        menu.style.visibility = "hidden";
        menu.classList.remove("navbar-menu-expanded");
        footer.style.opacity = 1;

    }else{
        menu.style.visibility = "visible";
        menu.classList.add("navbar-menu-expanded");

        footer.style.opacity = 0;
    }   
}