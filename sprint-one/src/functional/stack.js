var Stack = function(){
  var someInstance = {};
  var top = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[top++] = value;
  };

  someInstance.pop = function(){
    if(top !== 0) {
      return storage[--top];
    }
  };

  someInstance.size = function(){
    return top;
  };

  return someInstance;
};
