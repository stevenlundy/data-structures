var HashTable = function(){
  this._limit = 8;
  this._minimum_limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
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
  this._size++;
  // debugger;
  if (this._size >= this._limit * 0.75) {
    console.log("RESIZING");
    this.resize(this._limit*2);
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
  // this._storage.set(i, stored);
  
  if (Object.keys(stored).length === 0) {
    this._size--;
  }
  
  
  if (this._size <= this._limit / 4 && this._limit > 8) {
    this.resize(this._limit/2);
  }

};

HashTable.prototype.resize = function(n) {
  debugger;
  this._limit = n;
  this._size = 0;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  var hashTable = this;
  oldStorage.each(function(bucket){
    for(var key in bucket){
      hashTable.insert(key, bucket[key]);
    }
  });

}



/*
 * Complexity: What is the time complexity of the above functions?
 */
