describe('bloomFilter', function() {
  var bloomFilter;


  // beforeEach(function() {
  //   bloomFilter = new BloomFilter(13, 3);
  // });

  // it('should have methods named "add" and "constains', function() {
  //   expect(bloomFilter.add).to.be.a("function");
  //   expect(bloomFilter.contains).to.be.a("function");
  // });

  // it('should add values and check that they are', function() {
  //   bloomFilter.add(65);
  //   expect(bloomFilter.contains(65)).to.be.equal(true);
  // });

  // it('should return false if they are not', function() {
  //   bloomFilter.add(2);
  //   expect(bloomFilter.contains(65)).to.be.equal(false);
  // });

  it('should be close to the theoretical number of false positives', function() {
    var m = 18;
    var k = 3;
    var n = 8;
    bloomFilter = new BloomFilter(m, k);
    var fpTheory = Math.pow(1- Math.pow(Math.E,(-k*n/m)),k);
    var nums = [];
    for (var i = 0; i < n; i++) {
      var rand = Math.floor(Math.random()*1000);
      while(nums.indexOf(rand) !== -1){
        rand = Math.floor(Math.random()*1000);
      }

      nums.push(rand);
      bloomFilter.add(rand);
    }

    var fp = 0;
    for(var i = 0; i < 100000; i++){
      if(bloomFilter.contains(i) && nums.indexOf(i) === -1){
        fp++;
      }
    }

    console.log(fpTheory);
    console.log(fp/100000);


  })
});