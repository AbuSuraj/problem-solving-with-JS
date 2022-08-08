//  Approach -1 
// function isPalindrome(str){
// let str2 = str.split('').reverse().join('');

// if(str == str2){
//     console.log(`Given string is a palindrome`)
// }
// else 
// console.log("not a palindrome");
// }
// let str1 = "madam";
// isPalindrome(str1)
// aprroch -2 
// function isPalindrome(str){
//     let j =0;
//     let str2 = [];
//     for( let i = str.length-1; i >=0; i--){
//         str2[j++] = str[i];
//     }
//     //  console.log(str2.join(''))
//     str2 = str2.join('')
//     if(str2 === str){console.log("palindrome");}
//     else console.log("not a palindrome")
// }
// let str1 = "madam";
//  isPalindrome(str1)

// Approach-3
function isPalindrome(str){
    let j =0;
    let str2 = [];
    for( let i = str.length-1; i >=0; i--){
        if (str[j++] === str[i]){continue;}
        else{return false;}
        
    }
    return true;
}
let str1 = "madm";
if(isPalindrome(str1)){console.log("palindrom")}
else console.log("not a palindrome")