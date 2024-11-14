const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };
  const countOnly = function (allItems, itemsToCount) {
    const results = {};
  
    for (const item of allItems) {
      if (results[item]) {
        results[item] += 1;
      } else {results[item] = 1;
        
      }
      console.log(item);
    }
  
    return results;
  };

  const firstNames = [
    "Karl",

    "Salima",

    "Agouhanna",

    "Fang",

    "Kavith",

    "Jason",

    "Salima",

    "Fang",

    "Joe",


  ]

  const result1 = countOnly(firstNames,{

    Jason: true,

    Karima: true,

    Fang: true,

    Agouhanna: false,
   

    
  });



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);