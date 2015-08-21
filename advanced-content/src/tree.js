var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed
  newTree.parent = null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.traverse = function(cb) {
  if (this.value !== undefined) {
    cb(this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};

treeMethods.removeFromParent = function() {
  var iOfThis = this.parent.children.indexOf(this);
  this.parent.children.splice(iOfThis, 1);
  this.parent = null;
  return this;
}

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
