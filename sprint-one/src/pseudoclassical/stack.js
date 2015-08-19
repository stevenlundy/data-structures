var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = 0;
  this.storage = {};
};


  Stack.prototype.push = function(value){
    this.storage[this.top++] = value;
  };
  Stack.prototype.pop = function(){
    if(this.top !== 0){
      return this.storage[--this.top];
    }
  };
  Stack.prototype.size = function(){
    return this.top;
  };
