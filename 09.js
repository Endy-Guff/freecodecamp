function checkObj(obj, checkProp) {
    // Змініть код лише під цим рядком
    
    if(obj[checkProp] === obj[checkProp] && obj[checkProp] != undefined){
      return obj[checkProp]
    } else return 'notfound'
    // Змініть код лише над цим рядком
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));