// BEGIN
const getDomainInfo = (nameSite) => {
    const proto = nameSite.split('://')
    if (proto.length === 1) {
        return {scheme: 'http',
                name: proto[0]}
    }
    else {
        return {scheme: proto[0],
                name: proto[1]}
    }
}

export default getDomainInfo
// END