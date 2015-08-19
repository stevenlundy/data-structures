var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

 //  Queue.prototype.enqueue = function(value) {
 //    this.storage[this.tail++] = value;
 //  };
 // Queue.prototype.dequeue = function() {
 //    if (this.head !== this.tail) {
 //      return this.storage[this.head++];
 //    }
 //  };
 //  Queue.prototype.size = function() {
 //    return this.tail-this.head;
 //  };

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
}


_.extend(Queue.prototype, queueMethods);

var q = new Queue();



