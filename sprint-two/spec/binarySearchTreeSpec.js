describe('binarySearchTree', function() {
  var binarySearchTree;
  var nums = [];
  for (var i = 0; i < 5000000; i++) {
    nums.push(i*3);
  };
  
  var shuffled = _.shuffle(nums);
  var bst = BinarySearchTree(shuffled[0]);
  for (var i = 1; i < shuffled.length; i++) {
    bst.insert(shuffled[i]);
  };
  // bst.breadthFirstLog(function(item) {
    // console.log(item);
  // });

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(bst.contains(7)).to.equal(false);
    expect(bst.contains(9)).to.equal(true);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });
  it('should search for the closest number', function() {
    expect(bst.closest(16)).to.eql(15);
  });
  it('should find value if in bst using closest', function() {
    expect(bst.closest(12)).to.eql(12);
  });
  it('compareToArray', function() {
    var closest = shuffled[0];
    var target = 16;
    for (var i = 0; i < shuffled.length; i++) {
      var prevDiff = Math.abs(closest - target);
      var currDiff = Math.abs(shuffled[i] - target);
      if (currDiff < prevDiff) {
        closest = shuffled[i];
      }
    };
    expect(closest).to.eql(15);
  });
});
