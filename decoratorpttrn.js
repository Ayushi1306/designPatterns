//DecoratedUser receives 2 arguments that 
//help to modify the same funcn

const User = function(name){
    this.name = name;
    this.say = function(){
        console.log(`User: ${this.name}`);
    };
};


const DecoratedUser = function(user,address,city){
    this.user = user;
    this.name = user.name;  //ensures interface stays the same
    this.address = address;
    this.city = city;

    this.say = function(){
        console.log(`Decorated User: ${this.name}, ${this.address}, ${this.city}`);
    };
};

const user = new User('Ayu ');
user.say();
const decorated = new DecoratedUser(user, "met stadium", "N J ");
decorated.say();