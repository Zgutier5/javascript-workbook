'use strict';

const assert = require('assert');

function forEach(arr, callback) {
  // Your code here
  const loopThrough = (arr, callback) => {
    for (let i=0; i<arr.length; i++) {
      console.log(arr[i]);
  
      if (callback) {
        console.log("callback present");
  
        callback(arr[i]);
      }
    }
  }
}

function map(arr, callback) {
  // Your code here
  const arr1 = [];
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if(callback) {
      console.log('callback present')
      arr1.push(callback(arr[i]));
    }

    }
    return arr1

}

function filter(arr, callback) {
  // Your code here
  const arr1 = [];
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if(callback) {
      const callbackreturn = callback(arr[i]);
      console.log('callback present')
      if(callbackreturn){
        arr1.push(callback(arr[i]));
      }
    }
  }
    return arr1

}

function some(arr, callback) {
  // Your code here
  const arr1 = [];
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if(callback) {
      const callbackreturn = callback(arr[i]);
      console.log('callback present')
      if(callbackreturn){
        arr1.push(callback(arr[i]));
      }
    }
  }
}

function every(arr, callback) {
  // Your code here
  const arr1 = [];
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if(callback) {
      const callbackreturn = callback(arr[i]);
      console.log('callback present')
      if(callbackreturn){
        arr1.push(callback(arr[i]));
      }
    }
  }
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
