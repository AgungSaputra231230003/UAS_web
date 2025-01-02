var prem = document.getElementById('menu_premium');
var Ekonomi = document.getElementById('menu_ekonomi');
var popup_prem = document.getElementById('id_div_popup_js_pemium');
var tutupPopUp = document.getElementById('ini_batal');
var tutupPopUp2 = document.getElementById('ini_batal2');
var popup_ekonomi = document.getElementById('id_div_popup_js_ekomomi');

prem.addEventListener('click', () => {
  popup_prem.classList.add('show');
});

tutupPopUp.addEventListener('click', () => {
  tutupPopUp.classList.add('show');
  setTimeout(() => {
    tutupPopUp.classList.remove('show');
    setTimeout(() => {
      popup_prem.classList.remove('show');
    }, 300);
  }, 300);
});

Ekonomi.addEventListener('click', () => {
  popup_ekonomi.classList.add('show');
});

tutupPopUp2.addEventListener('click', () => {
  tutupPopUp2.classList.add('show');
  setTimeout(() => {
    tutupPopUp2.classList.remove('show');
    setTimeout(() => {
      popup_ekonomi.classList.remove('show');
    }, 300);
  }, 300);
});
