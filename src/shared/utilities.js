export const updateObject = (object, newProps) => ({
    ...object,
    ...newProps
})

export const countObjectValues = object => {
    let sum = 0;
    for (let key in object){
        sum += object[key];
    }
    return sum;
}

export const checkInputValidity = (value, rules) => {
    const clearedValue = value.replace(/ /g,'');;
    if (rules.required && clearedValue === '') {
        return false
    }
    if (rules.maxLength && clearedValue.length > rules.maxLength) {
        return false
    }
    if (rules.minLength && clearedValue.length < rules.minLength) {
        return false
    }
    return true;
 }

 export const checkFormValidity = (form) => {
    for(let key in form){
        if(!form[key].valid){
            return false;
        };
    }
    return true;
}
