var testArray = [2, 4, 7, 9, 3, 5, 1, 8, 6];

// result is  'zero', 'zero',
// console.log(testArray.fill("zero"));
//   'zero', 'zero',
//   'zero', 'zero',
//   'zero', 'zero',
//   'zero'

// console.log(testArray.fill("zero", 2));
//  2,      4,     
//   'zero', 'zero',
//   'zero', 'zero',
//   'zero', 'zero',
//   'zero'
// here first variable is start range 


console.log(testArray.fill("zero", 2, 6));
2,      4,      'zero',
  'zero', 'zero', 'zero',
  1,      8,      6

//  2nd variable is End range 
