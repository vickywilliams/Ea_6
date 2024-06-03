const college ={
    name:'Imarticus',
    est:'2014',
    isPvt : true
}

let{name,est,isPvt}=college;
console.log('name of the Organisation:' +name);
console.log('Year Starts at:' +est);
console.log('Private Setor:' +isPvt);
console.log(college.name);

//Array Destructuring
const arr = ['one', 'two', 'three'];
let {value1, value2,value3}=arr;
console.log('value1: '+value1);
console.log('value2: '+value2);
console.log('value3: '+value3);