export const getTotals = (cart) => { 
    console.log(cart)
    let totalAmount = 0
    let totalCost = 0

    for (let item of cart.values()) {
        console.log(item)
        totalAmount =totalAmount+ item.amount,
            totalCost=totalCost+(item.amount * item.price)
    }
    
    // for (let { amount, price } of cart.values()) { 
    //     totalAmount += amount
    //     totalCost += amount*price
    // }

    return {totalAmount,totalCost}
}