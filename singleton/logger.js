class Logger {
    constructor(){
        if(Logger.instance ==null){  // means no instance created yet
             this.logs = [];
             Logger.instance = this;
        }
        return Logger.instance;
    }

    log(message){
        this.logs.push(message);
        console.log(`log => ${message}`)
    }

    printLogCount(){
        console.log(`${this.logs.length}`);
    }
}


//actual instance of singleton
const logger = new Logger();

Object.freeze(logger);
//prevent that object to change, so in logger class
// cannot add/remove method by other files
module.exports = logger;