export function selectElement() {

    const minValue = document.querySelector("td.min-demage")
    const maxValue = document.querySelector("td.max-demage");

    const inputMinValue = document.querySelector("input#input-min-demage");
    const inputMaxValue = document.querySelector("input#input-max-demage");

    //Calcula o minimo de dano do item
    // CalcMinDemage();
    return {
        tdMinValue: minValue,
        tdMaxValue: maxValue,
        inputMinValue: inputMinValue,
        inputMaxValue: inputMaxValue,
    }

};

// CalcMinDemage(maxItem, ValueInput){
//     return ValueInput - maxItem;
// }

