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
     
       
        TotalSum.innerHTML = FemTotal.toFixed(2)
        TotalFem.innerHTML = FemTotal.toFixed(2)
    }

    else if (MQuantity.length > 0 && FQuantity.length == 0) { 
        
        TotalSum.innerHTML = MaleTotal.toFixed(2)
        TotalMale.innerHTML = MaleTotal.toFixed(2)


    }

    else if (MQuantity.length > 0 && FQuantity.length > 0) {
    
   
        let Overall = MaleTotal + FemTotal
    TotalMale.innerHTML = MaleTotal.toFixed(2)
    TotalFem.innerHTML = FemTotal.toFixed(2)
    TotalSum.innerHTML = Overall.toFixed(2)

    } 

}