// Налаштування
function phoneticLookup(val) {
    let result = "";
  
    // Змініть код лише під цим рядком
    const obj = {
      alpha: 'Adams',
      bravo: 'Boston',
      charlie: 'Chicago',
      delta: 'Denver',
      echo: 'Easy',
      foxtrot: 'Frank'
    }
  
    result = obj[val]
    // Змініть код лише над цим рядком
    return result;
  }
  
  phoneticLookup("charlie");