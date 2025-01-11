function myFunc() {
  console.log(this);
}

myFunc(); // this will be the global object (window in browsers, undefined in strict mode)

const obj = { myFunc };
obj.myFunc(); // this will be the obj object

const myFuncBound = myFunc.bind(obj);
myFuncBound(); // this will be the obj object