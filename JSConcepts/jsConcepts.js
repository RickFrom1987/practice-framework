
class JSConcepts {
  constructor() {}
  /*
    Currying refers to the process of transforming a function with
    multiple arity into the same function with less arity.
    The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation. Here’s an example of what a curried function looks like:
  */
  curry(testVal) {
    const curryFn = (a) => {
      return (b) => {
        return `I want some curry ${a} and ${b}`;
      };
    }
    return curryFn(testVal);
  }
  solve(){

  }
}

module.exports = JSConcepts;