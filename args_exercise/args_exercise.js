function sum1(...args) {
  return args.reduce((prev, current) => {
    return prev + current;
  });
}

function sum2() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  console.log(sum);
}


// apply version
Function.prototype.myBind = function() {
  let ctx = arguments[0];
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;

  return function() {
    let callArgs = Array.from(arguments);
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};

//call and rest (...) operator version
Function.prototype.myBind2 = function() {
  let ctx = arguments[0];
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;

  return function() {
    let callArgs = Array.from(arguments);
    return that.call(ctx, ...bindArgs.concat(callArgs));
  };
};



function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}



Function.prototype.curry2 = function (numArgs) {
  let args = [];  //set empty array to store args
  let curried = (arg) => {  //set function to take care of each argument
    args.push(arg);  //args, our empty array, will push in each argument if
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return curried;
    }
  };
  return curried;
};
