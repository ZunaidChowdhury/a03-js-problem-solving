/*
    regular product price
    discount in %

    calc discountPrice - 100  discount  >   discount/100    >   (discount*productPrice)/100
    calc discountProductPrice
*/


function newPrice(currentPrice , discount ) {
    
    if ((typeof currentPrice !== "number" || typeof discount !== "number") || (discount < 0 || discount > 100)) {
        return "Invalid";        
    }

    let discountedProductPrice = null;
    let discountOnProduct = null;

    discountOnProduct = (discount*currentPrice) / 100;
    discountedProductPrice = currentPrice - discountOnProduct;

    return discountedProductPrice.toFixed(3);
}



const output = newPrice(2000, 17.17);
// const output = newPrice(500, "5");
// const output = newPrice(1500, 20);
console.log(output);
