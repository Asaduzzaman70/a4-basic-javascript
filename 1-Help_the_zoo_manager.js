/*function signature/sample */
function calculateMoney(ticketSale) {
    if(0 <= ticketSale){
        return ( ticketSale * 120) - ( 500 + (8 * 50) );
    }
    else{
        return 'Please Type Positive Number!';
    }
}

// Not prefer
const x = calculateMoney(-130);
console.log(x);