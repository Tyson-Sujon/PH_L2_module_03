//* polymorphism : different employees respond differently to the same method call
//? polymorphism 2 vabe kaj kore 1.override 2.overload
// TS or JS sudhu override nea kaj kore
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    // শুধু Setter or set তৈরি হলো, Execute হয়নি।
    set baseSalery(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary can not be negative.");
        }
        this._baseSalary = newSalary;
    }
    //akhanei polymorphisom mane akta function ber ber use kora hocche
    calculatePay(textRate) {
        return this.baseSalary - this.baseSalary * textRate;
    }
}
class Maneger extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay(textRate) {
        return this.baseSalary + 3000 - this.baseSalary * textRate;
    }
}
const employee = new Employee('mir', 20000);
const manager = new Maneger('mizan', 45000);
const developer = new Developer('Firoz', 20000, 'developer');
console.log('polymorphism');
console.log('employee ', employee.calculatePay(0.1));
console.log('manager', manager.calculatePay());
console.log('developer ', developer.calculatePay(0.1));
export {};
