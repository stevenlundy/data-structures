var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.head = 0;
  instance.tail = 0;
  return instance;
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


