//proxy intercepts the hello method modifying the outcome
// and delegate the goodbye method. It’s possible you need 
//to delegate most methods for a large function. 
//In that case delegates NPM package should help.

const createProxy = subject => ({
    //proxied method
    hello:() => `${subject.hello()} world!`,

    //delegate method
    goodbye :() => subject.goodbye.apply(subject,arguments)
});

const foo = {
    hello: ()=> "Hello foo",
    goodbye:() =>"Goodbye foo"
};

const proxy = createProxy(foo);
console.log(proxy.hello());
console.log(proxy.goodbye());