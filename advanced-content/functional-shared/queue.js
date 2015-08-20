var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail++] = value;
  },
  dequeue: function() {
    if (this.head !== this.tail) {
      return this.storage[this.head++];
    }
  },
  size: function() {
    return this.tail-this.head;
  }
};