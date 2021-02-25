class People{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayHi(){
        console.log(`我叫${this.name}，我${this.age}岁`)
    }
}
class Student extends People{
    constructor(name,age,xh){
        super(name,age)
        this.xh=xh
    }
    study(){
        console.log(`我的学号是${this.xh}`)
    }
}
class Teacher extends People{
    constructor(name,age,sub){
        super(name,age)
        this.sub=sub
    }
    teach(){
        console.log(`我教${this.sub}`)
    }
}
const zs= new Student('张三',18,2017)
const wsl= new Teacher('王老师',28,'数学')
zs.sayHi()
zs.study()
wsl.sayHi()
wsl.teach()
//  继承