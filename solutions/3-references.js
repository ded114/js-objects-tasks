// BEGIN
const is = (company1, company2) => {
    const arr1 = Object.keys(company1)

    for (let i of arr1) {
        if (company1[i] !== company2[i]) {
            return false
        }
    }
    return true
}

export default is
// END