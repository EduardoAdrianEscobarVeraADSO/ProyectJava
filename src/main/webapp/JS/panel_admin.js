/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


// Función para abrir/cerrar el menú
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.header__menu-icon');
  const closeIcon = document.querySelector('.header__menu-icon--close');
  const menu = document.getElementById("myNav");

  menuIcon.addEventListener('click', toggleMenu);
  closeIcon.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (menu.style.width === '250px') {
      menu.style.width = '0';
    } else {
      menu.style.width = '250px';
    }
  }
});
  
//funcion para editar
const url = new URL(window.location.href);

// Obtener el parámetro 'id'
const id = url.searchParams.get('id');

const inputId = document.getElementById('edit-category-id');
const IdUser = document.getElementById('edit-category-id');

if (id !== null) {
    inputId.value = id;
}
console.log(inputId);