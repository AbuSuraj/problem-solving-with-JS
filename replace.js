 let str = "KAla kala shada shada";
//  it will replace only first occurance 
 console.log(str.replace('kala','red'))
//  it will replace all occurance 
 console.log(str.replace(/kala/g,'red'))
// it will made str case-insensetive 
 console.log(str.replace(/kala/gi,'red'))