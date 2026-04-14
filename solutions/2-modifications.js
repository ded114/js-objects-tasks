import _ from 'lodash';

// BEGIN
const normalize = (object) => {
  if (object.name && object.name.length > 0){
    let firstCharOfname = object.name[0].toUpperCase()
    let tempName = object.name.slice(1).toLowerCase()
    object.name = firstCharOfname + tempName
  }
  
  if (object.description && object.description.length > 0){
    object.description = object.description.toLowerCase()
  }
}

export default normalize
  // END