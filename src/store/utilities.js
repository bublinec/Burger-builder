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