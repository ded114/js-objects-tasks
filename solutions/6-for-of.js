// BEGIN
const pick = (object, arrOfProperty) => {
    let result = {}
    for (let i of arrOfProperty) {
        if (object[i] !== undefined) {
            result[i] = object[i]
        } else { continue }
    }
    return result
}

export default pick
// END