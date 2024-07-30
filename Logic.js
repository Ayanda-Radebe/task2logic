//a. Sort low to hig 
const numbers = [
     3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190,
     210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980
]

numbers.sortLowestToHighighest = numbers.sort((a, b) => a - b);
console.log("Sort Lowest to Highest");

//b. Sort high to low 
numbers.sortHighestToLowest = numbers.sort((a, b) => b - a);
console.log("Sort Highest to Lowest");


//c.  Unique numbers 


//d. sum  // accumulator- which is the variable that stores the last returned value
//reduce - adding numbers in an array 
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);


//e. <= 100    // use filter      
const filteredNumber = numbers.filter(num => num <= 100);
console.log(filteredNumber);


//f. > 50
const filternum = numbers.filter(num => num > 50);
console.log(filternum);


//g. /2
const filterNumbers = numbers.filter(num => num % 2 === 0);
console.log(filterNumbers);


//h. /3
const filterdNumber = numbers.filter(num => num % 3 === 0);
console.log(filteredNumber);


//j. count number of elements in an array
const count = numbers.length;
console.log(count);


//k. reverse 
const reverseNumbers = [numbers].reverse();
console.log(reverseNumbers);


//2.
// return all values that are numbers
const mixedArray = [
     7, 10, 'Clentan', 13, 89, true, 45, false, 'Jerry', 'Vukona', 'Reabetswe', 600.
];

for (let i = 0; i < mixedArray.length; i++) {
     if (typeof mixedArray[i] === 'numbers')
     {
          numbers.push(mixedArray[i])
     }
}
console.log(numbers);


// return all values that are strings //(for & while - Loops a code block while a condition is true)
const string = []; 
let i = 0;

while (i < mixedArray.length) {
     if (typeof mixedArray[i] ==="string"){
          string.push(array[i]);
     }
}
console.log(string)


// return the sum // loop a code block once,  and then while a condition is true

do {
     if(typeof array[i] ==="number") {
          sum += array[i]; 
     }
i++
} while (i < array.length); 
console.log(sum)


//combine all strings
const strings = [];
let greeting = ""; 

while (i < mixedArray.length) {
     if (typeof mixedArray[i] ==="string"){
          string.push(array[i]);
     }
}

if (strings.lenght > 1) {
     greeting = "Hello", + strings.join() + ".";
     greeting = "Hello " + strings[0]+ ".";
}
console.log(greeting);


//remove all values in the array that are strings
const filtermixedArray = mixedArray.filter(item => typeof item  !== "string");
console.log(filterArray);


//3.

const developers = [
     {
       name: "Vee",
       laptops: [
         "Dell"
       ],
       phones: [
         "Samsung",
         "Xiaomi"
       ],
       computerSetups: [
         {
           brand: "Lenovo",
           monitors: 1,
           keyboards: 1,
           mice: 1,
           speakers: 1
         }
       ]
     },
     {
       name: "Katlego",
       laptops: [
         "HP",
         "Samsung"
       ],
       phones: [
         "Apple",
         "Samsung",
         "Tecno",
         "Samsung"
       ],
       computerSetups: [
         {
           brand: "Lenovo",
           monitors: 2,
           keyboards: 1,
           mice: 1,
           speakers: 2
         }, 
         {
           brand: "Dell",
           monitors: 1,
           keyboards: 1,
           mice: 1,
           speakers: 1
         }
       ]
     },
     {
       name: "Rethabile",
       laptops: [
         "Samsung"
       ],
       phones: [
         "Samsung",
         "Huawei",
         "Poco"
       ],
       computerSetups: [
         {
           brand: "Asus",
           monitors: 1,
           keyboards: 1,
           mice: 1,
           speakers: 1
         }, 
         {
           brand: "Acer",
           monitors: 1,
           keyboards: 1,
           mice: 1,
           speakers: 2
         }
       ]
     },
     {
       name: "Gift",
       laptops: [],
       phones: [
         "Samsung"
       ],
       computerSetups: [
         {
           brand: "Acer",
           monitors: 3,
           keyboards: 1,
           mice: 1,
           speakers: 2
         }, 
         {
           brand: "HP",
           monitors: 2,
           keyboards: 1,
           mice: 1,
           speakers: 2
         }
       ]
     },
     {
       name: "Thokozile",
       laptops: [
         "Lenovo"
       ],
       phones: [
         "Apple"
       ],
       computerSetups: [
         {
           brand: "Dell",
           monitors: 1,
           keyboards: 1,
           mice: 1,
           speakers: 2
         }, 
         {
           brand: "Asus",
           monitors: 1,
           keyboards: 0,
           mice: 1,
           speakers: 1
         }, 
         {
           brand: "Dell",
           monitors: 1,
           keyboards: 1,
           mice: 1,
           speakers: 1
         }
       ]
     }
   ]



//a. 

const developerNames = developers