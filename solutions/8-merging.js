import _ from 'lodash';

// BEGIN
const fill = (object1, arrOfKeys, object2) => {
    const keys = Object.keys(object2)
    if (arrOfKeys.length === 0) {
        for (let i = 0; i < keys.length; i++) {
            object1[keys[i]] = object2[keys[i]]
        }
    }
    else {
        for (let i = 0; i < arrOfKeys.length; i++) {
            object1[arrOfKeys[i]] = object2[arrOfKeys[i]]
        }
    }
}

export default fill
// END