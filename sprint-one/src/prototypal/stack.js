var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.top = 0;
  instance.storage = {};
  return instance
};

var stackMethods = {
  push: function(value){
    this.storage[this.top++] = value;
  },
  pop: function(){
    if(this.top !== 0){
      return this.storage[--this.top];
    }
  },
  size: function(){
    return this.top;
  }
};

