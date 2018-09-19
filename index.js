fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    // EACH //
    each: function(collection,callback) {
      if (typeof collection == "object") {
        for (const key in collection) {
          callback(collection[key],key,collection)
        }
      } else {
        for (let i = 0; i < collection.length; i++){
          callback(collection[i],i,collection)
        }
      }
      return collection;
    },




    // MAP //
    map: function(collection,callback) {
      returnArray = [];
      if (typeof collection == "object") {
        for (const key in collection) {
          returnArray.push(callback(collection[key],key,collection))
        }
      } else {
        for (const el of collection) {
          returnArray.push(callback(el,collection.indexOf(el),collection))
        }
      }
      return returnArray;
    },




    // REDUCE //
    reduce: function(collection,callback,acc=0) {
      for (const el of collection) {
        acc = callback(acc,el,collection)
      }


      return acc;
    },





    // FIND //
    find: function(collection,predicate) {
      let item;
      for (const el of collection) {
        if (predicate(el) == true) {
          item = el;
          break;
        }
      }
      return item;
    },

    // FILTER //
    filter: function(collection,predicate) {
      let items = [];
      for (const el of collection) {
        if (predicate(el) == true) {
          items.push(el)
        }

      }
      return items;
    },






    // SIZE //
    size: function(collection) {
      let counter = 0;
      for (const i in collection){
        counter++;
      }
      return counter;
    },


    // FIRST //
    first: function (collection, number=1) {
      if (number === 1) {
        return collection.slice(0,number)[0]
      }
      return collection.slice(0,number)
    },


    // LAST //
    last: function (collection,number=1) {
      if (number === 1) {
        return collection.slice(-1)[0]
      } else {
        return collection.slice(-number)
      }
    },

    // COMPACT //
    compact: function (collection) {
      let returnArray = [];
      for (const el of collection) {
        if (!!el == true) {
          returnArray.push(el);
        }
      }
      return returnArray;
    },

    // sortBY //
    sortBy: function (collection,callback) {
      return collection.slice(0).sort(
        function(a,b) {
          return callback(a) - callback(b)
        }
      )
    },

    flatten: function (array,shallow=false) {
      returnArray = [];
      if (shallow === true) {
        for (const el of array) {
          if (typeof el == "object") {
            for (const x of el) {
              returnArray.push(x);
            }
          } else {
            returnArray.push(el)
          }
        }
      } else {
        for (const el of array) {
          if (typeof el === "object") {
            returnArray = returnArray.concat(this.flatten(el));
          } else {
            returnArray.push(el)
          }
        }
      }
      return returnArray;
    },


    uniq: function (array,sorted=false,callback=false) {
      let returnArray = [];
      let callBackVal = [];
      if (callback) {
        for (const e of array) {
          if (!callBackVal.includes(callback(e))) {
            callBackVal.push(callback(e))
            if (!returnArray.includes(e)) {
              returnArray.push(e);
              debugger
            }
            }
          }
      } else {
        for (const e of array) {
          if (!returnArray.includes(e)) {
            returnArray.push(e)
          }
        }
      }
      return returnArray
    },


    keys: function(collection) {
      let returnArray = [];
      for (const key in collection) {
        returnArray.push(key)
      }
      return returnArray;
    },

    values: function(collection) {
      let returnArray = [];
      for (const key in collection) {
        returnArray.push(collection[key])
      }
      return returnArray;
    },

    functions: function(object) {
      let returnArray = [];
      for (const key in object) {
        if (typeof object[key] == "function") {
          returnArray.push(key)
        }

      }
      return returnArray.sort();
    },

    giveMeMore: function() {
      return true;
    }


  }
})()

fi.libraryMethod()
