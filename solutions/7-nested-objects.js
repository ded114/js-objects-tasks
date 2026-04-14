// BEGIN
const get = (object, arrOfKeys) => {
    let obj = object
    for (let i = 0; i < arrOfKeys.length; i++) {
        if (!Object.hasOwn(obj, arrOfKeys[i])) {
            return null
        } 
        else {
            obj = obj[arrOfKeys[i]]
        }
    }
    return obj
}

export default get
// END