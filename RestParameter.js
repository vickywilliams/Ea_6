function sum1(...data){
    let sum = 0;
    for(let i of data){
        sum += i;
    }
    console.log("Sum =" +sum)
}

sum1(12,4);     // 16
sum1(1,2,3);    // 6
sum1(1,2,4,5);   //12
sum1(1,3,5,7,9,4); //29

// Spread operator
let arr =[1,2,3,-1,'one',10.5]; // python - tuple
console.log(...arr);
console.log(Math.max(...arr));