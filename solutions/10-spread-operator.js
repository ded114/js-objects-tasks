// BEGIN
const make = (string, object) => {
    let result = {name: string, 
                  state: 'moderating', 
                  createdAt: Date.now(),
    }
    if (object !== undefined) {
        for (let i in object) {
            result[i] = object[i]
        }
    }
    return result
}

export default make
// END