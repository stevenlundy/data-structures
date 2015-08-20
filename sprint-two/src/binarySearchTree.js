var BinarySearchTree = function(value){
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left;
  bst.right;
  return bst;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right !== undefined) {
      this.right.insert(value);
    }
    else {
      this.right = BinarySearchTree(value);
    }
  }
  else if (value < this.value) {
    if (this.left !== undefined) {
      this.left.insert(value);
    }
    else {
      this.left = BinarySearchTree(value);
    }
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

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var byDepth = [];
  function depthFirstRecursive(tree, depth, index) {
    if (byDepth[depth] === undefined) {
      byDepth.push([]);
    }
    byDepth[depth][index] = tree.value;
    if (tree.left !== undefined) {
      depthFirstRecursive(tree.left, depth+1, index*2);
    }
    if (tree.right !== undefined) {
      depthFirstRecursive(tree.right, depth+1, index*2+1);
    }
  }
  depthFirstRecursive(this, 0, 0);
  for (var i = 0; i < byDepth.length; i++) {
    cb(byDepth[i]);
  };

}

BinarySearchTree.prototype.closest = function(target, closest) {
  closest = closest || this.value;
  console.log("ONCE");
  var prevDiff = Math.abs(closest - target);
  var currDiff = Math.abs(this.value - target);
  console.log(closest);
  console.log("PREV DIFF : " + prevDiff);
  console.log("cURR DIFF : " + currDiff);
  
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
