class Course {
    constructor(data) {
        this.flyweight = FlywightFactory.get(data.user, data.completed);
        this.title= data.title;
    }
}

class Flywight {
    constructor(user,completed){
        this.user=user;
        this.completed=completed;
    }
}

const FlywightFactory =(() => {
//logic
})();