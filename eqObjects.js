const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };
  const eqArrays = function(arr1, arr2) {
  
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const eqObjects = function(object1, object2) {
    
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    
    for (let key of keys1) {
      
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } 
      
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    
    return true;
  };

  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

  
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  assertEqual(eqObjects(shirtObject, anotherShirtObject), true);