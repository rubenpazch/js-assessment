exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var iterador = 0;
    while (iterador < arr.length) {
      if (item === arr[iterador]) {
        return iterador;
      }
      iterador += 1;
    }
    return -1;
  },

  sum: function(arr) {
    var iterador = 0;
    var result = 0;
    while (iterador < arr.length){
      result += arr[iterador];
      iterador += 1;
    }
    return result;
  },

  remove: function(arr, item) {
    var iterador = 0;
    var tempArr = [];
    while (iterador < arr.length) {
      if (item !== arr[iterador]) {
        tempArr.push(arr[iterador]);
      }
      iterador += 1;
    }
    return tempArr;
  },

  removeWithoutCopy: function(arr, item) {
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
