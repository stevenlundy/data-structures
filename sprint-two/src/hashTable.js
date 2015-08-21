var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) === undefined) {
    var tuples = [];
    tuples.push([k, v]);
    this._storage.set(i, tuples);
  }
  else {
    var stored = this._storage.get(i);
    var previousValue = this.remove(k);
    stored.push([k, v]);
    return previousValue;
  }
}; 

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(i);
  if (tuples !== undefined) {
    for (var i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        return tuples[i][1];
      }
    };
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(i);
  if (tuples !== undefined) {
    for (var i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        var previousValue = tuples[i][1];
        tuples.splice(i, 1);
        return previousValue;
      }
    };
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
