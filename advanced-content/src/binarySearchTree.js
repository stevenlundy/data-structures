var BinarySearchTree = function(value){
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left;
  bst.right;
  bst.size = 1
  bst.maxDepth = 1;
  return bst;
}; 

BinarySearchTree.prototype.insert = function(value, root) {
  root = root || this;
  if (this.value === undefined) {
    this.value = value;
    return;
  }
  var direction = value > this.value ? 'right' : 'left';
  this.size++;
  if (this[direction] !== undefined) {
    var depthReached = this[direction].insert(value, root) + 1;
    if(depthReached > this.maxDepth){
      this.maxDepth = depthReached;
    }
    var minDepth = Math.floor(Math.log2(this.size)) + 1;

    if(this.maxDepth > 2*minDepth && this === root){
      root.rebalance();
    }
    return depthReached;
  }
  else {
    var depthReached = 2;
    if(depthReached > this.maxDepth){
      this.maxDepth = depthReached;
    }
    this[direction] = BinarySearchTree(value);
    return depthReached;
  }  
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  else if (this.value < value && this.right) {
    return this.right.contains(value);
  }
  else if (this.value > value && this.left) {
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

BinarySearchTree.prototype.eachInOrder = function(cb) {
  if (this.left) {
    this.left.eachInOrder(cb);
  }
  cb(this.value);
  if (this.right) {
    this.right.eachInOrder(cb);
  }
}
BinarySearchTree.prototype.rebalance = function(){
  var values = [];
  this.eachInOrder(function(value){
    values.push(value);
  });
  var superBinaryTraverse = function (list, cb, beg, end) {
    beg = beg === undefined ? 0 : beg;
    end = end === undefined ? list.length - 1 : end;

    if(beg > end) {
      return;
    }

    var mid = Math.floor((beg+end)/2);
    cb(list[mid]);
    superBinaryTraverse(list, cb, beg, mid - 1);
    superBinaryTraverse(list, cb, mid + 1, end);
  }
  var balancedTree = BinarySearchTree();

  superBinaryTraverse(values, function(value){
    balancedTree.insert(value);
  });

  this.value = balancedTree.value;
  this.left = balancedTree.left;
  this.right = balancedTree.right;

}

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var queue = new Queue();
  queue.enqueue(this);
  while (queue.size()) {
    var node = queue.dequeue();
    if(node.left) {
      queue.enqueue(node.left);
    }
    if(node.right) {
      queue.enqueue(node.right);
    }
    cb(node.value);
  }
}

BinarySearchTree.prototype.closest = function(target, closest) {
  closest = closest || this.value;
  console.log("ONCE");
  var prevDiff = Math.abs(closest - target);
  var currDiff = Math.abs(this.value - target);
  console.log(closest);
  // console.log("PREV DIFF : " + prevDiff);
  // console.log("cURR DIFF : " + currDiff);
  
  // debugger;
  if(currDiff < prevDiff){
    closest = this.value;
  }
  if (target === this.value){
    return this.value;
  } 
  if (target < this.value && this.left) {
    return this.left.closest(target, closest);
  } else if (target > this.value && this.right) {
    return this.right.closest(target, closest);
  } else {
    return closest;
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
