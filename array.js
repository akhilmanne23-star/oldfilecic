// // decalre array

// let number = [1,2,3,4,5];
// let fruits = ['apple','banana','cherry'];

// number[2]= 8;

// // access elements by index

// console.log (number[2]);    
// console.log (fruits [1]);   

// let fruits = ['apple','banana',];
// fruits.push('mango')
// fruits.pop();
// // console.log (fruits); 

// // // shift and unshift
// // let number = [1,2,3,4,5];
// // let first = number.shift();
// // console.log (first);
// // console.log (number);  

// // number.unshift(0);
// // console.log (number); 

// // //slice-only remove things
// // let fruits = ['apple','banana', 'mango'];
// // // let sliced = fruits.slice (2,3);
// // // console.log (sliced);

// // // splice relace with some other items
// // fruits.splice (0,1,'cheery','viloet');
// // console.log (fruits);
// // fruits.splice (0,1);
// // console.log (fruits);

// //sort= arrange in alphabetic order
// let numbers= ['apple', 'mango', 'banana'];
// numbers.sort();
// console.log (numbers);

// let number = [1,2,3,4,5];
// number.reverse();
// console.log (number);

// //concat
// let array1 =[1,2,3];
// let array2 =[5,6,7];
// let combined = array1.concat(array2);
// console.log (combined);

// //join
// let words =['hello','world','!'];
// let sentence = words.join(" ");
// console.log(sentence);

// //indexOf () and last IndexOf ()
// // let b= ['apple','banana', 'mango','apple'];
// // console.log(b.indexOf('mango'));
// // console.log(b.lastIndexOf('apple'));

// // //includes ()
// // let c= [1,2,3,4,5];
// // console.log(c.includes(3));
// // console.log(c.includes(9));

// // spread operations
// let array1 =[1,2,3];
// let array2 = [...array1];

// console.log(array2);

// let c= [1,2,3,4,5];
// let merged = [...array2,...c];

// console.log(merged);

// 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Example: console.log(matrix[0][2]);  // prints 3

// Loop through the matrix properly
for (let i = 0; i < matrix.length; i++) {          // loop rows
    for (let j = 0; j < matrix[i].length; j++) {   // loop columns
        console.log(matrix[i][j]);
    }
}
