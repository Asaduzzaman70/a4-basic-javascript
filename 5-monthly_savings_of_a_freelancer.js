/*function signature/sample */
function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) === true && typeof livingCost === 'number' && isNaN(livingCost) === false){
        let total = 0;
        for(const number of arr){
            total += number;
            if(number >= 3000){
                total -= (number*0.2);
            }
        }
        let final_amount = (total - livingCost);
        if(final_amount >= 0){
            return final_amount;
        }
        else{
            return 'earn more';
        }
    }
    else{
        return 'invalid input';
    }
}


console.log(monthlySavings(100, [ 900 , 2700 , 3400]));