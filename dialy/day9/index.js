//Map
//map preserves the order of insertion of key value pairs
//map also preserves the data type of keys ie. it doesnt convert the keys to string by default like what
//object does so,maps can stare keys of any data types

//how to create map
let map= new Map();

//how do we set values to map
map.set("name","Fasna");
map.set("age",25);
map.set(1,"One");
map.set(true,"True");

console.log(map);
console.log(map.size);

//get  helps to get value
console.log(map.get("name"));//Ravi
console.log(map.get(1));//one
console.log(map.get("1"));//undefined

//has--to get key is present or not
// true or false
//case sensitive

console.log(map.has("EMAIL"));//false

//delete--to remove
map.delete("age");
console.log(map);

//clear--to delete all thngs
// map.clear()
console.log(map);//map 0

//size--give size
// map.size();
console.log(map.size);

//keys--print both key 
for(let key of map.keys()){
    console.log(key);
}

//Values--print both  value
for(let value of map.values()){
    console.log(value);
}

//Entries--print both key and value as array
for(let entry of map.entries()){
    console.log(entry);
}

//forEach--print both key and value as normal way
map.forEach(function (value,key) {
    console.log(key,value);
 
})


//SETS
//set has no keys but only Unique value

let set= new Set();

set.add("Apple");
set.add("Banana");
set.add("Orange");
set.add("Grapes");

console.log(set);//Set(4){'Apple',..}

console.log(set.values());//SetIterator{'Apple',...}

