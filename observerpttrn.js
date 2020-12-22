class Subject {
    constructor(){
        this.observers = [];

        //array of observer fns
    }

    subscribe(fn){
        this.observers.push(fn)
    }

    unsubscribe(fnToRemove){
        this.observers = this.observers.filter(fn => {
            if(fn !=  fnToRemove)
                return fn
        })
    }


    fire(){
        this.observers.forEach(fn => {
            //will call subscribed observables
            fn.call()
        })
    }
}


const subject = new Subject()
function Observer1(){
    console.log("Observer1 firing !")
}

function Observer2(){
    console.log("Observer2 firing !")
}


subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.fire();


subject.unsubscribe(Observer1);
subject.fire();