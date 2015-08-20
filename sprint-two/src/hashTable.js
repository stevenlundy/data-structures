var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    var obj = {};
    obj[k] = v;
    this._storage.set(i, obj);
  }
  else {
    var stored = this._storage.get(i);
    stored[k] = v;
    this._storage.set(i, stored);
  }
}; 

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    return this._storage.get(i)[k] || null;
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var stored = this._storage.get(i);
  delete stored[k];
  this._storage.set(i, stored);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
