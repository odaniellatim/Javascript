// configuração do menu
const btnMenu = document.querySelector("#btn-menu-mobile");
const itemMenu = document.querySelector("#menu-navigation");

btnMenu.addEventListener("click", () => {
    itemMenu.classList.toggle("active");
});

// configuração do cadastro
const btnCadastro = document.querySelector("#btn-cadastro");
const popUpCadastro = document.querySelector(".container__popup-cadatro");
const btnFechar = document.querySelector("#btn-fechar")

btnCadastro.addEventListener("click", () => {
    popUpCadastro.style.display = 'block';

});

// configuração do popup de cadastro
btnFechar.addEventListener("click", () => {
    const elementoPai = popUpCadastro;
    elementoPai.style.display = "none"
});



