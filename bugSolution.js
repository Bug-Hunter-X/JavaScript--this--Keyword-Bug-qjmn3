function myFunc() {
  console.log(this);
}

const obj = { myFunc };

const myFuncBound = myFunc.bind(obj);
myFuncBound(); // this will now correctly log the obj object