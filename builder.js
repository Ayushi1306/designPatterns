class Address {
    constructor(zip,street){
        this.zip = zip;
        this.street = street;
    }
}

class User{

    /**
     * We can also pass default value of key when create object
     * like constructor
     */

     constructor(name,{age,phone,address} = {}){
         this.name = name;
         this.age = age;
         this.phone = phone;
         this.address = address;
     }
}

let user = new User("Ayushi", {age:25, address: new Address("344242","LON")});
console.log(user);