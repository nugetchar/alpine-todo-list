(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Component =
/*#__PURE__*/
function () {
  function Component(el) {
    _classCallCheck(this, Component);

    this.el = el;
    var rawData = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEval"])(this.el.getAttribute('x-data'), {});
    this.data = this.wrapDataInObservable(rawData);
    this.initialize();
    this.listenForNewElementsToInitialize();
  }

  _createClass(Component, [{
    key: "wrapDataInObservable",
    value: function wrapDataInObservable(data) {
      this.concernedData = [];
      var self = this;

      var proxyHandler = function proxyHandler(keyPrefix) {
        return {
          set: function set(obj, property, value) {
            var propertyName = keyPrefix ? "".concat(keyPrefix, ".").concat(property) : property;
            var setWasSuccessful = Reflect.set(obj, property, value);

            if (self.concernedData.indexOf(propertyName) === -1) {
              self.concernedData.push(propertyName);
            }

            self.refresh();
            return setWasSuccessful;
          },
          get: function get(target, key) {
            if (_typeof(target[key]) === 'object' && target[key] !== null) {
              var propertyName = keyPrefix ? "".concat(keyPrefix, ".").concat(key) : key;
              return new Proxy(target[key], proxyHandler(propertyName));
            }

            return target[key];
          }
        };
      };

      return new Proxy(data, proxyHandler());
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["walkSkippingNestedComponents"])(this.el, function (el) {
        _this.initializeElement(el);
      });
    }
  }, {
    key: "initializeElement",
    value: function initializeElement(el) {
      var _this2 = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getXAttrs"])(el).forEach(function (_ref) {
        var type = _ref.type,
            value = _ref.value,
            modifiers = _ref.modifiers,
            expression = _ref.expression;

        switch (type) {
          case 'on':
            var event = value;

            _this2.registerListener(el, event, modifiers, expression);

            break;

          case 'model':
            // If the element we are binding to is a select, a radio, or checkbox
            // we'll listen for the change event instead of the "input" event.
            var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';

            var listenerExpression = _this2.generateExpressionForXModelListener(el, modifiers, expression);

            _this2.registerListener(el, event, modifiers, listenerExpression);

            var attrName = 'value';

            var _this2$evaluateReturn = _this2.evaluateReturnExpression(expression),
                output = _this2$evaluateReturn.output;

            _this2.updateAttributeValue(el, attrName, output);

            break;

          case 'bind':
            var attrName = value;

            var _this2$evaluateReturn2 = _this2.evaluateReturnExpression(expression),
                output = _this2$evaluateReturn2.output;

            _this2.updateAttributeValue(el, attrName, output);

            break;

          case 'text':
            var _this2$evaluateReturn3 = _this2.evaluateReturnExpression(expression),
                output = _this2$evaluateReturn3.output;

            _this2.updateTextValue(el, output);

            break;

          case 'show':
            var _this2$evaluateReturn4 = _this2.evaluateReturnExpression(expression),
                output = _this2$evaluateReturn4.output;

            _this2.updateVisibility(el, output);

            break;

          case 'if':
            var _this2$evaluateReturn5 = _this2.evaluateReturnExpression(expression),
                output = _this2$evaluateReturn5.output;

            _this2.updatePresence(el, output);

            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;

          default:
            break;
        }
      });
    }
  }, {
    key: "listenForNewElementsToInitialize",
    value: function listenForNewElementsToInitialize() {
      var _this3 = this;

      var targetNode = this.el;
      var observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      var observer = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          if (!mutations[i].target.closest('[x-data]').isSameNode(_this3.el)) return;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            (function () {
              var rawData = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEval"])(mutations[i].target.getAttribute('x-data'), {});
              Object.keys(rawData).forEach(function (key) {
                if (_this3.data[key] !== rawData[key]) {
                  _this3.data[key] = rawData[key];
                }
              });
            })();
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(function (node) {
              if (node.nodeType !== 1) return;
              if (node.matches('[x-data]')) return;

              if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getXAttrs"])(node).length > 0) {
                _this3.initializeElement(node);
              }
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var self = this;
      var actionByDirectiveType = {
        'model': function model(_ref2) {
          var el = _ref2.el,
              output = _ref2.output;
          self.updateAttributeValue(el, 'value', output);
        },
        'bind': function bind(_ref3) {
          var el = _ref3.el,
              attrName = _ref3.attrName,
              output = _ref3.output;
          self.updateAttributeValue(el, attrName, output);
        },
        'text': function text(_ref4) {
          var el = _ref4.el,
              output = _ref4.output;
          self.updateTextValue(el, output);
        },
        'show': function show(_ref5) {
          var el = _ref5.el,
              output = _ref5.output;
          self.updateVisibility(el, output);
        },
        'if': function _if(_ref6) {
          var el = _ref6.el,
              output = _ref6.output;
          self.updatePresence(el, output);
        }
      };

      var walkThenClearDependancyTracker = function walkThenClearDependancyTracker(rootEl, callback) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["walkSkippingNestedComponents"])(rootEl, callback);
        self.concernedData = [];
      };

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["debounce"])(walkThenClearDependancyTracker, 5)(this.el, function (el) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getXAttrs"])(el).forEach(function (_ref7) {
          var type = _ref7.type,
              value = _ref7.value,
              expression = _ref7.expression;
          if (!actionByDirectiveType[type]) return;

          var _self$evaluateReturnE = self.evaluateReturnExpression(expression),
              output = _self$evaluateReturnE.output,
              deps = _self$evaluateReturnE.deps;

          if (self.concernedData.filter(function (i) {
            return deps.includes(i);
          }).length > 0) {
            actionByDirectiveType[type]({
              el: el,
              attrName: value,
              output: output
            });
          }
        });
      });
    }
  }, {
    key: "generateExpressionForXModelListener",
    value: function generateExpressionForXModelListener(el, modifiers, dataKey) {
      var rightSideOfExpression = '';

      if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle it's value inside the array.
        if (Array.isArray(this.data[dataKey])) {
          rightSideOfExpression = "$event.target.checked ? ".concat(dataKey, ".concat([$event.target.value]) : ").concat(dataKey, ".filter(i => i !== $event.target.value)");
        } else {
          rightSideOfExpression = "$event.target.checked";
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        rightSideOfExpression = modifiers.includes('number') ? 'Array.from($event.target.selectedOptions).map(option => { return parseFloat(option.value || option.text) })' : 'Array.from($event.target.selectedOptions).map(option => { return option.value || option.text })';
      } else {
        rightSideOfExpression = modifiers.includes('number') ? 'parseFloat($event.target.value)' : modifiers.includes('trim') ? '$event.target.value.trim()' : '$event.target.value';
      }

      if (el.type === 'radio') {
        // Radio buttons only work properly when they share a name attribute.
        // People might assume we take care of that for them, because
        // they already set a shared "x-model" attribute.
        if (!el.hasAttribute('name')) el.setAttribute('name', dataKey);
      }

      return "".concat(dataKey, " = ").concat(rightSideOfExpression);
    }
  }, {
    key: "registerListener",
    value: function registerListener(el, event, modifiers, expression) {
      var _this4 = this;

      if (modifiers.includes('away')) {
        var handler = function handler(e) {
          // Don't do anything if the click came form the element or within it.
          if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

          if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
          // is from outside it, let's run the expression.

          _this4.runListenerHandler(expression, e);

          if (modifiers.includes('once')) {
            document.removeEventListener(event, handler);
          }
        }; // Listen for this event at the root level.


        document.addEventListener(event, handler);
      } else {
        var listenerTarget = modifiers.includes('window') ? window : el;

        var _handler = function _handler(e) {
          var modifiersWithoutWindow = modifiers.filter(function (i) {
            return i !== 'window';
          });
          if (event === 'keydown' && modifiersWithoutWindow.length > 0 && !modifiersWithoutWindow.includes(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["kebabCase"])(e.key))) return;
          if (modifiers.includes('prevent')) e.preventDefault();
          if (modifiers.includes('stop')) e.stopPropagation();

          _this4.runListenerHandler(expression, e);

          if (modifiers.includes('once')) {
            listenerTarget.removeEventListener(event, _handler);
          }
        };

        listenerTarget.addEventListener(event, _handler);
      }
    }
  }, {
    key: "runListenerHandler",
    value: function runListenerHandler(expression, e) {
      this.evaluateCommandExpression(expression, {
        '$event': e,
        '$refs': this.getRefsProxy()
      });
    }
  }, {
    key: "evaluateReturnExpression",
    value: function evaluateReturnExpression(expression) {
      var affectedDataKeys = [];

      var proxyHandler = function proxyHandler(prefix) {
        return {
          get: function get(object, prop) {
            // Sometimes non-proxyable values are accessed. These are of type "symbol".
            // We can ignore them.
            if (_typeof(prop) === 'symbol') return;
            var propertyName = prefix ? "".concat(prefix, ".").concat(prop) : prop; // If we are accessing an object prop, we'll make this proxy recursive to build
            // a nested dependancy key.

            if (_typeof(object[prop]) === 'object' && object[prop] !== null && !Array.isArray(object[prop])) {
              return new Proxy(object[prop], proxyHandler(propertyName));
            }

            affectedDataKeys.push(propertyName);
            return object[prop];
          }
        };
      };

      var proxiedData = new Proxy(this.data, proxyHandler());
      var result = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEval"])(expression, proxiedData);
      return {
        output: result,
        deps: affectedDataKeys
      };
    }
  }, {
    key: "evaluateCommandExpression",
    value: function evaluateCommandExpression(expression, extraData) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["saferEvalNoReturn"])(expression, this.data, extraData);
    }
  }, {
    key: "updateTextValue",
    value: function updateTextValue(el, value) {
      el.innerText = value;
    }
  }, {
    key: "updateVisibility",
    value: function updateVisibility(el, value) {
      if (!value) {
        el.style.display = 'none';
      } else {
        if (el.style.length === 1 && el.style.display !== '') {
          el.removeAttribute('style');
        } else {
          el.style.removeProperty('display');
        }
      }
    }
  }, {
    key: "updatePresence",
    value: function updatePresence(el, expressionResult) {
      if (el.nodeName.toLowerCase() !== 'template') console.warn("Alpine: [x-if] directive should only be added to <template> tags.");
      var elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

      if (expressionResult && !elementHasAlreadyBeenAdded) {
        var clone = document.importNode(el.content, true);
        el.parentElement.insertBefore(clone, el.nextElementSibling);
        el.nextElementSibling.__x_inserted_me = true;
      } else if (!expressionResult && elementHasAlreadyBeenAdded) {
        el.nextElementSibling.remove();
      }
    }
  }, {
    key: "updateAttributeValue",
    value: function updateAttributeValue(el, attrName, value) {
      if (attrName === 'value') {
        if (el.type === 'radio') {
          el.checked = el.value == value;
        } else if (el.type === 'checkbox') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            var valueFound = false;
            value.forEach(function (val) {
              if (val == el.value) {
                valueFound = true;
              }
            });
            el.checked = valueFound;
          } else {
            el.checked = !!value;
          }
        } else if (el.tagName === 'SELECT') {
          this.updateSelect(el, value);
        } else {
          el.value = value;
        }
      } else if (attrName === 'class') {
        if (Array.isArray(value)) {
          el.setAttribute('class', value.join(' '));
        } else {
          // Use the class object syntax that vue uses to toggle them.
          Object.keys(value).forEach(function (classNames) {
            if (value[classNames]) {
              classNames.split(' ').forEach(function (className) {
                return el.classList.add(className);
              });
            } else {
              classNames.split(' ').forEach(function (className) {
                return el.classList.remove(className);
              });
            }
          });
        }
      } else if (['disabled', 'readonly', 'required', 'checked', 'hidden'].includes(attrName)) {
        // Boolean attributes have to be explicitly added and removed, not just set.
        if (!!value) {
          el.setAttribute(attrName, '');
        } else {
          el.removeAttribute(attrName);
        }
      } else {
        el.setAttribute(attrName, value);
      }
    }
  }, {
    key: "updateSelect",
    value: function updateSelect(el, value) {
      var arrayWrappedValue = [].concat(value).map(function (value) {
        return value + '';
      });
      Array.from(el.options).forEach(function (option) {
        option.selected = arrayWrappedValue.includes(option.value || option.text);
      });
    }
  }, {
    key: "getRefsProxy",
    value: function getRefsProxy() {
      var self = this; // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy({}, {
        get: function get(object, property) {
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          Object(_utils__WEBPACK_IMPORTED_MODULE_0__["walkSkippingNestedComponents"])(self.el, function (el) {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }
      });
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var Alpine = {
  start: function start() {
    var _this = this;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function start$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isTesting"])()) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["domReady"])());

          case 3:
            this.discoverComponents(function (el) {
              _this.initializeComponent(el);
            }); // It's easier and more performant to just support Turbolinks than listen
            // to MutationOberserver mutations at the document level.

            document.addEventListener("turbolinks:load", function () {
              _this.discoverUninitializedComponents(function (el) {
                _this.initializeComponent(el);
              });
            });
            this.listenForNewUninitializedComponentsAtRunTime(function (el) {
              _this.initializeComponent(el);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  discoverComponents: function discoverComponents(callback) {
    var rootEls = document.querySelectorAll('[x-data]');
    rootEls.forEach(function (rootEl) {
      callback(rootEl);
    });
  },
  discoverUninitializedComponents: function discoverUninitializedComponents(callback) {
    var rootEls = document.querySelectorAll('[x-data]');
    Array.from(rootEls).filter(function (el) {
      return el.__x === undefined;
    }).forEach(function (rootEl) {
      callback(rootEl);
    });
  },
  listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
    var targetNode = document.querySelector('body');
    var observerOptions = {
      childList: true,
      attributes: true,
      subtree: true
    };
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          mutations[i].addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            if (node.matches('[x-data]')) callback(node);
          });
        }
      }
    });
    observer.observe(targetNode, observerOptions);
  },
  initializeComponent: function initializeComponent(el) {
    el.__x = new _component__WEBPACK_IMPORTED_MODULE_1__["default"](el);
  }
};

if (window !== undefined && !window.Alpine && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isTesting"])()) {
  window.Alpine = Alpine;
  window.Alpine.start();
}

/* harmony default export */ __webpack_exports__["default"] = (Alpine);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: domReady, isTesting, kebabCase, walkSkippingNestedComponents, debounce, onlyUnique, saferEval, saferEvalNoReturn, isXAttr, getXAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domReady", function() { return domReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTesting", function() { return isTesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabCase", function() { return kebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkSkippingNestedComponents", function() { return walkSkippingNestedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUnique", function() { return onlyUnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saferEval", function() { return saferEval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saferEvalNoReturn", function() { return saferEvalNoReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isXAttr", function() { return isXAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXAttrs", function() { return getXAttrs; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Thanks @stimulus:
// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}
function isTesting() {
  return navigator.userAgent, navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
}
function walkSkippingNestedComponents(el, callback) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (el.hasAttribute('x-data') && !isRoot) return;
  callback(el);
  var node = el.firstElementChild;

  while (node) {
    walkSkippingNestedComponents(node, callback, false);
    node = node.nextElementSibling;
  }
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
;
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function saferEval(expression, dataContext) {
  var additionalHelperVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Function(['$data'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "var result; with($data) { result = ".concat(expression, " }; return result")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));
}
function saferEvalNoReturn(expression, dataContext) {
  var additionalHelperVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Function(['$data'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "with($data) { ".concat(expression, " }")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));
}
function isXAttr(attr) {
  var xAttrRE = /x-(on|bind|data|text|model|if|show|cloak|ref)/;
  return xAttrRE.test(attr.name);
}
function getXAttrs(el, type) {
  return Array.from(el.attributes).filter(isXAttr).map(function (attr) {
    var typeMatch = attr.name.match(/x-(on|bind|data|text|model|if|show|cloak|ref)/);
    var valueMatch = attr.name.match(/:([a-zA-Z\-]+)/);
    var modifiers = attr.name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(function (i) {
        return i.replace('.', '');
      }),
      expression: attr.value
    };
  }).filter(function (i) {
    // If no type is passed in for filtering, bypassfilter
    if (!type) return true;
    return i.type === name;
  });
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/calebporzio/Documents/Code/sites/alpine/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
},{}],2:[function(require,module,exports){
'use strict'
let Alpine = require('alpinejs');

Alpine.default.start();
},{"alpinejs":1}]},{},[2]);
