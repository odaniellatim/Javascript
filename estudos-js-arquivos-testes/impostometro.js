const number = document.querySelector("#number");
const desc = document.querySelector("#desc");


function formataMoeda(valor, name) {
    moedaFormatada = `${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumSignificantDigits: 2,
        // maximumFractionDigits: 2,
        // minimumIntegerDigits: 15
    }).format(valor)} - ${name}`;

    return moedaFormatada;
}


number.addEventListener("change", () => {

    let userNumber = number.value.length;

    if (typeof (number.value) == "number") {
        console.log("number")
    }

    switch (userNumber) {
        case 1:
            desc.innerHTML = formataMoeda(number.value, "Centavos");
            break;

        case 2:

            desc.innerHTML = formataMoeda(number.value, "Centavos")
            break;

        case 3:
            desc.innerHTML = formataMoeda(number.value, "Reais")
            break;

        case 4:
            desc.innerHTML = formataMoeda(number.value, "Reais")
            break;

        case 5:
            desc.innerHTML = formataMoeda(number.value, "Reais")
            break;

        case 6:
            desc.innerHTML = formataMoeda(number.value, "Mil")
            break;

        case 7:
            desc.innerHTML = formataMoeda(number.value, "Mil")
            break;

        case 8:
            desc.innerHTML = formataMoeda(number.value, "Mil")
            break;

        case 9:
            desc.innerHTML = formataMoeda(number.value, "Milhões")
            break;

        case 10:
            desc.innerHTML = formataMoeda(number.value, "Milhões")
            break;

        case 11:
            desc.innerHTML = formataMoeda(number.value, "Milhões")
            break;

        case 12:
            desc.innerHTML = formataMoeda(number.value, "Bilhões")
            break;

        case 13:
            desc.innerHTML = formataMoeda(number.value, "Bilhões")
            break;

        case 14:
            desc.innerHTML = formataMoeda(number.value, "Bilhões")
            break;

        case 15:
            desc.innerHTML = formataMoeda(number.value, "Trilhões")
            break;
    }

});
