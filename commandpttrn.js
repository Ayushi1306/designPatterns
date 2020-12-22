// calculator class will execute commands like add n subtract commands

class Calculator {
    constructor(){
        this.value = 0;
        this.history = [];
    }


    executeCommand(command){
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo(){
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}



class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue){
        return currentValue + this.valueToAdd;
    }

    undo(currentValue){
        return currentValue + this.valueToAdd;
    }
}



class SubtractCommand {
    constructor(valueToSubtract)
    {
        this.valueToSubtract = valueToSubtract;
    }

    execute(currentValue){
        return currentValue - this.valueToSubtract;
    }

    undo (currentValue){
        return currentValue - this.valueToSubtract;
    }
}


const calculator = new Calculator ();
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new AddCommand(30));
calculator.executeCommand(new SubtractCommand(5));

console.log(calculator.value);
console.log(calculator.history);

calculator.undo();
console.log(calculator.value);