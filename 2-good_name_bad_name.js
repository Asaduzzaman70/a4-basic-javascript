/*function signature/sample */
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

const a = checkName('daHlmaI');
console.log(a);
