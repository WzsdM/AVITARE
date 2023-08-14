// Esconder menú lateral

const iconoMenu = document.getElementById('iconmenu');
const menu = document.getElementById('menulateral');
const content = document.getElementById('content');
var text = document.getElementsByName('textMenu');

iconoMenu.addEventListener('click', (c) => {
    c.preventDefault();
    menu.classList.toggle('activeMenu');
    content.classList.toggle('activeContent');
    text.forEach(element => {
        element.classList.toggle('activeText');
    });
    document.body.classList.toggle('opacity');
    
});
// Esconder submenu de "Proyectos"
const clickProyectos = document.getElementById('clickProyectos');
const submenuProyectos = document.getElementById('submenuProyectos');

clickProyectos.addEventListener('click', (d) => {
    d.preventDefault();
    submenuProyectos.classList.toggle('submenu');
    
});
// Modal Ayuda
const openModal = document.getElementById('btnAyuda');
const modal = document.getElementById('modalAyuda');
const iconAyuda = document.getElementById('iconAyuda');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.toggle('activeModal');
    const rutaActual = iconAyuda.getAttribute('class');

    if(rutaActual == 'bi bi-chevron-down'){
        iconAyuda.setAttribute('class','bi bi-chevron-up');
    }else{
        iconAyuda.setAttribute('class','bi bi-chevron-down');
    }
});


// Modal Usuario
const openModalUser = document.getElementById('usuario');
const modalUser = document.getElementById('modalUser');
const iconUser = document.getElementById('iconUser');

openModalUser.addEventListener('click', (f)=>{
    f.preventDefault();
    modalUser.classList.toggle('activeModal');
    const rutaActualUser = iconUser.getAttribute('class');

    if(rutaActualUser == 'bi bi-chevron-down'){
        iconUser.setAttribute('class','bi bi-chevron-up');
    }else{
        iconUser.setAttribute('class','bi bi-chevron-down');
    }
});
