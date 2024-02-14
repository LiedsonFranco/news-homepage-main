let button = document.getElementById('menu-button')

function show_menu(){
    document.getElementById('hidden-menu').style.display ='flex'
    document.getElementById('button-icon').src = 'assets/images/icon-menu-close.svg'
    button.removeEventListener("click", show_menu)
    button.addEventListener("click", hide_menu)
}
function hide_menu(){
    document.getElementById('hidden-menu').style.display = 'none'
    console.log('Something')
    document.getElementById('button-icon').src = 'assets/images/icon-menu.svg'
    button.removeEventListener("click", hide_menu)
    button.addEventListener("click", show_menu)
}
function change_img(){
    if(window.innerWidth>600){
        document.getElementById('main-image').src = 'assets/images/image-web-3-desktop.jpg'
        document.getElementById('hidden-menu').setAttribute('id','menu')
    }
    else{
        document.getElementById('main-image').src = 'assets/images/image-web-3-mobile.jpg'
    }
}
change_img()
window.addEventListener('resize', change_img)