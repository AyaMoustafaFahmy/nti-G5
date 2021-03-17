class User{
    name:string
    age: number
    //constructor
    constructor(name: any=null, age:any=null){
        console.log('hello')
    }
    
}
let marwa = new User()
marwa.name="marwa"
marwa.age=36


class User{
    name:string
    age: number
    //constructor
    constructor(othername:string, otherage:number){
        console.log('parent')
        this.name = othername
        this.age = otherage
    }
    getData(){console.log('hello from user')}
}

class Student extends User{
    grades:number[]
    constructor(name:string, age:number, grades: number[]){
        super(name, age)
        console.log('child')
        this.grades = grades
    }
    getData(){console.log('hello from student')}
}
let x = new Student('x', 25, [15,12,10])
console.log(x)
x.getData()

//overloading
//override
//polymorphism



