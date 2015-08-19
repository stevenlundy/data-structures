var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    }
    else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if (list.head === null) {
      return;
    }
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target){
      pointer = list.head;
      while (pointer) {
        if (pointer.value === target) {
          return true;
        }
        pointer = pointer.next;
      }
      return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
