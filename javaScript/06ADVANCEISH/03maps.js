var myMap = new Map();

myMap.set(0, "vijay");
myMap.set(1, "rupesh");
myMap.set(2, "koti");
myMap.set(3, "jana");
myMap.set(4, "balaji");

console.log(myMap);
// 0 => 'vijay', 
// 1 => 'rupesh',
// 2 => 'koti',  
// 3 => 'jana',
// 4 => 'balaji'

for (let key of myMap.keys()) {
    console.log(`key is ${key}`);
};
// key is 0
// key is 1
// key is 2
// key is 3
// key is 4

for (let value of myMap.values()){
    console.log(value);
};
// vijay
// rupesh
// koti
// jana
// balaji

// we have a very simple method
// use key and values in same code

for (let [key, value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
};
// key is 0 and value is vijay
// key is 1 and value is rupesh
// key is 2 and value is koti
// key is 3 and value is jana
// key is 4 and value is balaji

myMap.forEach((key)=>console.log(`${key}`) );
// vijay
// rupesh
// koti
// jana
// balaji
// here we ask for keys but it shows value here lets check values too

myMap.forEach((value)=>console.log(`${value}`) );
// again it shows values so maps always  shows values 
// lets try to ask both 

 myMap.forEach((k, v) => console.log(`${k} and value is ${v}`) );
 /// here the value comes error so we need to give values first
//  vijay and value is 0
// rupesh and value is 1
// koti and value is 2
// jana and value is 3
// balaji and value is 4
// notice here maps always taken the values first

myMap.delete(4);
console.log(myMap);
// Map(4) { 0 => 'vijay', 1 => 'rupesh', 2 => 'koti', 3 => 'jana' }
// sucessfully we delete the value of 4 here
// in maps this delete also helps many times
