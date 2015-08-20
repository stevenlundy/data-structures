 var LinkedList = function(){
  this.head = null;
  this.tail = null;

  var Node = function(value){
    var node = {};

    node.value = value;
    node.prev = null;
    node.next = null;

    return node;
  };

  this.addToEnd = function(value, end) {
    var inside = end === 'tail' ? 'prev' : 'next';
    var outside = end === 'tail' ? 'next' : 'prev';
    var otherEnd = end === 'tail' ? 'head' : 'tail';

    if(this[end] === null){
      this[end] = Node(value);
      this[otherEnd] = this[end];
    }
    else{
      this[end][outside] = Node(value);
      this[end][outside][inside] = this[end];
      this[end] = this[end][outside];
    }
  }

  this.addToTail = function(value){
    this.addToEnd(value, 'tail');
  };

  this.addToHead = function(value){
    this.addToEnd(value, 'head');
  };

  this.removeEnd = function(end) {
    var inside = end === 'tail' ? 'prev' : 'next';
    var outside = end === 'tail' ? 'next' : 'prev';
    var otherEnd = end === 'tail' ? 'head' : 'tail';
    if (this[end] === null) {
      return;
    } 
    
    var oldEnd = this[end];
    if (this[end][inside] === null) {
      this[end] = null;
      this[otherEnd] = null;
    }
    else {
      this[end] = this[end][inside];
      this[end][outside] = null;
    }
    return oldEnd.value;
  }

  this.removeTail = function(){
    return this.removeEnd('tail');
  }

  this.removeHead = function(){
    return this.removeEnd('head');
  };

  this.contains = function(target){
      pointer = this.head;
      while (pointer) {
        if (pointer.value === target) {
          return true;
        }
        pointer = pointer.next;
      }
      return false;
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
