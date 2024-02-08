/*function signature/sample */
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

console.log(password({ name: 'toky' , birthYear: 2100, siteName: 'Facebook' }));









// const x = { name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }
// let obj_keys = Object.keys(x);
// let obj_keys_numbers = obj_keys.length;

// let ac = x.siteName[0].toUpperCase() + x.siteName.slice(1);
// console.log(ac);


// console.log(obj_keys_numbers, obj_keys[1].toLowerCase() === 'name', obj_keys[1].toLowerCase());

// let y = x.birthYear.toString()
// console.log(y.length);
// console.log(x.name.toLowerCase());

// === 3