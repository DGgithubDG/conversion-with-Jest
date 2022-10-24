const fromDollarToEuro = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    return valueInEuro
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar
}
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound
}


console.log(fromDollarToEuro);
console.log(fromEuroToDollar);
console.log(fromYenToPound);




module.exports = {
    fromDollarToEuro , fromEuroToDollar , fromYenToPound 
    
}