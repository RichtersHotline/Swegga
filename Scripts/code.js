let FPrice = 150.95;
let MPrice = 180.95;

let TotalSum = document.getElementById("TotalAll")
let TotalMale = document.getElementById("TotalM")
let TotalFem = document.getElementById("TotalF") 
// function Total() {

// if (FQuantity == undefined) {
//    console.log("Posterior")
//      TotalSum.innerHTML = MQuantity * MPrice;

// }
// else if (MQuantity == undefined) {

//     FQuantity * MPrice;
//     TotalSum.innerHTML = MQuantity * MPrice;
//     console.log("Rear")

// }
// else {

// console.log(MQuantity += FQuantity * MPrice * FPrice);
// console.log("Fake")

// }

// }
function Total() {
    let FQuantity = document.getElementById("QuantityF").value
    let MQuantity = document.getElementById("QuantityM").value
    let MaleTotal =  MQuantity * MPrice    
    let FemTotal =  FQuantity * FPrice
    if (FQuantity.length == 0 && MQuantity.length == 0) {

console.log("empty")
TotalSum.innerHTML = "No Quantities were selected"

    }

    else if (FQuantity.length > 0 && MQuantity.length == 0) {
     
        TotalSum.innerHTML = FemTotal
        TotalFem.innerHTML = FemTotal
    }

    else if (MQuantity.length > 0 && FQuantity.length == 0) { 
        
        MaleTotal.toFixed(2)
        TotalSum.innerHTML = MaleTotal
        TotalMale.innerHTML = MaleTotal


    }

    else if (MQuantity.length > 0 && FQuantity.length > 0) {
        let Overall = MQuantity * MPrice + FQuantity * FPrice
    TotalMale.innerHTML = MaleTotal
    TotalFem.innerHTML = FemTotal
    TotalSum.innerHTML = Overall

    } 

}