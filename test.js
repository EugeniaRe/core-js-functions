

// function once(fn) {
// 	var call = true
// 	return function() {
//     if (call) {
//     	call = false
//     	return fn.apply(this, arguments)
//   	}
// 	}
// }


// let logOnce = once(console.log);
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect


// let complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// let cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz');

// function add(n) {
//   console.log(arguments);
//   return function (a) {
//     console.log(arguments);
//     return function (b) {
//       console.log(arguments);
//       return n + a + b;
//     }
//   }
// }

// let res = add(1)(2)(3);
// console.log(res);

console.log(Math.cos(Math.PI));
