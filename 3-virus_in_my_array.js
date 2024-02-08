/*function signature/sample */
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


console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));