export function add(param1: number, param2: number): number {
    return param1+param2;
}

//rest operator in JS
function add2(...params:number[]):number{
    console.log(params)
    let sum=0;
    params.forEach((num)=>{
        sum+=num;
    })
    console.log(sum);
    return sum;
}

console.log(add(1, 2));
// console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
