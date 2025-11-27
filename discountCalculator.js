debugger;
function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;
    let totalPrice = 0;
    debugger;
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }
    debugger;
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;