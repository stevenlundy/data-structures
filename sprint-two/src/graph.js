

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
};

Graph.prototype.getNode = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return this.nodes[i];
    }
  }
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeValue){
  //create node
  this.nodes.push(new GraphNode(nodeValue));
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value){
  return _.some(this.nodes, function(node) {
    return node.value === value;
  })
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(value){
  var node = this.getNode(value);
  // for (var i = 0; i < this.nodes.length; i++) {
  //   if (this.nodes[i].value === value) {
  //     node = this.nodes[i];
  //     break;
  //   }
  // };
  _.each(node.neighbors, function(neighbor){
    this.removeNeighbor(neighbor, node);
  });

  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  fromNode = this.getNode(fromNode);
  toNode = this.getNode(toNode);
  return fromNode.neighbors.indexOf(toNode) > -1
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  fromNode = this.getNode(fromNode);
  toNode = this.getNode(toNode);
  fromNode.neighbors.push(toNode);
  toNode.neighbors.push(fromNode);
};

Graph.prototype.removeNeighbor = function(node, neighbor) {
  var neighborIndex = node.neighbors.indexOf(neighbor);
  node.neighbors.splice(neighborIndex, 1);
}

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  fromNode = this.getNode(fromNode);
  toNode = this.getNode(toNode);

  this.removeNeighbor(fromNode, toNode);
  this.removeNeighbor(toNode, fromNode);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node) {
    cb(node.value);
  });
};

var GraphNode = function(value) {
  this.value = value;
  this.neighbors = [];
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



