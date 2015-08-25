
var BloomFilter = function(m, k) {
  this.m = m;
  this.hashFunctions = [];
  for (var i = 0; i < k; i++) {
    var ch = String.fromCharCode(i+97);
    this.hashFunctions[i] = function(str) {
      return getHashForKey(str, m, ch);
    };
  };
  this.storage = 0;
};

BloomFilter.prototype.isBitSet = function(n) {
  var storage = this.storage;
  var subtractor = Math.pow(2, this.m);
  var decN = Math.pow(2, n);
  while (storage >= decN) {
    if(storage >= subtractor){
      if (subtractor === decN) {
        return true;
      }
      storage -= subtractor;
    }
    subtractor /= 2;
  }
  return false;
};

BloomFilter.prototype.setBit = function(n) {
  var bit = Math.pow(2, n);
  this.storage = this.storage | bit;
};

BloomFilter.prototype.contains = function(v) {
  return _.every(this.hashFunctions, function(hashFunction) {
    var bit = hashFunction(v);
    return this.isBitSet(bit);
  }.bind(this));
}

BloomFilter.prototype.add = function(v) {
  for (var i = 0; i < this.hashFunctions.length; i++) {
    var bit = this.hashFunctions[i](v);
    this.setBit(bit);
  };
};

var getHashForKey = function(str, max, seed){
  str = seed + str;
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};