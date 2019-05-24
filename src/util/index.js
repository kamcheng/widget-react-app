
const merge = (a,b, prop, isAsc) => {
    var result = [];
    while (a.length >0 && b.length >0) {
        if(isAsc) {
            result.push(a[0][prop] < b[0][prop] ? a.shift() : b.shift());
        } else {
            result.push(a[0][prop] > b[0][prop] ? a.shift() : b.shift());
        }
    }
    return result.concat(a.length? a : b);
}

export const mergeSort = (arr, prop, isAsc) => {    
    if (arr.length < 2) return arr;
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid), prop, isAsc);
    var subRight = mergeSort(arr.slice(mid), prop, isAsc);
    
    return merge(subLeft, subRight, prop, isAsc);
}

export const sortedData = (data, prop, isAsc) => {
    return data.sort((a, b) => {
        let ap = a[prop];
        let bp = b[prop];
        if(isNaN(ap) || isNaN(ap)) {
            ap = a[prop].toLowerCase();
            bp = b[prop].toLowerCase();
        }
        return (ap < bp ? -1 : 1) * (isAsc ? 1 : -1)
    })
}

const searchFieldNames = ["description", "name"];

export const searchData = (data, query) => {
    return data.filter((widget) => {
        return searchFieldNames.find((field) => {
            return widget[field].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    })
}



//For IE 11
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}