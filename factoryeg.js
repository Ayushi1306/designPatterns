class Developer {
    constructor(name){
        this.name = name;
        this.type = "Developer"
    }
}

class Tester {
    constructor(name){
        this.name = name;
        this.type = "Tester"
    }
}

class EmployeeFactory {
    create(name, type){
        switch(type){
            case 1: return new Developer(name);
                   break;
            case 2: return new Tester(name);
                      break;       
        }
    }
}

function say(){
    console.log("Hi I am "+ this.name + " and I am a " + this.type);
}