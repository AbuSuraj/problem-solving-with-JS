
var leapyears=[];
function leapyear(arr){
     for(let i in arr){
          if(arr[i]%4==0 && arr[i]%100 !==0 || arr[i]%400==0 ){
               leapyears.push(arr[i])     
          }
     }
     return leapyears;
}
var arr=[2000,2022,2020,217,2026,1996,1998];
let result = leapyear(arr)
console.log(`Leap years are: ${result}`)