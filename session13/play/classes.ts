/*
user => name , age, address
student=> name, age, address, grades[]
teacher => name, age, address, salary
*/
class UserClass{
    private _name : string = ''
    private _age : number = 0
    private _address : string = ''
    constructor(name:string, age:number, address:string){
        this._name = name
        this._age = age
        this._address = address
    }
    set name(value:string){this._name=value}
    get name(){return this._name}
    set age(value:number){this._age=value}
    get age(){return this._age}
    set address(value:string){this._address=value}
    get address(){return this._address}

}
class Student extends UserClass{
    private _grades : number[] =[]
    constructor(name:string, age:number, address:string, grades:number[]){
        super(name, age, address)
        this._grades = grades
    }
    set grades(value:number[]){this._grades=value}
    get grades(){return this._grades}
}
class Teacher extends UserClass{
    private _salary : number =0
    constructor(name:string, age:number, address:string, salary:number){
        super(name, age, address)
        this._salary = salary
    }
    set salary(value:number){this._salary=value}
    get salary(){return this._salary}
}