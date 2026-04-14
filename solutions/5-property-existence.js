import _ from 'lodash';

// BEGIN
const countWords = (string) => {
    let result = {}
    if (string.length === 0) {
        return result
    }

    const arr = string.toLowerCase().split(' ')
    for (let i of arr) {
        if (i in result) {
            result[i] += 1
        } else {
            result[i] = 1
        }
    }
    return result
}

export default countWords
// END