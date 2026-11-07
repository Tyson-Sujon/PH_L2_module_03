// proctect a state and change it through method 
//JS er nijersso kono modifier nai tobe 'TS' er se
//3 ta visibility access Modifier
//? public modifier
//? private modifier [data read or write ba modify korte dei na]
//? protected modifier
//? speital:readonly modifier  [data read  korte dei na]
//get method-er kaj private property sorto shapekkhe dekhano
class Employee {
    name;
    _baseSalary;
    // constructor(public name: string,
    // private baseSalary:number){
    //     this.name=name;
    //     this.baseSalary=baseSalary;
    // }
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
        // this.name = name,
        // this._baseSalary =_baseSalary 
    }
    //get method
    //baseSalary private key ta read korbe kintu ata modify hobe na
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
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
}
const employee = new Employee('mir', 22000);
const employee2 = new Employee('mizan get', 24000);
// employee.baseSalary=-500;
// console.log(employee.baseSalary=-500);
// Setter or set method ta চালু করে
employee.baseSalery = 22000;
console.log(employee.baseSalary);
console.log(employee.salaryWithBonus);
export {};
