var Queue = function(){
  var someInstance = {};
  var head = 0;
  var tail = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail++] = value;
  };

  someInstance.dequeue = function(){
    
    if (head === tail){
      return undefined;
    }
    var elm = storage[head];
    delete storage[head];
    head++;
    return elm;
  };

  someInstance.size = function(){
    return tail - head;
  };

  return someInstance;
};
