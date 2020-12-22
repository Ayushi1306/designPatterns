//rely the engineer creation to the factory, 
//so consumer can abstract from it. 
//By other hand, privateSkills is not accessible,
// from outside the function forcing the encapsulation.

function createEngineer(){
    const privateSkills={};

    const engineer = {
        getSkill: name =>{
            if(!name) throw new Error("A skill must have a name");

            if(!privateSkills[name])
               throw new Error("Doesn't exist any skill with that name");
            return privateSkills[name];   
        },

        setSkill: (name,value) => {
            if(!name) throw new Error("A skill must have a name");

            if(!value) throw new Error("You must specify a value");
            privateSkills[name] = value;
        }
    };
    return engineer;
}


const engineer = createEngineer();
engineer.setSkill("JS","High");
console.log(engineer.getSkill("JS"))
console.log(engineer.privateSkills)