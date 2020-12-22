//restricts instantiation of a class to a single object.
// keeps same instance of that object

var singleton = (function(){
    var obj;
    function createInstance(){
        var obj = new Object();
        return obj;
    }

    return {
        getInstance: function(){
            if(!obj)
            {
                obj=createInstance();
            }
            return obj;
        }
    }
})();