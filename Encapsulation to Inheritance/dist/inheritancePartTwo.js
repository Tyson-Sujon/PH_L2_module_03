//* inheritance: A manager is an Employee with an additional responsibility.
//? parent class thakay child class innherite kore child class e perent er sob property paya jabe
class Employee {
    name;
    _baseSalary;
    constructor(name, 
    // private _baseSalary:number,
    _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    //   get baseSalary() :number {
    //         return this._baseSalary;  
    //     }
    // newSalary: number কেন Parentheses-এর ভিতরে?
    // কারণ newSalary হলো Setter-এর Parameter।
    // Parameter-এর কাজ হলো বাইরে থেকে পাঠানো Data গ্রহণ করা।
    // শুধু Setter or set তৈরি হলো, Execute হয়নি।
    set baseSalery(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary can not be negative.");
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} earn ${this._baseSalary}`;
    }
}
//? 'child class= Manager' class ke super class korche Extends dia 'parent class=employee'
class Manager extends Employee {
    teamMemberCount;
    //? super method এটি Constructor-এর প্রথম code Statement
    //? super method muloto Employee class er constructor e data send kore
    //? super(name,_baseSalary);
    //? this.teamMemberCount=teamMemberCount;
    //? constructor(name:string, _baseSalary:number, public teamMemberCount:number){  
    //? shortcut code
    // এটি 'teamMemberCount' Manager Class-এর Property    protected access modifier
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount}`;
    }
    //proteted access modifire tai ai kaj ta kora possible get() use hoi nai
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
// এটি 'teamMemberCount' Manager Class-এর Property
// teamMemberCount: number;
const employee = new Employee('mir', 22000);
// console.log(employee.baseSalary);
console.log(employee.describe());
const manager = new Manager('Mizan', 24000, 20);
console.log(manager.describe());
console.log('da', manager.describeWork());
console.log('sda', manager.describeManager());
export {};
// 4.40
