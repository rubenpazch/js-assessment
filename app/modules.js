exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return {
      sayIt: function(){
        return this.greeting.concat(', ').concat(this.name);
      },
      name: str2,
      greeting: str1
    };
  }
};
