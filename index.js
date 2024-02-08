function calculateMoney(ticketSale) {
    if(0 <= ticketSale){
        return ( ticketSale * 120) - ( 500 + (8 * 50) );
    }
    else{
        return 'Please Type Positive Number!';
    }
}
function checkName(name) {
    if(typeof name === 'string'){
        const name_lower = name.toLowerCase();
        const good_sign = name_lower.slice(-1);
        if(good_sign === 'a' || good_sign === 'y' || good_sign === 'i' || good_sign === 'e' || good_sign === 'o' || good_sign === 'u' || good_sign === 'w'){
            return 'Good Name';
        }
        else{
            return 'Bad Name';
        }
    }
    else{
        return 'invalid';
    }
}
function deleteInvalids(array) {
    if(Array.isArray(array) === true){
        let new_array = [];
        for(const value of array){
            if(typeof value === 'number' && isNaN(value) === false){
                new_array.push(value);
            }
        }
        return new_array;
    }
    else{
        return 'Please Include Array Type Value!'
    }
}
function password(obj) {
    if(typeof obj === 'object' && Array.isArray(obj) === false){
        let obj_keys = Object.keys(obj);
        let obj_keys_numbers = obj_keys.length;
        if(obj_keys_numbers === 3 && obj_keys[0].toLowerCase() === 'name' && obj_keys[1].toLowerCase() === 'birthyear' && obj_keys[2].toLowerCase() === 'sitename' && obj.birthYear.toString().length === 4){
            let site_name_capita = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
            const pass = site_name_capita + '#' + obj.name + '@' + obj.birthYear;
            return pass;
        }
        else{
            return 'invalid';
        }
    }
    else{
        return 'Provide an object with four properties!'
    }
}
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


const x = calculateMoney(130);
console.log(x);

const a = checkName('daHlmaI');
console.log(a);

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));

console.log(password({ name: 'toky' , birthYear: 2100, siteName: 'Facebook' }));

console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));