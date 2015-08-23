var PrefixNode = function(){
  var node = {};
  node.words = [];

  // your code here
  node.children = {};  // fixed

  _.extend(node, nodeMethods);
  return node;
};

var nodeMethods = {};

nodeMethods.addChild = function(word, depth){
  if (depth === word.length){
    this.words.push(word);
    return;
  }
  var ch = word[depth];
  var num = this.numFromChar(ch);
  if (this.children[num] === undefined) {
   this.children[num] = PrefixNode();
  }

  this.children[num].addChild(word, depth+1);
};

nodeMethods.getSuggestions = function(wordNum, depth) {
  if (depth === undefined) {
    depth = 0;
  }
  if(depth === wordNum.length){
    return this.words;
  }
  var ch = wordNum.charAt(depth);
  if(this.children[ch] === undefined){
    return [];
  }
  return this.children[ch].getSuggestions(wordNum, depth + 1);
};

nodeMethods.numFromChar = function(ch) {
  return this.charMap[ch];
}

nodeMethods.charMap = {
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9
}


var PrefixTree = function(words){
  var tree = PrefixNode();

  for (var i = 0; i < words.length; i++) {
    tree.addChild(words[i], 0);
  };

  return tree;
}

