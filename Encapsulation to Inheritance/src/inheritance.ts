//* inheritance: A manager is an Employee with an additional responsibility.
//? parent class thakay child class innherite kore child class e perent er sob property paya jabe

class Employee {

    constructor(
        public name:string, 
        private _baseSalary:number,
    ){}
       
  
  get baseSalary() :number {
        return this._baseSalary;  
    }

    
    // newSalary: number কেন Parentheses-এর ভিতরে?
    // কারণ newSalary হলো Setter-এর Parameter।
    // Parameter-এর কাজ হলো বাইরে থেকে পাঠানো Data গ্রহণ করা।

    
   // শুধু Setter or set তৈরি হলো, Execute হয়নি।
    set baseSalery(newSalary: number){

        if (newSalary<0) {
            throw new Error("salary can not be negative.");    
        }
        this._baseSalary=newSalary;
    }
    describe(): string{
    return `${this.name} earn ${this.baseSalary}`; 
}
    
}

//? 'child class= Manager' class ke super class korche Extends dia 'parent class=employee'

class Manager extends Employee{

    //? super method call er maddhome parent class er property access kora jai
    // ?class Manager এখানে দুটি Constructor আছে:
    // ? Employee → Parent Class Constructor
    // ?Manager → Child Class Constructor

    // এটি 'teamMemberCount' Manager Class-এর Property
    teamMemberCount: number;

    constructor(name:string, _baseSalary:number,teamMemberCount:number){
        //? super method এটি Constructor-এর প্রথম code Statement
        //? super method muloto Employee class er constructor e data send kore
        super(name,_baseSalary);
        this.teamMemberCount=teamMemberCount;
    }
    
    
}

const employee = new Employee('mir', 22000);

// Setter or set method ta চালু করে

employee.baseSalery=22000;

console.log(employee.baseSalary);
console.log(employee.describe());

const manager =new Manager('Mizan',24000,20)

