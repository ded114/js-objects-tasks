// BEGIN
const getSortedNames = (users) => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const {name} = users[i]
        result.push(name)
    }
    return result.sort()
}

export default getSortedNames
// END