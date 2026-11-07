// console.log('hi there');

//this first e class ke ingit kore er sob property nea constructor obj er shate somporco create korche
//this key word object ke mean korche
class Employee {
    name: string;
    baseSalary:number;

    constructor(name:string, baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }
}
//create 2 obj by 1 class using constructor obj
const employee = new Employee('mir', 22000);
const employee2 = new Employee('mir', 24000);

//ata akta suddhi porikkha ai 2ta object ki 'Employee' class er thakay crete kina ta test korche

console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);

console.log(employee);
console.log(employee2);
